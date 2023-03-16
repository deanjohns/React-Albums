import '../App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const AlbumCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Grid
      item
      xs={12}
      sm={5}
      sx={{
        border: '1px solid #aaa',
        borderRadius: '10px',
        margin: '10px',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/album?id=${item.id}&albumTitle=${item.title}`)}
    >
      <Box sx={{ display: 'flex' }}>
        <div className='album-card-main'>
          <img
            src={item.albums[0].thumbnailUrl}
            alt={item.albums[0].id}
            className='album-card-thumbnail'
          />
        </div>
        <div className='album-card-main'>
          <Typography
            variant='p'
            component='p'
            sx={{
              textAlign: 'center',
              width: 'calc(100% - 10px)',
              fontWeight: 600,
              paddingTop: '4px',
            }}
            className='text-clamp-3'
            title={item.title}
          >
            {item.title}
          </Typography>
          <Typography
            variant='p'
            component='p'
            sx={{ textAlign: 'center', marginTop: '10px' }}
          >
            {`(${item.albums?.length} Pictures)`}
          </Typography>
        </div>
      </Box>
    </Grid>
  );
};

export default AlbumCard;
