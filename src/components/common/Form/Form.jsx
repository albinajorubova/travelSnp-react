import React, { useState } from 'react';
import cx from 'classnames';

import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import Link from 'next/link';

import RadioBtn from './RadioBtn';

import s from './Form.module.scss';

const Form = () => {
  const { register, handleSubmit, control, reset } = useForm();
  const onSubmit = data => console.log(data);

  const DATA = [
    {
      label: 'Имя',
      type: 'text',
      placeholder: 'Введите Ваше имя',
      required: true,
    },
    {
      label: 'Направление',
      type: 'select',
      options: [
        { value: '', label: 'Куда хотите поехать', isPlaceholder: true },
        { value: 'Турция', label: 'Турция' },
        { value: 'Египет', label: 'Египет' },
      ],
      required: true,
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'example@mail.com',
      required: true,
    },
    {
      label: 'Телефон',
      type: 'text',
      placeholder: '+7 ( _ _ _ ) _ _ _ - _ _ - _ _',
      required: true,
      component: 'masked',
    },
    {
      label: 'Дата от',
      type: 'text',
      placeholder: 'ДД.ММ.ГГГГ',
      required: true,
      onFocus: setInputType => setInputType('date'),
      onBlur: setInputType => setInputType('text'),
    },
    {
      label: 'Дата до',
      type: 'text',
      placeholder: 'ДД.ММ.ГГГГ',
      required: true,
      onFocus: setInputType => setInputType('date'),
      onBlur: setInputType => setInputType('text'),
    },
  ];

  const Input = ({
    label,
    type,
    placeholder,
    onFocus,
    onBlur,
    register,
    required,
    component,
    control,
    options,
  }) => {
    const [inputType, setInputType] = useState(type);

    if (component === 'masked') {
      return (
        <div className={s.labInp}>
          <label className={s.label}>{label}</label>
          <Controller
            name="phone"
            control={control}
            rules={{ required }}
            render={({ field }) => (
              <InputMask
                mask="+7 (999) 999-99-99"
                placeholder="+7 (___) ___-__-__"
                className={s.input}
                {...field}
              />
            )}
          />
        </div>
      );
    }

    if (type === 'select') {
      return (
        <div className={cx(s.labInp, s.arrow)}>
          <label className={s.label}>{label}</label>
          <select
            name={label}
            className={cx(s.input, s.select)}
            {...register(label, { required })}
          >
            {options.map(option => (
              <option
                key={option.value}
                value={option.value}
                className={option.isPlaceholder ? s.hide : undefined}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    }

    return (
      <div className={s.labInp}>
        <label className={s.label}>{label}</label>
        <input
          type={inputType}
          className={s.input}
          placeholder={placeholder}
          onFocus={() => onFocus && onFocus(setInputType)}
          onBlur={() => onBlur && onBlur(setInputType)}
          {...register(label, { required })}
        />
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={s.form}
    >
      <div className={s.block}>
        {DATA.map((data, index) => (
          <Input
            key={index}
            label={data.label}
            type={data.type}
            placeholder={data.placeholder}
            register={register}
            required={data.required}
            onFocus={data.onFocus}
            onBlur={data.onBlur}
            component={data.component}
            control={control}
            options={data.options}
          />
        ))}
      </div>
      <div className={s.labInp}>
        <label
          htmlFor="sName"
          className={s.label}
        >
          Комментарий
        </label>
        <textarea
          name="sName"
          id="sName"
          placeholder=""
          className={s.textarea}
          {...register('Комментарий')}
        />
      </div>
      <div className={s.btnBlock}>
        <div className={s.sign}>
          <h3>Вам есть 18 лет?</h3>
          <div className={s.radioBtn}>
            <RadioBtn
              label="Да"
              index="1"
            />
            <RadioBtn
              label="Нет"
              index="2"
            />
          </div>
        </div>
        <div className={s.accept}>
          <input
            type="checkbox"
            name="accept"
            id="check1"
          />
          <label
            className={s.fakeCheck}
            htmlFor="check1"
          />
          <label
            htmlFor="check1"
            className={s.license}
          >
            Нажимая кнопку, я принимаю условия&nbsp;
            <span>
              <Link href="">Лицензионного договора </Link>
            </span>
          </label>
        </div>
        <div className={s.submitReset}>
          <input
            type="submit"
            value="Найти тур"
          />
          <button
            type="reset"
            onClick={() => reset()}
          >
            Сбросить
          </button>
        </div>
      </div>
    </form>
  );
};

export default React.memo(Form);
