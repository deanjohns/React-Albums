import '../App.css';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div className='circular-progress-container'>
      <CircularProgress className='circular-progress' />
    </div>
  );
};

export default Loader;
