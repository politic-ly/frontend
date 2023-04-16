import React, { useState, useEffect } from "react";
import { AvatarGroup, Avatar, Card } from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  addFavorite,
  getFavoriteInitiatives,
  getUserById,
  removeFavorite,
} from "../apis/users-handler";

const InitiativeCard = ({
  id,
  img,
  title,
  subtitle,
  location = "",
  type = "",
  volunteerData,
}) => {
  // State objects for data
  const [volunteerList, setVolunteerList] = useState([]);
  const [favorited, setFavorited] = useState();

  const user = localStorage.getItem("user");
  const user_id = JSON.parse(user)._id;
  const isFavorited = () => {
    getFavoriteInitiatives(JSON.parse(user)._id).then((res) => {
      if (res.status === 200) {
        setFavorited(res.data.includes(id));
      }
    });
  };
  isFavorited();

  // Add or remove favorite
  const toggleFavorite = () => {
    if (favorited) {
      removeFavorite(user_id, id).then((res) => {
        if (res.status === 200) {
          setFavorited(!favorited);
        }
      });
    } else {
      addFavorite(user_id, id).then((res) => {
        if (res.status === 200) {
          setFavorited(!favorited);
        }
      });
    }
  };
  useEffect(() => {
    let tempVolunteers = [];
    volunteerData.map((volunteer) => getUserById(volunteer).then((res) => console.log(res)));
    setVolunteerList(volunteerData);
  }, [volunteerData]);

  return (
    <Card
      className={`initiativeCard${type === "account" ? " accountType" : ""}`}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
      }}
    >
      <div className="initiativeCard--text">
        <p className="initiativeCard--location">{location.toUpperCase()}</p>
        <Link className="initiativeCard--textLink" to={"/initiative/" + id}>
          <div className="initiativeCard--title">
            <h2>
              {console.log(volunteerData)}
              <span>{title}</span>
            </h2>
            <p className="initiativeCard--subtitle">
              <span>{subtitle}</span>
            </p>
          </div>
        </Link>
      </div>
      {type == "account" ? (
        <></>
      ) : (
        <div className="initiativeCard--function">
          {favorited ? (
            <Favorite
              className="initiativeCard--favorited"
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite();
              }}
            />
          ) : (
            <FavoriteBorderOutlined
              className="initiativeCard--favorited"
              onClick={(e) => {
                toggleFavorite();
              }}
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
      )}
    </Card>
  );
};

export default InitiativeCard;
