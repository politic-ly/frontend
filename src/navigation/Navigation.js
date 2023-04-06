import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/politicly-logo";
import Avatar from "@mui/material/Avatar";
import blurbycat from "../assets/blurby-cat.jpg";
import {
  Explore,
  Favorite,
  Newspaper,
  Notifications,
} from "@mui/icons-material";

import "../App.scss";

const Navigation = () => {
  return (
    <div>
    <div className="navigation">
      <NavLink to="/">
        <div className="navigation logo-container">
          <Logo />
        </div>
      </NavLink>
      <h1 className="navigation politicly-brand">Politic.ly</h1>
      <ul className="navigation nav-items">
        <li>
          <NavLink
            to="/favorites"
            className={(e) =>
              e.isActive ? "navigation--item active" : "navigation--item"
            }
          >
            <Favorite />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={(e) =>
              e.isActive ? "navigation--item active" : "navigation--item"
            }
          >
            <Explore />
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation--item">
            <span className="material-symbols-outlined">
              <Notifications />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={(e) =>
              e.isActive ? "navigation--item active" : "navigation--item"
            }
          >
            <span className="material-symbols-outlined">
              <Newspaper />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account"
            className={(e) =>
              e.isActive ? "navigation--item active" : "navigation--item"
            }
          >
            {/* <img className='navigation account-img' src={blurbycat} alt="cat-account"/> */}
            <Avatar src={blurbycat} alt="cat-account" />
          </NavLink>
        </li>
      </ul>
    </div>
    <hr></hr>
    </div>
  );
};

export default Navigation;
