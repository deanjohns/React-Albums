import './App.css';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Loader from './Components/Loader';
import { useLocation, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FeedbackForm from './Components/FeedbackForm';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';

const ElixirDashboard = () => {
  const [elixir, setElixir] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openFeedbackForm, setOpenFeedbackForm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('loc', location);
    const id = location?.search?.split('=')[1];
    getElixir(id);
  }, [location]);

  const getElixir = (id) => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_CONTEXT}/Elixirs/${id}`)
      .then((res) => {
        setElixir(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('res', err);
        toast.error('Error while reading the API or invalid Elixir ID');
        setIsLoading(false);
      });
  };

  const submitFeedback = (feedbackData) => {
    setIsLoading(true);
    setOpenFeedbackForm(false);
    axios
      .post(`${process.env.REACT_APP_API_CONTEXT}/Feedback`, feedbackData)
      .then((res) => {
        console.log('res', res.data);
        setIsLoading(false);
        toast.success('The feedback is submitted successfully');
      })
      .catch((err) => {
        console.log('res', err);
        setIsLoading(false);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isLoading && <Loader />}
      <Grid
        container
        sx={{
          justifyContent: 'center',
          boxShadow: '0px 2px 6px -2px',
          borderRadius: '6px',
          width: '800px',
          margin: 'auto',
          marginTop: '20px',
          marginBottom: '20px',
          position: 'relative',
        }}
      >
        <Grid
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
          }}
        >
          <Button variant='contained' onClick={() => navigate('/')}>
            Go to the Table
          </Button>
          <Button variant='contained' onClick={() => setOpenFeedbackForm(true)}>
            Give Feedback
          </Button>
        </Grid>
        <Grid item xs={8} sx={{ maxWidth: '100% !important' }}>
          <Box sx={{ display: 'flex' }}>
            <Grid item xs={8}>
              <img src='/potion.jpeg' className='potion-image' alt='potion' />
            </Grid>
            <Grid item sx={{ margin: '10px' }}>
              <Grid
                item
                xs={8}
                sx={{ display: 'flex', maxWidth: '100% !important' }}
              >
                <Typography variant='span' component='span' color='#797979'>
                  ID:
                </Typography>
                <Typography
                  variant='span'
                  component='span'
                  color='#797979'
                  sx={{
                    marginLeft: '10px',
                    marginBottom: '10px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {elixir.id}
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  display: 'flex',
                  marginBottom: '10px',
                  maxWidth: '100% !important',
                }}
              >
                <Typography variant='h5' component='h5' className='board-label'>
                  Name:
                </Typography>
                <Typography variant='h5' component='h5' className='board-text'>
                  {elixir.name}
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  display: 'flex',
                  marginBottom: '10px',
                  maxWidth: '100% !important',
                }}
              >
                <Typography variant='h6' component='h6' className='board-label'>
                  Effect:
                </Typography>
                <Typography variant='h6' component='h6' className='board-text'>
                  {elixir.effect}
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  display: 'flex',
                  marginBottom: '10px',
                  maxWidth: '100% !important',
                }}
              >
                <Typography variant='h6' component='h6' className='board-label'>
                  Side effects:
                </Typography>
                <Typography variant='h6' component='h6' className='board-text'>
                  {elixir.sideEffects}
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  display: 'flex',
                  marginBottom: '10px',
                  maxWidth: '100% !important',
                }}
              >
                <Typography variant='h6' component='h6' className='board-label'>
                  Difficulty:
                </Typography>
                <Typography variant='h6' component='h6' className='board-text'>
                  {elixir.difficulty}
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  display: 'flex',
                  marginBottom: '10px',
                  maxWidth: '100% !important',
                }}
              >
                <Typography variant='h6' component='h6' className='board-label'>
                  Characteristics:
                </Typography>
                <Typography variant='h6' component='h6' className='board-text'>
                  {elixir.characteristics || 'Unknown'}
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  display: 'flex',
                  marginBottom: '10px',
                  maxWidth: '100% !important',
                }}
              >
                <Typography variant='h6' component='h6' className='board-label'>
                  Manufacturer:
                </Typography>
                <Typography variant='h6' component='h6' className='board-text'>
                  {elixir.manufacturer || 'Unknown'}
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  display: 'flex',
                  marginBottom: '10px',
                  maxWidth: '100% !important',
                }}
              >
                <Typography variant='h6' component='h6' className='board-label'>
                  Time:
                </Typography>
                <Typography variant='h6' component='h6' className='board-text'>
                  {elixir.time || 'Unknown'}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <hr />
          <Box>
            <Grid sx={{ display: 'flex' }}>
              <Grid sx={{ margin: '10px' }}>
                <Typography variant='h6' component='h6' className='board-label'>
                  Ingredients:
                </Typography>
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    height: '220px',
                    overflowY: 'scroll',
                  }}
                >
                  {elixir.ingredients?.map((ingredient) => {
                    return (
                      <ListItem key={ingredient.id}>
                        <ListItemText
                          primary={ingredient.name}
                          secondary={ingredient.id}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
              <Grid sx={{ margin: '10px' }}>
                <Typography variant='h6' component='h6' className='board-label'>
                  Inventors:
                </Typography>
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    height: '220px',
                    overflowY: 'scroll',
                  }}
                >
                  {elixir.inventors?.map((inventor) => {
                    return (
                      <ListItem key={inventor.id}>
                        <ListItemText
                          primary={`${inventor.firstName} ${inventor.lastName}`}
                          secondary={inventor.id}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <FeedbackForm
        id={elixir.id}
        open={openFeedbackForm}
        onClose={() => setOpenFeedbackForm(false)}
        submitFeedback={submitFeedback}
      />
    </Box>
  );
};

export default ElixirDashboard;
