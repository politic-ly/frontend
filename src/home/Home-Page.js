import React from "react";
import InitiativesBlock from "./Blocks/Initiatives-Block";
import { Card } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";
import InitiativeCard from "../cards/InitiativeCard";
import EventCard from "../cards/EventCard";
import { useEffect, useState } from "react";
import pic from "../assets/blurby-cat.jpg";
import axios from "axios";
import { Fab } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

const Home = () => {
  const [showEvents, setSetShowEvents] = useState(false);

  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:5152/initiatives")
      .then(function (response) {
        return response.data;
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="page-wrapper">
      <div className="fab-container">
        <div className="fab">
          <Fab
            onClick={() => setSetShowEvents(false)}
            sx={{
              backgroundColor: "#67B9A5",
              "&:hover": { backgroundColor: "#E0BC58" },
            }}
          >
            <RocketLaunchOutlinedIcon sx={{ color: "#245045" }} />
          </Fab>
        </div>
        <div className="fab">
          <Fab
            onClick={() => setSetShowEvents(true)}
            sx={{
              backgroundColor: "#A669DF",
              "&:hover": { backgroundColor: "#E0BC58" },
            }}
          >
            <CalendarTodayOutlinedIcon sx={{ color: "#3a2250" }} />
          </Fab>
        </div>
      </div>
      <div>
        {showEvents ? (
          <div>
            <div align="center" className="title">
              <h2>Explore Events</h2>
            </div>
            <div className="explorefave-wrapper">
              {data.map((initiative, i) => (
                <div key={i}>
                  <EventCard
                    // img={`../assets/${initiative.images[0]}`}
                    img={pic}
                    title={initiative.title}
                    subtitle={initiative.summary}
                    location={initiative.location}
                    volunteerData={initiative.followers}
                  />
                  <div className="top-padding">
                    <b>title</b>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div align="center" className="title">
              <h2>Explore Initiatives</h2>
            </div>
            <div className="exploreinit-wrapper">
              {data.map((initiative, i) => (
                <div key={i}>
                  <NavLink to="/initiative">
                    <InitiativeCard
                      // img={`../assets/${initiative.images[0]}`}
                      img={pic}
                      title={initiative.title}
                      subtitle={initiative.summary}
                      location={initiative.location}
                      volunteerData={initiative.followers}
                    />
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
