import React, { useEffect, useState } from "react";
import pic from "../assets/blurby-cat.jpg";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Breadcrumbs } from "@mui/material";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useParams } from "react-router-dom";
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

  const user = localStorage.getItem("user");
  const user_id = JSON.parse(user)._id;

  useEffect(() => {
    getData();
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
          <img src={pic} alt="initiative photo"></img>
          <span>
            <h2>
              <b>{data.title}</b>
            </h2>
            <p className="page-subtitle">
              <i>{data.shortDescription}</i>
            </p>
            <p>{data.fullDescription}</p>
            <p>Created: date Last Updated: date</p>
          </span>
        </div>
        <div className="right-col">
          <div className="volunteers-container">
            <div className="header-container">
              <h2>
                <b>Volunteers</b>
              </h2>
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
              <NavLink to="/announcements" className="view-all">
                view all
              </NavLink>
            </div>
            <Box sx={{ width: "100%" }}>
              <Stack spacing={2}>
                {data.announcement && data.announcements.length > 0 ? (
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
                              <CalendarTodayOutlinedIcon
                                fontSize="large"
                                style={{ color: "#906F9B" }}
                              />
                            </div>
                            <div className="card-text">
                              <b>{event.title}</b>
                              <p>
                                {format(new Date(event.date), "MM/dd/yyyy")}
                              </p>
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
