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
     events page
    </div>
  );
}

export default Events;