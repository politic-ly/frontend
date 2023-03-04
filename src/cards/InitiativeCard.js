import React, { useState, useEffect } from "react";
import Cat from "../assets/blurby-cat.jpg";
import { Card } from '@mui/material';

const InitiativeCard = ({ img, title, subtitle, location, volunteerData }) => {
  // State objects for data
  const [volunteerList, setVolunteerList] = useState([]);
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    // setVolunteerList([
    //   { id: 1, username: "BigBoiJash", profileImg: Cat },
    //   { id: 2, username: "thickLizard", profileImg: Cat },
    //   { id: 3, username: "wenchBenchYourMom", profileImg: Cat },
    //   { id: 4, username: "wenchBenchYourMom", profileImg: Cat },
    //   { id: 5, username: "wenchBenchYourMom", profileImg: Cat },
    //   { id: 6, username: "wenchBenchYourMom", profileImg: Cat },
    //   { id: 7, username: "wenchBenchYourMom", profileImg: Cat },
    // ]);
    setVolunteerList(volunteerData)
  }, []);

  return (
    <Card
      className="initiativeCard"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
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
        <span
          className={`material-symbols-outlined initiativeCard--favorited ${favorited ? "" : "unfill"}`}
          onClick={() => setFavorited(!favorited)}
        >
          favorite
        </span>
        <div
          className="initiativeCard--volunteers"
          style={{
            transform: `translate(${(volunteerList.length - 1) * 12}px, 24px)`,
          }}
        >
          <p>{volunteerList.length} volunteers</p>
          <div className="initiativeCard--volunteerList">
            {volunteerList.map((vol, index) => {
              return (
                <img
                  className="initiativeCard--volunteer"
                  src={vol.profileImg}
                  alt={vol.username}
                  style={{ transform: `translateX(-${index * 12}px)` }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InitiativeCard;
