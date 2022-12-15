import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Card, Form, Section } from '../styled/StyledComponents';
import InputError from './InputError';

function AddShopForm(props) {
  const formik = useFormik({
    initialValues: {
      shopName: '',
      shopTown: '',
      startYear: '',
      description: '',
      image: '',
    },
    validationSchema: Yup.object().shape({
      shopName: Yup.string().min(4).required('Please enter name of the shop'),
      shopTown: Yup.string()
        .min(4)
        .required('Please enter town where shop is located'),
      startYear: Yup.number()
        .min(1970)
        .max(2022)
        .required('Please enter which year shop opened'),
      description: Yup.string().min(6).required('Please enter description'),
      image: Yup.string().min(5).required('Please add photo of the shop'),
    }),
    onSubmit: (values) => {
      console.log('values ===', values);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <input
        type='text'
        id='shopName'
        placeholder='Shop name'
        value={formik.values.shopName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputError
        error={formik.errors.shopName}
        touch={formik.touched.shopName}
      />
      <input
        type='text'
        id='shopTown'
        placeholder='Shop town'
        value={formik.values.shopTown}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputError
        error={formik.errors.shopTown}
        touch={formik.touched.shopTown}
      />
      <input
        type='text'
        id='startYear'
        placeholder='Start year'
        value={formik.values.startYear}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputError
        error={formik.errors.startYear}
        touch={formik.touched.startYear}
      />
      <textarea
        type='text'
        id='description'
        placeholder='Description'
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      ></textarea>
      <InputError
        error={formik.errors.description}
        touch={formik.touched.description}
      />
      <input
        type='text'
        id='image'
        placeholder='Image URL'
        value={formik.values.image}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputError error={formik.errors.image} touch={formik.touched.image} />
      <Button type='submit'>Login</Button>
      <p>
        If you want to see the list of shops already added go{' '}
        <a href='/shops'>HERE</a>
      </p>
    </Form>
  );
}
export default AddShopForm;
