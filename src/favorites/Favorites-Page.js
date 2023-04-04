import React, { useEffect, useState } from "react";
import InitiativeCard from "../cards/InitiativeCard";
import pic from "../assets/blurby-cat.jpg";
import {
  getInitiativesByIds,
} from "../apis/initiatives-handler";
import { getFavoriteInitiatives } from "../apis/users-handler";

function Favorites() {
  const user = localStorage.getItem("user");
  const user_id = JSON.parse(user)._id;
  const [data, setData] = useState([]);
  const getData = () => {
    getFavoriteInitiatives(user_id)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          return res.data;
        }
      })
      .then((res) => {
        getInitiativesByIds(res).then((res) => {
          if (res.status === 200) {
            setData(res.data);
          }
        });
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="page-wrapper">
      <span>
        <h2>
          <b>Favorites Page</b>
        </h2>
        <p className="page-subtitle">
          <i>My Bookmarked/Top Initiatives</i>
        </p>
      </span>
      <div className="favorites-wrapper">
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

export default Favorites;
