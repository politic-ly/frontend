import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardActionArea, Fab, Tooltip } from "@mui/material";
import InitiativesBlock from "./Blocks/Initiatives-Block";
import InitiativeCard from "../cards/InitiativeCard";
import EventCard from "../cards/EventCard";
import pic from "../assets/blurby-cat.jpg";
import axios from "axios";
import { Lightbulb, Today } from "@mui/icons-material";

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
          <Tooltip placement="left" title="Initiatives">
            <Fab
              onClick={() => setSetShowEvents(false)}
              sx={{
                backgroundColor: "#67B9A5",
                "&:hover": { backgroundColor: "#E0BC58" },
              }}
            >
              <Lightbulb sx={{ color: "#245045" }} />
            </Fab>
          </Tooltip>
        </div>
        <div className="fab">
          <Tooltip placement="right" title="Events">
            <Fab
              onClick={() => setSetShowEvents(true)}
              sx={{
                backgroundColor: "#A669DF",
                "&:hover": { backgroundColor: "#E0BC58" },
              }}
            >
              <Today sx={{ color: "#3a2250" }} />
            </Fab>
          </Tooltip>
        </div>
      </div>
      <div>
        {showEvents ? (
          <div>
            <div align="center" className="title">
              <h2>Explore Events</h2>
            </div>
            <div className="explorefave-wrapper">
              {data.map((initiative, i) =>
                initiative.events.map((event) => (
                  <div key={i}>
                    <EventCard
                      img={
                        initiative.images
                          ? "http://localhost:5152" + "/" + initiative.images[0]
                          : pic
                      }
                      title={event.title}
                      organizer={initiative.title}
                      date={event.date}
                      location={initiative.location}
                      description={event.description}
                    />
                    <div className="top-padding">
                      <b>{event.title}</b>
                      {console.log(initiative.events)}
                    </div>
                  </div>
                ))
              )}
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
                      id={initiative._id}
                      img={
                        initiative.images
                          ? "http://localhost:5152" + "/" + initiative.images[0]
                          : pic
                      }
                      title={initiative.title}
                      subtitle={initiative.shortDescription}
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
