import React, { useState, useEffect } from "react";
import Cat from "../assets/blurby-cat.jpg";

const InitiativeCard = ({ img, title, subtitle, location, volunteers }) => {
  // State objects for data
  const [volunteerList, setVolunteerList] = useState([]);

  // // Pull data on load
  useEffect(() => {
    // fetch('"../data/users.json"')
    // .then((response) => response.json())
    // .then((json) => console.log(json));
    setVolunteerList([
      { id: 1, username: "BigBoiJash", profileImg: Cat },
      { id: 2, username: "thickLizard", profileImg: Cat },
      {id: 3, username: "wenchBenchYourMom", profileImg: Cat},
      {id: 4, username: "wenchBenchYourMom", profileImg: Cat},
      {id: 5, username: "wenchBenchYourMom", profileImg: Cat},
      {id: 6, username: "wenchBenchYourMom", profileImg: Cat},
      {id: 7, username: "wenchBenchYourMom", profileImg: Cat},
    ]);
  }, []);

  return (
    <div
      className="initiativeCard"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img})`,
      }}
    >
      <div className="initiativeCard--text">
        <p className="initiativeCard--location">{location.toUpperCase()}</p>
        <div className="initiativeCard--title">
          <h2>
            <span>{title}</span>
          </h2>
          <p>
            <span>{subtitle}</span>
          </p>
        </div>
      </div>
      <div className="initiativeCard--function">
        <span className="material-symbols-outlined favorite">favorite</span>
        <p className="initiativeCard--volunteers" style={{transform: `translate(${(volunteerList.length - 1)*12}px, 24px)`}}>
          {volunteerList.map((vol, index) => {
            return (
              <img className="initiativeCard--volunteer" src={vol.profileImg} alt={vol.username} style={{transform: `translateX(-${(index)*12}px)`}}/>
            )
          })}
        </p>
      </div>
    </div>
  );
};

export default InitiativeCard;
