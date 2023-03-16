import '../App.css';
import React, { useState } from 'react';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { sortAsc, sortDesc } from '../store/reducers/sortReducer';

const Header = () => {
  const [sort, setSort] = useState('asc');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const makeSort = (e) => {
    const value = e.target.value;
    setSort(value);
    if (value === 'asc') {
      dispatch(sortAsc());
    } else {
      dispatch(sortDesc());
    }
  };

  return (
    <div className='header-main'>
      <div className='header-body'>
        <div className='header-text' onClick={() => navigate('/')}>
          My Albums
        </div>
        <div className='header-select-main'>
          <Select className='header-select' value={sort} onChange={makeSort}>
            <MenuItem value='asc'>Title Asc</MenuItem>
            <MenuItem value='desc'>Title Desc</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Header;
