import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { postAnnouncement } from "../apis/initiatives-handler";
import { useNavigate } from "react-router-dom";

const CreateAnnouncement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [requiredInfo, setRequiredInfo] = useState({
    title: "",
    description: "",
  });
  const handleRequiredInfoChange = (e) =>
    setRequiredInfo({ ...requiredInfo, [e.target.name]: e.target.value });

  const handleRequiredInfoSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: requiredInfo.title,
      description: requiredInfo.description,
    };
    postAnnouncement(id, formData).then((res) => {
      if (res.status === 200) navigate(`/initiative/${id}`);
    });
  };

  return (
    <div className="createAnnouncement">
      <div className="createAnnouncement--banner">
        <h2>Create an Event</h2>
        <p className="page-subtitle">
          <i>Events based on your interests</i>
        </p>
      </div>
      <div></div>
      <div className="createAnnouncement--formContainer">
        <form className="createAnnouncement--requiredInfo page-wrapper">
          <TextField
            className="createAnnouncement--textInput"
            label="Title"
            name="title"
            color="secondary"
            value={requiredInfo.title}
            onChange={handleRequiredInfoChange}
          />

          <TextField
            className="createAnnouncement--textInput"
            label="Description"
            color="secondary"
            multiline
            rows={5}
            name="description"
            value={requiredInfo.description}
            onChange={handleRequiredInfoChange}
          />
          <Button
            variant="contained"
            color="secondary"
            className="createAnnouncement--submitButton"
            onClick={handleRequiredInfoSubmit}
          >
            Create Event
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateAnnouncement;
