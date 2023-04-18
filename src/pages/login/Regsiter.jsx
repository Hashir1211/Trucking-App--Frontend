import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
  name: yup
    .string('Enter your Name')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  phoneNumber: yup
    .string('Enter your contact number')
    .min(10, 'Password should be of minimum 10 characters length')
    .required('Password is required'),

});
export const Regsiter = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phoneNumber: ""

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form  className='form' onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.name)}
              helperText={formik.touched.email && formik.errors.name}
              margin='normal'
              size='small'
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin='normal'
              size='small'
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              margin='normal'
              size='small'
            />
              <TextField
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              label="Contact Number"
              value={formik.values.contactNumber}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.contactNumber)}
              helperText={formik.touched.email && formik.errors.contactNumber}
              margin='normal'
              size='small'
              sx={{
                pb: 8
                }}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Register
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}
