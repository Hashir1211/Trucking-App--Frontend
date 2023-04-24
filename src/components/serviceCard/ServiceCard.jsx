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
                        image="https://images.unsplash.com/photo-1586206670130-4c6d8e646c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
                        alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        Full-service moving company
                        </Typography>
                        <Typography>
                        We can manage your entire move, including packing, moving supplies, junk removal, assembly/disassembly, and other services as needed.
                        </Typography>
                        <Typography gutterBottom variant="h7" component="h3">
                            $50/mile
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" size="small">Get A Quote Now</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', }}
                >
                    <CardMedia style={{height: "100%"}}
                        component="img"
                        image="https://plus.unsplash.com/premium_photo-1661907153090-93759d68acb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        Eco-Friendly Junk Removal Services
                        </Typography>
                        <Typography>
                        With our environmentally-friendly services, up to 70% of everything we haul away is recycled or donated, keeping it safely out of local landfills.
                        </Typography>
                        <Typography gutterBottom variant="h7" component="h3">
                            $10/lb
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" size="small">Get A Quote Now</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', }}
                >
                    <CardMedia
                        component="img"
                        image="https://images.unsplash.com/photo-1614359835514-92f8ba196357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
                        alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        Hourly Labor & Moving Services
                        </Typography>
                        <Typography>
                        Our movers are here to help whether it’s home & office furniture moving, truck loading & unloading, home staging, packing services, or property clean outs.
                        </Typography>
                        <Typography gutterBottom variant="h7" component="h3">
                            $25/hr
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" size="small">Get A Quote Now</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>

    )
}

export default ServiceCard