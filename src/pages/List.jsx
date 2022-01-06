
import { Button, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import MultiActionAreaCard from '../components/MyCard';


const useStyles = makeStyles({
    list: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '50px auto'
    },
    heading :{
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        padding: '20px',
        margin: '50px auto'
    }
})
function List() {
    const classes = useStyles();
    return (
        <>
        <Container maxWidth='sm'>
            <Grid container>
                <Grid  className={classes.heading}>
                    <Typography variant='h2'>
                        List of Books
                    </Typography>
                    <Typography variant='h6'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        <Container maxWidth='md' className={classes.list}>
            <Grid container>                      
             <MultiActionAreaCard />
            </Grid>
        </Container>
        </>
    )
}

export default List
