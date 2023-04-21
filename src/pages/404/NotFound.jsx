import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Button} from '@mui/material';
import { Link } from "react-router-dom"
export const NotFound = () => {
  return (
    <Box
    sx={{    
      pt: 6,
      pb: 6,
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
       404 Not Found
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
      Expected Page does not exist
      </Typography>
      
      <Box textAlign='center'><Link to='/' variant='button' color='secondary'>Head to Home</Link></Box></Container>
    
  </Box>
  )
}

