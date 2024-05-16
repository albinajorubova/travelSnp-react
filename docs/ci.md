# Что такое deploy и что за файлы?

## .gitlab-ci.yml

GitLab CI — инструмент, встроенный в GitLab для автоматизации рутинных задач, возникающих в процессе разработки программного обеспечения. Спектр таких задач огромен и отличается от проекта к проекту, но основные — это тестирование, статический анализ, проверка стиля написания кода и деплой (выпуск) приложения.

GitLab CI полностью конфигурируется с помощью одного файла в формате YAML, который нужно создать в корне проекта — .gitlab-ci.yml.

Основной сущностью в GitLab CI/CD является пайплайн (pipeline) — конвейер, который может состоять из:

- джобов (jobs), описывающих что нужно выполнить;
- этапов (stages), указывающих когда или в какой последовательности нужно выполнить джобы.

Джобы в одном этапе обычно выполняются параллельно. Если все джобы завершились успешно, выполнение переходит к следующему этапу и так далее. Если любой из джобов завершился ошибкой, то выполнение останавливается, и весь пайплайн (обычно) считается проваленным.

Пример файла .gitlab-ci.yml:

```
image: ubuntu_20.04:latest

stages:
  - deploy

before_script:
  - eval $(ssh-agent -s)
  - echo STRAPI_API_KEY=$STRAPI_API_KEY >> .env
  - echo STRAPI_URL=$STRAPI_URL >> .env
  - echo NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL >> .env
  - echo STRAPI_API_URL=$STRAPI_API_URL >> .env

deploy:
  stage: deploy
  script:
    - CURRENT_DIR=$(pwd) && cd ~ && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash && . ~/.nvm/nvm.sh && cd $CURRENT_DIR
    - nvm install
    - npm i
    - npm run lint
    - npm run build
    - export ANSIBLE_HOST_KEY_CHECKING=False
    - ansible-playbook ./deploy.yml -i frontend-only-v2.snpdev.ru, --extra-vars="project=nilfoundation" --extra-vars="build_type=ssr"
  only:
    - testing
```

Описание файла:

- **image** - Docker-образ (подробнее в статье «Что такое Docker»), в котором будут выполняться джобы. [Что такое docker?](https://doka.guide/tools/docker/)
- **stages** - Определяем этапы CI
- **before_script** — эти команды будут выполняться в каждой джобе перед основным действием.
- **deploy** - Описание джобы deploy для этапа deploy (stage: deploy) только для ветки testing (only: -testing)

## deploy.yml

Данный файл отвечает за развертывание и запуск веб-приложения на сервере. В нем поочередно описываются команды (tasks), которые отвечают за deploy приложения

Примерная структура файла:

```
- hosts: all
  user: "{{ project }}"

  vars:
    projectName: "{{ project }}"
    user: "{{ project }}"
    type: "{{ build_type }}"

  tasks:
    - name: Set username
      set_fact:
        remote_user: "{{ user }}"

    - name: Copy SSR build to prod directory
      synchronize:
        src: ./
        dest: /var/www/{{ projectName }}/cs/releases/{{ansible_date_time.date}}-{{ansible_date_time.hour}}{{ansible_date_time.minute}}{{ansible_date_time.second}}
        rsync_opts:
          - "--exclude=node_modules"
          - "--exclude=.git"
          - "--exclude=deploy.yml"
          - "--exclude=.gitlab-ci.yml"
      when: type == 'ssr'

    - name: Save last deployed release path
      shell: basename $(readlink -f "/var/www/{{ projectName }}/cs/current")
      register: lastReleaseName

    - name: Remove old symlink
      shell: |
        rm -f /var/www/{{ projectName }}/cs/current

    - name: Make symlink for new prod
      shell: |
        mkdir -p /var/www/{{ projectName }}/cs/shared
        ln -s /var/www/{{ projectName }}/cs/releases/{{ansible_date_time.date}}-{{ansible_date_time.hour}}{{ansible_date_time.minute}}{{ansible_date_time.second}} /var/www/{{ projectName }}/cs/current

    - name: Run new deployed application
      shell: |
        . ~/.profile && . ~/.nvm/nvm.sh
        cd /var/www/{{ projectName }}/cs/current
        nvm install && nvm use
        npm list -g | grep pm2 || npm i pm2 -g
        npm i && pm2 delete -s {{ projectName }}
        pm2 start ecosystem.config.js
      when: type == 'ssr'

      register: run_result

    - name: Clean old release path
      file:
        state: absent
        path: "/var/www/{{ projectName }}/cs/releases/{{ lastReleaseName.stdout }}"
      register: deleteResult
```

Команды располагаются в блоке **tasks**. Каждая таска имеет поле **name** (Краткое описание команды) и набор команд для выполнения
