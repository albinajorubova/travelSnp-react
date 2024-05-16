## Название проекта

Стартовый шаблон для быстрого создания проектов на Next.js

## Версии

* [NodeJS](https://nodejs.org/en/) - 18.8.0, актуальную версию можно посмотреть в [.nvmrc](.nvmrc)
* [Yarn](https://yarnpkg.com/en/docs/install) - не менее 1.22.5

## Документация

* [ENV переменные](docs/env.md)
* [Базовая настройка](docs/settings.md)
* [Работа с гит](docs/gitflow.md)
* [CI/CD](docs/ci.md)

## Установка
* Установите [NodeJS](https://nodejs.org/en/) (если требуется)
* Для установки предпочтительно использовать [nvm](https://github.com/nvm-sh/nvm)
* установите [Yarn](https://yarnpkg.com/en/docs/install)

## Запуск
```bash
nvm install   # устанавливает нужную версию node из .nvmrc
nvm use       # выбирает необходимую версию node из .nvmrc
yarn          # установка зависимостей
yarn "<task>" # запуск сценария
              # <dev>, <build>
```

## Команды
* ```yarn dev``` - запуск dev сборки для разработки проекта
* ```yarn build``` - Production сборка проекта
* ```yarn start``` - запуск Production сборки проекта
* ```yarn export``` - Сборка статического проекта (Файлы собираются в папку ```out```)
* ```yarn lint``` - Проверка ESlint

## Файловая структура

```
name-project

├── pages
│   ├── api
├── public
│   ├── images
│   ├── fonts
├── src
│   ├── components
│   │   ├── common
│   │   ├── pages
│   ├── hooks
│   ├── utils
│   ├── stubs
│   ├── styles
│   ├── constants
├── .env.sample
├── next.config.js
├── package.json
├── .eslintrc.json
├── .stylelintrc.json
├── .jsconfig.json
└── .gitignore
```

* Корень папки:
  * ```public``` — Статичные файлы проекта (картинки, шрифты и т.д.)
  * ```public/images``` — Статичные изображения
  * ```public/fonts``` — Шрифты
  * ```pages``` — Файлы (компоненты) страниц Next.js ([Читать подробнее](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts))
  * ```pages/api``` — Api роутинг Next.js ([Читать подробнее](https://nextjs.org/docs/pages/building-your-application/routing/api-routes))
  * ```.env.sample``` — Переменные окружения проекта ([Читать подробнее](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables))
  * ```next.config.js``` — Файл конфигурации Next.js
  * ```.eslintrc.json``` — настройки ESLint
  * ```.gitignore``` – запрет на отслеживание файлов Git'ом
  * ```.stylelintrc.json``` — настройки Stylelint
  * ```package.json``` — список зависимостей
  * ```.jsconfig.json``` - настройка путей импортов в проекте

* Папка ```src``` - используется во время разработки:
  * Компоненты: ```src/components```
  * Глобальные компоненты: ```src/components/common```
  * Компоненты страниц: ```src/components/pages```
  * Утилки (вспомогательные функции): ```src/utils```
  * Кастомные хуки: ```src/hooks```
  * Stub данные (мокапы данных): ```src/stubs```
  * Глобальные стили проекта:  ```src/styles```
  * Константы проекта:  ```src/сonstants```

### Структура компонента

* import стороних библиотек
* import  hooks/utils 
* import внешних компонентов 
* import внутренних компонентов 
* import стилей 
* константы

  ```javascript
    import { ... } from 'react';
    import cx from 'classnames';
    import { string } from 'prop-types';
    ...

    import util from 'utils/util';
    import hook from 'hooks/hook';
    ...

    import Button from 'components/Button';
    ...

    import Item from './Item';
    ...

    import s from './Component.module.scss';

    const NUMBER = 10;
    ...

    const Component = ({ className }) => {

      return (
        <Button className={cx(s.root, className)}>
          <Item />
        </Button>
      )
    }

    Component.propTypes = {
      className: string,
    };

    export default Component;
  ```

### Шрифты
* шрифты находятся в папке ```public/fonts```
  * используйте форматы ```.woff``` и ```.woff2```
  * шрифты подключаются в файл ```src/styles/fonts.scss```

### Изображения
* изображения находятся в папке ```public/images```

## Разработано

![alt text](docs/snp.svg)






