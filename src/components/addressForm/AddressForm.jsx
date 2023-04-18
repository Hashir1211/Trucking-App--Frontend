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
    .string('Enter your email')
    .required('Email is required'),

    lastName: yup
    .string('Enter your email')
    .required('Email is required'),

    email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
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
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
           
          />
        </Grid>
        <Grid item xxs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
           
          />
        </Grid>
        <Grid item xxs={12} sm={6}>
        <FormControl fullWidth >
        <InputLabel id="demo-multiple-name-label">Service</InputLabel>
        <Select
          id="service"
          value={personName}
          name='service'
          onChange={handleChange}
          input={<OutlinedInput label="Service" />}
          required
         
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
        
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            size='small'
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