import { Button, Container ,Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
    top:{
        backgroundImage: "url('https://source.unsplash.com/random')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '80vh',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        backgroundColor: 'rgba(100, 100, 200, 0.2)',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        padding: '20px',
        borderRadius: '10px'
    }
})

function HomeTop() {
    const classes = useStyles()
    const navigate = useNavigate()
    const goSomwhere = () => {
        navigate('/addform')
    }
    return (
        <Container maxWidth='xl' className={classes.top}>
            <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={12} md={6} className={classes.main} >
                    <h1>Hello World</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur.
                    </h4>
                    <Button onClick={goSomwhere} className='btn'
                    variant='contained' sx={{background: '#F36A4D'}}>
                        Add Something
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomeTop
