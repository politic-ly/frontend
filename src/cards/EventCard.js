import React, { useState, useEffect } from "react";
import Cat from "../assets/blurby-cat.jpg";
import { AvatarGroup, Avatar, Card, Modal, Button } from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { CardActionArea } from "@mui/material";
import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { format } from "date-fns";

const style = {
  position: "absolute",
  borderRadius: "5px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const EventCard = ({
  id,
  img,
  title,
  description,
  location,
  date,
  organizer,
  volunteerData,
}) => {
  // State objects for data
  const [volunteerList, setVolunteerList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [volunteered, setVolunteered] = useState(false); // pass in real data

  useEffect(() => {
    setVolunteerList(volunteerData);
  }, []);

  const formatDate = (date) => {
    var dateObj = new Date(date);
    if (dateObj instanceof Date && !isNaN(dateObj.valueOf())) {
      return format(dateObj, "dd/MM/yyyy");
    } else {
      return "TBD";
    }
  };

  return (
    <div>
      <Card
        className="eventCard"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
        }}
      >
        <CardActionArea onClick={() => setShowModal(true)}>
          <div className="eventCard--title bottom-padding">
            <p>
              <span>{organizer}</span>
            </p>
          </div>
          <div className="eventCard--title">
            <h2>
              <span>{location}</span>
            </h2>
            <p>
              <span>{formatDate(date.substring(0, 10))}</span>
            </p>
          </div>
        </CardActionArea>
      </Card>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box sx={style}>
          <h2>{title}</h2>
          <hr></hr>
          <b>Location: </b>
          {location}
          <br></br>
          <b>Date: </b>
          {formatDate(date.substring(0, 10))}
          <br></br>
          {/* <b>Time:</b>
          <br></br> */}
          <b>Recursive: </b>NO
          <br></br>
          <b>Description: </b>
          {description}
          <div className="user-display">
            <div>
              <b>Volunteers:</b>
            </div>
            <div className="event-contact">
              <b>Event Contact: </b>
            </div>
          </div>
          <hr></hr>
          <div align="right">
            {volunteered ? (
              <Button startIcon={<CheckIcon />} style={{ color: "#67B9A5" }}>
                VOLUNTEERED
              </Button>
            ) : (
              <Button
                onClick={() => setVolunteered(true)}
                style={{ color: "#A669DF" }}
              >
                VOLUNTEER
              </Button>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default EventCard;
