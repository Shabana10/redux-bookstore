import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <Container maxWidth='xl' sx={{background: '#F36A4D', color: '#ffff'}}>
            <Grid container>
                <Grid item xs={12} md={12}>
                  <Typography variant='h5' sx={{p: 3}}>Copyright © 2022</Typography>
                </Grid>
            </Grid>   
        </Container>
    )
}

export default Footer
