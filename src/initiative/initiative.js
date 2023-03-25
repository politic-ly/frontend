import React, { useEffect, useState } from 'react';
import pic from "../assets/blurby-cat.jpg";
import axios from 'axios';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Breadcrumbs } from '@mui/material';
import { Link } from '@mui/material';
import { Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(166, 233, 216)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '35px',
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(223, 183, 235)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '35px',
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
    <div>
     <div className="breadcrumb-containter">
     <NavLink to='/' className="back-arrow">
        <ArrowBackIcon />
      </NavLink>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Explore Page
        </Link>
        <Typography color="text.primary">Initiative</Typography>
    </Breadcrumbs>
    </div> 
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
        <div className="volunteers-container test">
          <h2 className="header-style">
            <b>Volunteers</b>
          </h2>
        </div>
        <div className="announcements-container test">
          <h2 className="header-style">
            <b>Recent Announcements</b>
          </h2>
          <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
              <Item className="announcement-box">Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
            </Stack>
          </Box>
        </div>
        <div className="events-container">
          <h2 className="header-style">
            <b>Upcoming Events</b>
          </h2>
          <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
              <Item2>Item 1</Item2>
              <Item2>Item 2</Item2>
              <Item2>Item 3</Item2>
            </Stack>
          </Box>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Initiative;
