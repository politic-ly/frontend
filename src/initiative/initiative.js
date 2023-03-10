import React, { useEffect, useState } from 'react';
import pic from "../assets/blurby-cat.jpg";
import axios from 'axios';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Initiative() {
  const [data,setData]=useState([]);
  const getData=()=>{
    axios.get('http://localhost:5152/initiatives')
      .then(function(response){
        return response.data;
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData();

  },[])


  return (
    <div className="page-wrapper flex-container">
      <div className="left-col">
        <img src={pic} alt="initiative photo"></img>
        <span>
          <h2>
            <b>Initiative Title</b>
          </h2>
          <p className="page-subtitle">
            <i>Initiative subtitle goes here</i>
          </p>
          <p>
            initiave description slay slay slay slay slay slay slay slay slay slay slay slay
          </p>
          <p>
            Created: date
            Last Updated: date
          </p>
        </span>
      </div>
      <div className="right-col">
        <div className="volunteers-container">
          <h2>
            <b>Volunteers</b>
          </h2>
        </div>
        <div className="announcements-container">
          <h2>
            <b>Recent Announcements</b>
          </h2>
          <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
            </Stack>
          </Box>
        </div>
        <div className="events-container">
          <h2>
            <b>Upcoming Events</b>
          </h2>
          <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
            </Stack>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Initiative;
