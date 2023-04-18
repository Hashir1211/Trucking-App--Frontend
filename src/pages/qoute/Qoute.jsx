import React from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AddressForm from "../../components/addressForm/AddressForm";


export const Qoute = () => {
  return (
    <>
    <Box
    sx={{    
      pt: 6,
      pb: 3,
    }}
  >
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
       Get A Qoute
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Something short and leading about the Qoute below—its contents.
        Fill in the Form
      </Typography>
    </Container>
  </Box>
  <Container sx={{ py: 1 , pb: 18}} maxWidth="lg">
   <AddressForm/>
  </Container>
  </>
  )
}

export default Qoute