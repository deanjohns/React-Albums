import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from './Components/Table';
import Loader from './Components/Loader';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Typography } from '@mui/material';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_CONTEXT}/Elixirs`)
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('res', err);
        toast.error('Error while reading the API');
        setIsLoading(false);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isLoading && <Loader />}
      <Grid
        container
        sx={{
          justifyContent: 'center',
          marginTop: '60px',
          marginBottom: '60px',
        }}
      >
        <Grid item xs={8}>
          <Typography
            variant='h5'
            component='h5'
            sx={{ textAlign: 'center', marginBottom: '20px' }}
          >
            All Elixirs
          </Typography>
          <Table
            items={items}
            viewElixir={(id) => navigate(`/elixir?id=${id}`)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
