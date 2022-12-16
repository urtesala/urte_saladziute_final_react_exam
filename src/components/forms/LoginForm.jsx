import { useFormik } from 'formik';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, Form } from '../styled/StyledComponents';
import InputError from './InputError';

function LoginForm(props) {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(true);


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required('Please enter your email'),
      password: Yup.string().min(6).required('Please enter your password'),
    }),
    onSubmit: (values) => {

      console.log('values ===', values, 'mode:', result);}
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
      <InputError error={formik.errors.email} touch={formik.touched.password} />

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

      <Button type='submit'>Login</Button>
      <p>
        If you don't have an account, please <a href='/register'>REGISTER </a>
      </p>
    </Form>
  );
}
export default LoginForm;

