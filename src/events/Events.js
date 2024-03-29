import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Box, Breadcrumbs, Link, Paper, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

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

function Events() {
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
        <NavLink to='/initiative' className="back-arrow">
        <ArrowBackIcon sx={{
          "&:hover": { color: "#906F9B" },
      }}/>
      </NavLink>
    <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Explore Page
        </Link>
        <Link underline="hover" color="inherit" href="/initiative">
          Initiative
        </Link>
        <Typography color="text.primary">Events</Typography>
    </Breadcrumbs>
    </div>
    <div className="page-wrapper flex-container">
    <div className="left-half">
     <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
            <Item2>
                <div className="card-content">
                <div className="card-icon">
                <CalendarTodayOutlinedIcon fontSize="large" style={{ color: "#906F9B" }}/>
                </div>
                <div className="card-text">
                  <b>Card Title</b>
                  <p>Announcement description</p>
                </div>
              </div>
            </Item2>
            <Item2>
                <div className="card-content">
                <div className="card-icon">
                <CalendarTodayOutlinedIcon fontSize="large" style={{ color: "#906F9B" }}/>
                </div>
                <div className="card-text">
                  <b>Card Title</b>
                  <p>Announcement description</p>
                </div>
              </div>
            </Item2>
            <Item2>
                <div className="card-content">
                <div className="card-icon">
                <CalendarTodayOutlinedIcon fontSize="large" style={{ color: "#906F9B" }}/>
                </div>
                <div className="card-text">
                  <b>Card Title</b>
                  <p>Announcement description</p>
                </div>
              </div>
            </Item2>
        </Stack>
      </Box>
      </div>
      <div className="right-half">
     <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
            <Item2>
                <div className="card-content">
                <div className="card-icon">
                <CalendarTodayOutlinedIcon fontSize="large" style={{ color: "#906F9B" }}/>
                </div>
                <div className="card-text">
                  <b>Card Title</b>
                  <p>Announcement description</p>
                </div>
              </div>
            </Item2>
            <Item2>
                <div className="card-content">
                <div className="card-icon">
                <CalendarTodayOutlinedIcon fontSize="large" style={{ color: "#906F9B" }}/>
                </div>
                <div className="card-text">
                  <b>Card Title</b>
                  <p>Announcement description</p>
                </div>
              </div>
            </Item2>
            <Item2>
                <div className="card-content">
                <div className="card-icon">
                <CalendarTodayOutlinedIcon fontSize="large" style={{ color: "#906F9B" }}/>
                </div>
                <div className="card-text">
                  <b>Card Title</b>
                  <p>Announcement description</p>
                </div>
              </div>
            </Item2>
        </Stack>
      </Box>
      </div>
      </div>
    </div>
  );
}

export default Events;
