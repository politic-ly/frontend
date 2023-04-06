import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { AccountCircle, Lightbulb, Logout } from "@mui/icons-material";
import pic from "../assets/gimpy.PNG";
import { getInitiativesByUser } from "../apis/initiatives-handler";
import InitiativeCard from "../cards/InitiativeCard";


function Account() {
  const user = localStorage.getItem("user");
  const user_id = JSON.parse(user)._id;

  const [myInitiativeData, setMyInitiativeData] = useState([]);

  useEffect(() => {
    getInitiativesByUser(user_id).then((res) => setMyInitiativeData(res.data))
  },[])

  return (
    <div className="accountPage">
      <h2 className="accountPage--title">My Account</h2>
      <div className="accountPage--content">
        <div className="accountPage--menu">
          <div className="accountPage--profileInfo">
            <img src={pic} className="accountPage--profilePic" />
            <h2>FirstName LastName</h2>
            <h3>@username</h3>
            <p>
              <u>myemail@gmail.com</u>
            </p>
            <p>Location, LO</p>
          </div>

          <div className="accountPage--actions">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText primary="Account Settings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Lightbulb />
                  </ListItemIcon>
                  <ListItemText primary="My Initiatives" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </div>
        <div className="accountPage--display page-wrapper">
          <h3>My Initiatives</h3>
          <div>
            {myInitiativeData.map((initiative) => {
              return (
                <InitiativeCard
                  // img={`../assets/${initiative.images[0]}`}
                  img={pic}
                  title={initiative.title}
                  subtitle={initiative.shortDescription}
                  location={initiative.location}
                  volunteerData={initiative.followers}
                  type="account"
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
