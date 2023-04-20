import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
    </Container>
  </Box>
  )
}
