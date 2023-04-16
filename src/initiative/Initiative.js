import React, { useEffect, useState } from "react";
import pic from "../assets/blurby-cat.jpg";
import {
  Avatar,
  AvatarGroup,
  Box,
  Breadcrumbs,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useParams } from "react-router-dom";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { Today } from "@mui/icons-material";
import { format } from "date-fns";
import {
  getInitiativeById,
  getInitiativesByIds,
} from "../apis/initiatives-handler";
import { getUserById } from "../apis/users-handler";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(166, 233, 216)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "38px",
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(223, 183, 235)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "38px",
}));

function Initiative() {
  const [data, setData] = useState({});
  const [isOwner, setIsOwner] = useState(false);
  const { id } = useParams();
  const getData = () => {
    getInitiativeById(id)
      .then(function (response) {
        return response.data;
      })
      .then(function (myJson) {
        setData(myJson);
        if (user_id == myJson.admins[0]) {
          setIsOwner(true);
        }
      });
  };

  const formatDate = (date) => {
    var dateObj = new Date(date);
    if (dateObj instanceof Date && !isNaN(dateObj.valueOf())) {
      return format(dateObj, "dd/MM/yyyy");
    } else {
      return "TBD";
    }
  };
  const user = localStorage.getItem("user");
  const user_id = JSON.parse(user)._id;

  const [volunteerList, setVolunteerList] = useState([]);
  useEffect(() => {
    getData();
    setVolunteerList(data.followers);
  }, []);

  return (
    <div>
      <div className="breadcrumb-containter">
        <NavLink to="/" className="back-arrow">
          <ArrowBackIcon
            sx={{
              "&:hover": { color: "#906F9B" },
            }}
          />
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
          <img
            src={
              data.images ? "http://localhost:5152" + "/" + data.images[0] : pic
            }
            alt="initiative photo"
            className="initiative--img-container"
          ></img>
          <span>
            <h2>
              <b>{data.title}</b>
            </h2>
            <p className="page-subtitle">
              <i>{data.shortDescription}</i>
            </p>
            <p>{data.fullDescription}</p>
          </span>
        </div>
        <div className="right-col">
          <div className="volunteers-container">
            <div className="header-container">
              <h2>
                <b>Volunteers</b>
              </h2>
              <div className="initiative--volunteerList">
                <AvatarGroup max={10}>
                  {volunteerList && volunteerList.length > 0 ? (
                    volunteerList.map((vol, index) => {
                      return (
                        <Avatar
                          key={index}
                          src={vol.profileImg}
                          alt={vol.username}
                          sx={{ width: 24, height: 24 }}
                        />
                      );
                    })
                  ) : (
                    <></>
                  )}
                </AvatarGroup>
              </div>
              <NavLink to="/announcements" className="view-all">
                view all
              </NavLink>
            </div>
          </div>
          <div className="announcements-container test">
            <div className="header-container">
              <h2>
                <b>Recent Announcements</b>
              </h2>
              {isOwner ? (
                <NavLink
                  to={`/initiative/${id}/announcements/new`}
                  className="view-all"
                >
                  Create New
                </NavLink>
              ) : null}
              <NavLink to="/announcements" className="view-all">
                view all
              </NavLink>
            </div>
            <Box sx={{ width: "100%" }}>
              <Stack spacing={2}>
                {data.announcements && data.announcements.length > 0 ? (
                  data.announcements.map(
                    (announcement, index) =>
                      index < 3 && (
                        <Item>
                          <div className="card-content">
                            <div className="card-icon">
                              <CampaignOutlinedIcon
                                fontSize="large"
                                style={{ color: "#709E93" }}
                              />
                            </div>
                            <div className="card-text">
                              <b>{announcement.title}</b>
                              <p>{announcement.description}</p>
                            </div>
                          </div>
                        </Item>
                      )
                  )
                ) : (
                  <div>
                    <p>No New Announcements</p>
                  </div>
                )}
              </Stack>
            </Box>
          </div>
          <div className="events-container">
            <div className="header-container">
              <h2>
                <b>Upcoming Events</b>
              </h2>
              {isOwner ? (
                <NavLink
                  to={`/initiative/${id}/events/new`}
                  className="view-all"
                >
                  Create New
                </NavLink>
              ) : null}
              <NavLink to="/events" className="view-all">
                view all
              </NavLink>
            </div>
            <Box sx={{ width: "100%" }}>
              <Stack spacing={2}>
                {data.events && data.events.length > 0 ? (
                  data.events.map(
                    (event, index) =>
                      index < 3 && (
                        <Item2>
                          <div className="card-content">
                            <div className="card-icon">
                              <Today
                                fontSize="large"
                                style={{ color: "#906F9B" }}
                              />
                            </div>
                            <div className="card-text">
                              <b>{event.title}</b>
                              <p>{formatDate(event.date)}</p>
                            </div>
                          </div>
                        </Item2>
                      )
                  )
                ) : (
                  <div>
                    {" "}
                    <p>No Upcoming Events</p>{" "}
                  </div>
                )}
              </Stack>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Initiative;
