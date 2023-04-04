import React, { useState, useEffect } from "react";
import Cat from "../assets/blurby-cat.jpg";
import { AvatarGroup, Avatar, Card } from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import {
  addFavorite,
  getFavoriteInitiatives,
  removeFavorite,
} from "../apis/users-handler";

const InitiativeCard = ({
  id,
  img,
  title,
  subtitle,
  location,
  volunteerData,
}) => {
  // State objects for data
  const [volunteerList, setVolunteerList] = useState([]);
  const [favorited, setFavorited] = useState();

  const isFavorited = () => {
    const user = localStorage.getItem("user");
    getFavoriteInitiatives(JSON.parse(user)._id).then((res) => {
      if (res.status === 200) {
        setFavorited(res.data.includes(id));
      }
    });
  };
  isFavorited();
  const user = localStorage.getItem("user");
  const user_id = JSON.parse(user)._id;

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
    setVolunteerList(volunteerData);
  }, []);

  return (
    <Card
      className="initiativeCard"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
      }}
    >
      <CardActionArea>
        <div className="initiativeCard--text">
          <Link style={{ textDecoration: "none" }} to={"/initiative/" + id}>
            <p className="initiativeCard--location">{location.toUpperCase()}</p>
            <div className="initiativeCard--title">
              <h2>
                <span>{title}</span>
              </h2>
              <p>
                <span>{subtitle}</span>
              </p>
            </div>
          </Link>
        </div>
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
      </CardActionArea>
    </Card>
  );
};

export default InitiativeCard;
