
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3];

const theme = createTheme();

export function Service() {
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
             Services
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the Services below—its contents.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 1 , pb: 18}} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
           
             <ServiceCard/>
            
          </Grid>
        </Container>
      </>
 
  );
}
export default Service