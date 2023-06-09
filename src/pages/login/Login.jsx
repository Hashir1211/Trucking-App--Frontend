
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {setUser} from '../../redux/slice/userSlice'
import { useDispatch } from 'react-redux';


import { useHistory } from "react-router-dom";
import { useState } from 'react';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .required('Password is required'),

});

export function Login() {
  const [error , setError]= useState(false)
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try{
      const {data} = await axios.post('/login', values)
      localStorage.setItem('data',JSON.stringify(data))
      dispatch(setUser(data)) 
      history.push('/')}
      catch(e){
        setError(true)
      }
    },
  });

  return (
    
      <Container component="main" maxWidth="xs" sx={{
        mb: 10
      }}>
       
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box  component="form"   onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
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
             <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            {error && <div>Invalid Email or Password was entered</div>}
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                Sign In
            </Button>

          </Box>
       
        </Box>
      
      </Container>
  
  );
}