import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/politicly-logo";
import { Avatar, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import blurbycat from "../assets/blurby-cat.jpg";
import {
  AccountCircle,
  Explore,
  Favorite,
  Logout,
  Newspaper,
  Notifications,
} from "@mui/icons-material";

import "../App.scss";

const Navigation = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);

  const handleClick = (event) => {
    setAccountMenuOpen(true);
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAccountMenuOpen(false);
    setAnchor(null);
  };

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
          <div className="navigation--avatar">
            <Avatar src={blurbycat} alt="cat-account" onClick={handleClick} />
            <Menu
              open={accountMenuOpen}
              anchorEl={anchor}
              onClose={handleClose}
            >
              <NavLink
                to="/account"
                className={(e) =>
                  e.isActive ? "navigation--item active" : "navigation--item"
                }
                onClick={() => setAccountMenuOpen(false)}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText>Account</ListItemText>
                </MenuItem>
              </NavLink>
              <MenuItem>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </div>
        </li>
      </ul>
    </div>
    <hr></hr>
    </div>
  );
};

export default Navigation;
