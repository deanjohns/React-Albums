import '../App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const PictureCard = ({ item }) => {
  return (
    <Grid
      item
      sx={{
        border: '1px solid #aaa',
        borderRadius: '10px',
        margin: '10px',
        cursor: 'pointer',
      }}
      onClick={() => window.open(item.url, '_blank')}
    >
      <Box sx={{ display: 'flex' }}>
        <div className='album-card-main'>
          <img src={item.url} alt={item.id} className='album-image' />
        </div>
      </Box>
    </Grid>
  );
};

export default PictureCard;
