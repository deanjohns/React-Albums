import axios from 'axios';
import Box from '@mui/material/Box';
import { sortData } from './helper';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import Loader from './Components/Loader';
import { useSelector } from 'react-redux';
import AlbumCard from './Components/AlbumCard';
import React, { useEffect, useState } from 'react';

const Albums = () => {
  const [items, setItems] = useState([]);
  const [itemDescArray, setItemDescArray] = useState([]);
  const [aggregateArray, setAggregateArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sortMethod = useSelector((state) => state.value);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_CONTEXT}/albums?userId=2`)
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

  useEffect(() => {
    setIsLoading(true);
    const request = {
      params: {
        albumId: items.map((item) => item.id),
      },
    };
    if (items?.length > 0) {
      axios
        .get(`${process.env.REACT_APP_API_CONTEXT}/photos`, request)
        .then((res) => {
          setItemDescArray(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log('res', err);
          toast.error('Error while reading the API');
          setIsLoading(false);
        });
    }
  }, [items]);

  useEffect(() => {
    var newDataSet = JSON.parse(JSON.stringify(items));
    newDataSet.forEach((each) => {
      const itemsPerAlbum = itemDescArray.filter(
        (item) => item.albumId === each['id']
      );
      each['albums'] = itemsPerAlbum;
    });
    setAggregateArray(sortData(newDataSet, sortMethod));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemDescArray, sortMethod]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isLoading && <Loader />}
      <Grid
        container
        sx={{
          display: 'flex',
          marginTop: '60px',
          marginBottom: '60px',
          justifyContent: 'center',
        }}
      >
        {aggregateArray.map((item) => {
          return <AlbumCard key={item.id} item={item} />;
        })}
      </Grid>
    </Box>
  );
};

export default Albums;
