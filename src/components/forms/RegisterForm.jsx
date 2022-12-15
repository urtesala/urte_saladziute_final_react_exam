import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form } from '../styled/StyledComponents';
import InputError from './InputError';

function RegisterForm(props) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required('Please enter your email'),
      password: Yup.string().min(6).required('Please enter your password'),
      repeatPassword: Yup.string()
        .min(6)
        .required('Please enter your password')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      console.log('values ===', values);
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
        If you don't have an account, please <a href='/register'>REGISTER </a>
      </p>
    </Form>
  );
}
export default RegisterForm;
