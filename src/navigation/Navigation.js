import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/politicly-logo";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Popover,
} from "@mui/material";
import blurbycat from "../assets/blurby-cat.jpg";
import {
  AccountCircle,
  Explore,
  Favorite,
  Logout,
  Newspaper,
  Notifications,
} from "@mui/icons-material";
import { googleLogout } from "@react-oauth/google";

import "../App.scss";

const Navigation = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [openPopover, setOpenPopover] = useState(false);

  const handleAccountMenuOpen = (event) => {
    setAccountMenuOpen(true);
    setAnchor(event.currentTarget);
  };
  const handleAccountMenuClose = () => {
    setAccountMenuOpen(false);
    setAnchor(null);
  };

  const handlePopoverOpen = (event) => {
    setOpenPopover(true);
    setPopoverAnchor(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setOpenPopover(false);
    setPopoverAnchor(null);
  };

  let navigate = useNavigate();
  const logout = () => {
    googleLogout();
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
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
            <NavLink className="navigation--item" onClick={handlePopoverOpen}>
              <span className="material-symbols-outlined">
                <Notifications />
              </span>
            </NavLink>
          </li>
          <Popover
            open={openPopover}
            anchorEl={popoverAnchor}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
          ></Popover>
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
              <Avatar src={blurbycat} alt="cat-account" onClick={handleAccountMenuOpen} />
              <Menu
                open={accountMenuOpen}
                anchorEl={anchor}
                onClose={handleAccountMenuClose}
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
                <MenuItem onClick={logout}>
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
