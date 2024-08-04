import React, { useState } from 'react';
import cx from 'classnames';
import { useForm } from 'react-hook-form';

import Link from 'next/link';

import s from './Form.module.scss';

const Form = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Name</label>
        <input
          name="name"
          {...register('name')}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register('email')}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register('password')}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default React.memo(Form);
