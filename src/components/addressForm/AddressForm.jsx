import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
const services =['Full-service moving company', 'Hourly moving & packing services' , 'Junk Removal & Trash Pickup'];

  const validationSchema = yup.object({
    firstName: yup
    .string('Enter your First Name')
    .required('First Name is required'),

    lastName: yup
    .string('Enter your Last Name')
    .required('Last Name is required'),

    email: yup
    .string('Enter your Enter')
    .email('Enter a valid email')
    .required('Email is required'),

    service: yup
    .string('Enter your Service')
    .required('Service is required'),

    address: yup
    .string('Enter your Address')
    .required('Address is required'),

    city: yup
    .string('Enter your City')
    .required('City is required'),

    state: yup
    .string('Enter your State')
    .required('State is required'),

    zip: yup
    .string('Enter your zip')
    .required('Zip/Postcode is required'),
  });

export default function AddressForm() {
  const history = useHistory();
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
        onSubmit: async (values) => {
        const body = {...values , name: values.firstName + " " + values.lastName}
        try{
          const {data} = await axios.post('/qoutes/create' , body);
          history.push("/");
        }
        catch(e){
          console.log(e);
        }
        },
      });

      const handleTextChange = (event) => {
        const fieldName = event.target.name;
        const trimmedValue = event.target.value.trim();
        formik.setFieldValue(fieldName, trimmedValue);
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            variant="outlined"
            value={formik.values.email}
            onChange={handleTextChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
           
          />
        </Grid>
        <Grid item xxs={12} sm={6}>
        <FormControl fullWidth >
        <InputLabel id="demo-multiple-name-label">Service</InputLabel>
        <Select
          id="service"
          name='service'
          value={formik.values.service}
          onChange={formik.handleChange}
          error={formik.touched.service && Boolean(formik.errors.service)}
          input={<OutlinedInput label="Service" />
        
        }
        >
          {services.map((name) => (
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
            id="city"
            name="city"
            label="City"
            fullWidth
            variant="outlined"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
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
            onChange={handleTextChange}
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