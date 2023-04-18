import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const ServiceCard = () => {
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', }}
                >
                    <CardMedia
                        component="img"
                        image="https://source.unsplash.com/random"
                        alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Heading
                        </Typography>
                        <Typography>
                            This is a media card. You can use this section to describe the
                            content.
                        </Typography>
                        <Typography gutterBottom variant="h7" component="h3">
                            Price : $100
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" size="small">Get A Qoute Now</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', }}
                >
                    <CardMedia
                        component="img"
                        image="https://source.unsplash.com/random"
                        alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Heading
                        </Typography>
                        <Typography>
                            This is a media card. You can use this section to describe the
                            content.
                        </Typography>
                        <Typography gutterBottom variant="h7" component="h3">
                            Price : $100
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" size="small">Get A qoute Now</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', }}
                >
                    <CardMedia
                        component="img"
                        image="https://source.unsplash.com/random"
                        alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Heading
                        </Typography>
                        <Typography>
                            This is a media card. You can use this section to describe the
                            content.
                        </Typography>
                        <Typography gutterBottom variant="h7" component="h3">
                            Price : $100
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" size="small">Get A Qoute Now</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>

    )
}

export default ServiceCard