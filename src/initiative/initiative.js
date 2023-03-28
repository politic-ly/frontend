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
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(166, 233, 216)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '38px',
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(223, 183, 235)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '38px',
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
        <ArrowBackIcon sx={{
          "&:hover": { color: "#906F9B" },
  }}/>
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
          <div className="header-container">
            <h2>
              <b>Volunteers</b>
            </h2>
            <NavLink to='/announcements' className = "view-all">
              view all
            </NavLink>
          </div>
        </div>
        <div className="announcements-container test">
          <div className="header-container">
            <h2>
            <b>Recent Announcements</b>
          </h2>
          <NavLink to='/announcements' className = "view-all">
            view all
          </NavLink>
          </div>
          <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
              <Item>
                <div className="card-content">
                <div className="card-icon">
                <CampaignOutlinedIcon fontSize="large" style={{ color: "#709E93" }}/>
                </div>
                <div className="card-text">
                  <b>Card Title</b>
                  <p>Announcement description</p>
                </div>
              </div>
              </Item>
              <Item>
                <div className="card-content">
                <div className="card-icon">
                <CampaignOutlinedIcon fontSize="large" style={{ color: "#709E93" }}/>
                </div>
                <div className="card-text">
                  <b>Card Title</b>
                  <p>Announcement description</p>
                </div>
              </div>
              </Item>
              <Item>
                <div className="card-content">
                <div className="card-icon">
                <CampaignOutlinedIcon fontSize="large" style={{ color: "#709E93" }}/>
                </div>
                <div className="card-text">
                  <b>Card Title</b>
                  <p>Announcement description</p>
                </div>
              </div>
              </Item>
            </Stack>
          </Box>
        </div>
        <div className="events-container">
          <div className="header-container">
            <h2>
              <b>Upcoming Events</b>
            </h2>
            <NavLink to='/events' className = "view-all">
              view all
            </NavLink>
          </div>
          <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
            <Item2>
                <div className="card-content">
                <div className="card-icon">
                <CampaignOutlinedIcon fontSize="large" style={{ color: "#906F9B" }}/>
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
                <CampaignOutlinedIcon fontSize="large" style={{ color: "#906F9B" }}/>
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
                <CampaignOutlinedIcon fontSize="large" style={{ color: "#906F9B" }}/>
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
    </div>
  );
}

export default Initiative;
