import * as React from 'react';
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

export default function MultiActionAreaCard() {
  const bookData = useSelector(state => state.bookData)
  return (
         <>
         {
           bookData && bookData.map((e,i) =>{
             return <Grid item xs={12} md={4} key={i} sx={{marginBottom: 3}}> 
             <Card sx={{ maxWidth: '90%' }} className='box'>
             <CardActionArea>
               <CardMedia
                 component="img"
                 height="140"
                 image="images/book.jpg"
                 alt="book"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   {e.title}
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                   {e.author}
                 </Typography>
               </CardContent>
             </CardActionArea>
             <CardActions>
               <Button size="small" color="primary">
                 Share
               </Button>
             </CardActions>
           </Card> 
           </Grid>
           })
         }
         </>
  
  )
}
