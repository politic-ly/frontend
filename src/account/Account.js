import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  FormControl,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { AccountCircle, Lightbulb, Logout } from "@mui/icons-material";
import pic from "../assets/gimpy.PNG";
import { getUserById } from "../apis/users-handler";
import { getInitiativesByUser } from "../apis/initiatives-handler";
import { postUserChanges } from "../apis/users-handler";
import InitiativeCard from "../cards/InitiativeCard";

function Account() {
  const user = localStorage.getItem("user");
  const user_id = JSON.parse(user)._id;
  const navigate = useNavigate();

  useEffect(() => {
    getUserById(user_id).then((res) => {
      setUserInfo(res.data);
      setAllAccountInfo({
        firstName: res.data.fullName.split(" ")[0],
        lastName: res.data.fullName.split(" ")[1],
        location: res.data.location,
      });
    });
    getInitiativesByUser(user_id).then((res) => setMyInitiativeData(res.data));
  }, []);

  const [userInfo, setUserInfo] = useState("");
  const [myInitiativeData, setMyInitiativeData] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [allAccountInfo, setAllAccountInfo] = useState({
    firstName: "",
    lastName: "",
    location: "",
  });

  const handleUserInfoChange = (e) =>
    setAllAccountInfo({
      ...allAccountInfo,
      [e.target.name]: e.target.value,
    });

  const handleEditAccountSettings = (e) => {
    e.preventDefault();
    const infoData = {
      fullName: allAccountInfo.firstName + " " + allAccountInfo.lastName,
      location: allAccountInfo.location,
    };
    console.log(infoData);
    postUserChanges(user_id, infoData).then((res) => {
      if (res.status === 200) {
        navigate(`/account`);
      }
    });
  };

  return (
    <div className="accountPage">
      <h2 className="accountPage--title">My Account</h2>
      <div className="accountPage--content">
        <div className="accountPage--menu">
          <div className="accountPage--profileInfo">
            <img src={pic} className="accountPage--profilePic" />
            <h2>{userInfo.fullName}</h2>
            <p>
              <u>{userInfo.email}</u>
            </p>
            <p>{userInfo.location}</p>
          </div>

          <div className="accountPage--actions">
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setCurrentTab(1)}>
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText primary="Account Settings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setCurrentTab(0)}>
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
                    {/* {console.log(userInfo.fullName.split(" "))} */}
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </div>
        <div className="accountPage--display page-wrapper">
          {currentTab === 0 ? (
            <>
              <h3>My Initiatives</h3>
              <div>
                {myInitiativeData.map((initiative, i) => {
                  return (
                    <InitiativeCard
                      // img={`../assets/${initiative.images[0]}`}
                      img={pic}
                      key={i}
                      title={initiative.title}
                      subtitle={initiative.shortDescription}
                      location={initiative.location}
                      volunteerData={initiative.followers}
                      type="account"
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <h3>Account Settings</h3>
              <FormControl
                className="accountPage--accountSettings"
                onSubmit={(e) => console.log(e)}
              >
                <TextField
                  className="accountPage--settingsField"
                  label="First Name"
                  name="firstName"
                  color="secondary"
                  defaultValue={userInfo.fullName.split(" ")[0]}
                  onChange={handleUserInfoChange}
                ></TextField>
                <TextField
                  className="accountPage--settingsField"
                  label="Last Name"
                  name="lastName"
                  color="secondary"
                  defaultValue={userInfo.fullName.split(" ")[1]}
                  onChange={handleUserInfoChange}
                ></TextField>
                <TextField
                  className="accountPage--settingsField"
                  label="Location"
                  name="location"
                  color="secondary"
                  defaultValue={userInfo.location}
                  onChange={handleUserInfoChange}
                ></TextField>
                <Button
                  className="accountPage--saveButton"
                  variant="contained"
                  color="secondary"
                  onClick={handleEditAccountSettings}
                >
                  Save
                </Button>
              </FormControl>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
