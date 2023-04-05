import React, { useState, useEffect } from "react";
import Cat from "../assets/blurby-cat.jpg";
import { AvatarGroup, Avatar, Card, Modal, Button } from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { CardActionArea } from "@mui/material";
import { Box, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const style = {
    position: 'absolute',
    borderRadius: '5px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

const EventCard = ({
  id,
  img,
  title,
  subtitle,
  location,
  volunteerData,
}) => {
  // State objects for data
  const [volunteerList, setVolunteerList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [volunteered, setVolunteered] = useState(false); // pass in real data

  console.log(title);
  useEffect(() => {
    setVolunteerList(volunteerData);
  }, []);

  return (
    <div>
    <Card
    className="initiativeCard"
    style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
    }}
    >
    <CardActionArea onClick={() => setShowModal(true)}>
        <div className="initiativeCard--text">
        <p className="initiativeCard--eventlocation">
        <span>{location.toUpperCase()}</span></p>
        <div className="initiativeCard--title">
            <h2>
            <span>{title}</span>
            </h2>
            <p>
            <span>{subtitle}</span>
            </p>
        </div>
        </div>
    </CardActionArea>
    </Card>
    <Modal 
    open={showModal}
    onClose = {() => setShowModal(false)}>
        <Box sx={style}>
            <h2>
                Event Title
            </h2>
            <hr></hr> 
            <b>Location:</b>
            <br></br>
            <b>Date:</b>
            <br></br>
            <b>Time:</b>
            <br></br>
            <b>Recursive:</b>
            <br></br>
            <b>Description:</b>
            <hr></hr> 
            <div align="right">
            {volunteered ? <Button startIcon={<CheckIcon />} style={{ color: "#67B9A5" }}>VOLUNTEERED</Button>:
                <Button onClick={()=> setVolunteered(true)} style={{ color: "#A669DF" }}>VOLUNTEER</Button>}
            </div>
        </Box>
    </Modal>

    </div>
  );
};

export default EventCard;
