import { Container, Grid, Card, CardActions, 
    CardMedia, CardContent, Typography, Button } from '@mui/material'
import React from 'react'

function CommonCard() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <Container maxWidth='lg' sx={{my: 4}}>
        <Typography variant='h3' sx={{m: 3}}>
            Featured Books
        </Typography>
            <Grid container>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: 'auto', display: 'flex', 
                  flexDirection: 'column', m: 2 }} className='box'
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: '200px',
                      pt: '0.25%',
                    }}
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
                  </CardContent>
                </Card>
              </Grid>
              ))}
            </Grid>
        </Container>
    )
}

export default CommonCard
