import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getdata } from '../store/actions'
import { useNavigate } from 'react-router-dom';
import HomeContain from '../components/HomeContain';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Avatar } from '@mui/material';

const useStyles = makeStyles({
    form: {
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        marginBottom: '25px'
    }
})
function AddForm() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title === '' && author === '') {
            alert('please fill the form')
        } else {
            dispatch(getdata({ title, author }))
            navigate('/list')
        }
    }
    return (<>
        <HomeContain />
        <Container maxWidth='sm' className={classes.form}>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <Box >
                    <Avatar sx={{ bgcolor: '#F36A4D', marginX: 'auto' }}>
                        <MenuBookIcon />
                    </Avatar>
                    <Typography variant='h5' sx={{ margin: 3}}>
                        Add as many Books as you want
                    </Typography>
                        <TextField
                            margin='normal'
                            placeholder='Enter Book Title'
                            name='name'
                            fullWidth
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            margin='normal'
                            placeholder='Enter Author'
                            name='author'
                            fullWidth
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                        <Button variant='contained' sx={{ backgroundColor: '#F36A4D',
                        marginY: 3 }}
                            fullWidth onClick={handleSubmit}>
                            Add
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </>
    )
}

export default AddForm
