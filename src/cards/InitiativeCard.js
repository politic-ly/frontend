import React, { useState, useEffect } from "react";
import Cat from "../assets/blurby-cat.jpg";
import { AvatarGroup, Avatar, Card } from '@mui/material';
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";

const InitiativeCard = ({ img, title, subtitle, location, volunteerData }) => {
  // State objects for data
  const [volunteerList, setVolunteerList] = useState([]);
  const [favorited, setFavorited] = useState(false);

  console.log(title);
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
    setVolunteerList(volunteerData);
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
        {favorited ? (
          <Favorite 
            className="initiativeCard--favorited"
            onClick={() => setFavorited(!favorited)}
          />
        ) : (
          <FavoriteBorderOutlined
            className="initiativeCard--favorited"
            onClick={() => setFavorited(!favorited)}
          />
        )}
        <div className="initiativeCard--volunteers">
          <p>{volunteerList.length} volunteers</p>
          <div className="initiativeCard--volunteerList">
            <AvatarGroup max={10}>
              {volunteerList.map((vol, index) => {
                return (
                  <Avatar
                    key={index}
                    src={vol.profileImg}
                    alt={vol.username}
                    sx={{ width: 24, height: 24 }}
                  />
                );
              })}
            </AvatarGroup>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InitiativeCard;
