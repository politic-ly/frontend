import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Card } from "@mui/material";
import { CardActionArea } from "@mui/material";
import InitiativeCard from "../cards/InitiativeCard";
import InitiativesBlock from "./Blocks/Initiatives-Block";
import pic from "../assets/blurby-cat.jpg";
import { Fab } from "@mui/material";
import { Today, Lightbulb } from "@mui/icons-material";

const Home = () => {
  const explores = 4;
  const initiatives = 6;
  const news = 6;

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
            sx={{
              backgroundColor: "#67b9a5",
              "&:hover": { backgroundColor: "#e0bc58" },
            }}
          >
            <Lightbulb
              sx={{
                color: "#245045",
                "&:hover": { color: "#79611F" },
              }}
            />
          </Fab>
        </div>
        <div className="fab">
          <NavLink to="/" className="back-arrow">
            <Fab
              sx={{
                backgroundColor: "#a669df",
                "&:hover": { backgroundColor: "#e0bc58" },
              }}
            >
              <Today
                sx={{
                  color: "#3a2250",
                  "&:hover": { color: "#79611F" },
                }}
              />
            </Fab>
          </NavLink>
        </div>
      </div>
      <div>
        <b>Explore What is Going On in Your Community</b>
        <div className="explore-wrapper">
          {data.map((initiative, i) => (
            <div key={i}>
              {/* <NavLink to="/initiative"> */}
                <InitiativeCard
                  // img={`../assets/${initiative.images[0]}`}
                  img={pic}
                  title={initiative.title}
                  subtitle={initiative.shortDescription}
                  location={initiative.location}
                  volunteerData={initiative.followers}
                />
              {/* </NavLink> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
