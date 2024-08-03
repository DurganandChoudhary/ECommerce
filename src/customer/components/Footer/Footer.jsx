import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import {Link } from '@mui/material';

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: "Bback", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Partners</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Solutions</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Analytics</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Commerce</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Insight</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Support</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Dcumentation</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Guides</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>API Status</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Claim</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Privacy</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Terms</Button>
                    </div>
                </Grid>

                <Grid className='pt-20' item xs={12}>
                    <Typography variant="body2" component="p" align='center'>
                        &copy; 2024 My Company. All rights reserved.
                    </Typography>

                    <Typography variant="body2" component="p" align="center">
                        Made with Dedication by Me.
                    </Typography>

                    <Typography variant='body2' component="p" align="center">
                        Icons made by{' '}    

                    <Link href="https://www.freepik.com/" color="inherit" underline="always">
                        Freepik
                    </Link>{' '}
                    from{' '}

                    <Link href="https://www.flaticon.com//" color="inherit" underline="always">
                        www.flation.com
                    </Link>

                    </Typography>

                    
                </Grid>

            </Grid>
        </div>
    )
}

export default Footer
