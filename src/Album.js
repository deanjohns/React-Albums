import './App.css';
import axios from 'axios';
import { sortData } from './helper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import Loader from './Components/Loader';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import PictureCard from './Components/PictureCard';
import React, { useEffect, useState } from 'react';

const Album = () => {
  const [album, setAlbum] = useState([]);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const sortMethod = useSelector((state) => state.value);

  useEffect(() => {
    const id = location?.search?.split('&')[0].split('=')[1];
    const title = decodeURI(location?.search?.split('&')[1].split('=')[1]);
    setTitle(title);
    getAlbumById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const getAlbumById = (id) => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_CONTEXT}/photos?albumId=${id}`)
      .then((res) => {
        if (res.data?.length > 0) {
          setAlbum(sortData(res.data, sortMethod));
        } else {
          toast.error('No pictures found in this album');
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('res', err);
        toast.error('Error while reading the API or invalid Elixir ID');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    var newDataSet = JSON.parse(JSON.stringify(album));
    setAlbum(sortData(newDataSet, sortMethod));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortMethod]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isLoading && <Loader />}
      <Typography
        variant='h5'
        component='h5'
        sx={{ margin: '20px', paddingLeft: '66px' }}
      >
        {title}
      </Typography>
      <Grid
        container
        sx={{
          display: 'flex',
          marginBottom: '60px',
          justifyContent: 'center',
        }}
      >
        {album.map((item) => {
          return <PictureCard key={item.id} item={item} />;
        })}
      </Grid>
    </Box>
  );
};

export default Album;
