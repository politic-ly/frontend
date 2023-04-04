import InitiativeCard from "../cards/InitiativeCard";
import pic from "../assets/gimpy.PNG";
import React, { useEffect, useState } from "react";
import "../App.scss";
import { getAllInitiatives } from "../apis/initiatives-handler";

function Explore() {
  const [data, setData] = useState([]);
  const getData = () => {
    getAllInitiatives()
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
      <h2>Take Action</h2>
      <p className="page-subtitle">
        <i>Initiatives based on your interests</i>
      </p>
      <div className="explore-wrapper">
        {data.map((initiative, i) => (
          <div key={i}>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
