import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, StyledLink } from '../styled/StyledComponents';
import InputError from './InputError';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        .required('Please enter where shop is located'),
      startYear: Yup.number()
        .min(1970)
        .max(2022)
        .required('Please enter which year shop opened'),
      description: Yup.string().min(6).required('Please enter description'),
      image: Yup.string().min(5).required('Please add photo URL of the shop'),
    }),
    onSubmit: (values) => {
      console.log('values ===', values);
      toast('Shop added to the list!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        onClose: () => {
          props.onNewShop(values);
        },
      });
    },
  });
  return (
    <>
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
        <Button type='submit'>Add Shop</Button>
        <p>
          If you want to see the list of shops already added go{' '}
          <StyledLink to={'/shops'}>HERE</StyledLink>
        </p>
      </Form>
      <ToastContainer />
    </>
  );
}
export default AddShopForm;
