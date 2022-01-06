import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box, width } from '@mui/system';


const useStyles = makeStyles({
    container: {
        backgroundColor: 'rgba(100, 100, 200, 0.2)',
        margin: '20px auto',
        borderRadius: '10px',
        marginLeft: '-20px',
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // color: 'white',
        padding: '20px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    },
    left: {
        backgroundImage: 'url("images/book1.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        width: '100%',
        marginRight: '-20px',
        borderRadius: '10px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    }
})
function HomeContain() {
    const classes = useStyles();

    return (
        <Container maxWidth='md' sx={{my: 5}}>
            <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid item md={5} className={classes.left}>
                    
                </Grid>
                <Grid item xs={12} md={7} className={classes.container}>
                    <Box>
                        <Typography variant='h5'>
                            A book is a perfect diet for your brain
                        </Typography>
                    <Typography variant='body1'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur."
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomeContain
