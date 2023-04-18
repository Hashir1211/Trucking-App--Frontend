import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFormik } from 'formik';
import * as yup from 'yup';

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker'
  ];

  const validationSchema = yup.object({
    firstName: yup
    .string('Enter your name')
    .required('Name is required'),

    lastName: yup
    .string('Enter your email')
    .required('Name is required'),

    email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),

    service: yup
    .string('Enter your service')
    .required('service is required'),

    address: yup
    .string('Enter your address')
    .required('address is required'),

    city: yup
    .string('Enter your city')
    .required('city is required'),

    state: yup
    .string('Enter your state')
    .required('city is required'),

    zip: yup
    .string('Enter your state')
    .required('zip/postcode is required'),
  });

export default function AddressForm() {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName : '', 
          email: '',
          service: '',
          address: '',
          city: '',
          state :'',
          zip: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  const [personName, setPersonName] = React.useState('');
  const handleChange = (event) => {
    console.log(event)
    const {target: { value }} = event;
    setPersonName(value);
  };

  return (
    <>
     <form  onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
         
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
      
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
           
          />
        </Grid>
        <Grid item xxs={12} sm={6}>
          <TextField
          
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
           
          />
        </Grid>
        <Grid item xxs={12} sm={6}>
        <FormControl fullWidth >
        <InputLabel id="demo-multiple-name-label">Service</InputLabel>
        <Select
          id="service"
          value={formik.values.service}
          onChange={formik.handleChange}
          error={formik.touched.service && Boolean(formik.errors.service)}
          helperText={formik.touched.service && formik.errors.service}
          input={<OutlinedInput label="Service" />
        
        }
        
         
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
       </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address"
            fullWidth
            variant="outlined"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
        
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
         
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="outlined"
            value={formik.values.state}
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            size='small'
            value={formik.values.zip}
            onChange={formik.handleChange}
            error={formik.touched.zip && Boolean(formik.errors.zip)}
            helperText={formik.touched.zip && formik.errors.zip}
          />
        </Grid>
    
        <Grid item xs={12} >
       <Button  variant='outlined' type="submit" >Submit</Button>
        </Grid>
      </Grid>
      </form>
    </>
  );
}