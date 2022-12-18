import { useFormik } from 'formik';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { sendRequest } from '../../helpers';
import { useRedirect } from '../../hooks/useRedirect';
import { useAuthCtx } from '../../store/AuthContext';
import { Button, Form, StyledLink } from '../styled/StyledComponents';
import InputError from './InputError';

function RegisterForm(props) {

  const ctx = useAuthCtx();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: 'james@bond.com',
      password: '123456',
      repeatPassword: '123456',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required('Please enter your email'),
      password: Yup.string().min(6).required('Please enter your password'),
      repeatPassword: Yup.string()
        .min(6)
        .required('Please enter your password')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    }),
    onSubmit: async (values) => {
      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
        import.meta.env.VITE_API_KEY
      }`;
      const [sendResult, postError] = await sendRequest(values, url);

      if (postError) {
        console.warn('postError ===', postError);
        formik.setErrors({
          email: postError.error.message,
        });
        return;
      }
      // console.log('sendResult ===', sendResult);
      ctx.login(sendResult);

      history.push('/add-shop');
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <input
        type='email'
        id='email'
        placeholder='Your email'
        value={formik.values.email}
        name='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputError error={formik.errors.email} touch={formik.touched.email} />

      <input
        type='password'
        id='password'
        placeholder='Your password'
        value={formik.values.password}
        name='password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputError
        error={formik.errors.password}
        touch={formik.touched.password}
      />

      <input
        type='password'
        id='repeatPassword'
        placeholder='Repeat password'
        value={formik.values.repeatPassword}
        name='repeatPassword'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputError
        error={formik.errors.repeatPassword}
        touch={formik.touched.repeatPassword}
      />

      <Button type='submit'>Login</Button>
      <p>
        If you already have an account, please <StyledLink path={'/login'}>LOGIN</StyledLink>
      </p>
    </Form>
  );
}
export default RegisterForm;


