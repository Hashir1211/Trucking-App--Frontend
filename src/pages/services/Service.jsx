
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
              color="#d62323"
              fontFamily="revert"
              gutterBottom
            >
             Our Services
            </Typography>
            
          </Container>
          
          <Container>
            <Typography variant="h6" align="left" color="text.secondary" paragraph>
            Our primary mission is to provide excellent service, and we ensure our pricing is transparent. We consider several factors before and during your move to deliver value at a fair price and ensure your needs are met.
            The factors that affect your pricing include location, distance from the parking area, the time needed to complete the job, the number of movers we need for the crew, the number and size of items to be moved, and any assembly or disassembly needed.
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