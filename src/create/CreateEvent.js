import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { postEvent } from "../apis/initiatives-handler";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [requiredInfo, setRequiredInfo] = useState({
    title: "",
    description: "",
    date: "",
  });
  const handleRequiredInfoChange = (e) =>
    setRequiredInfo({ ...requiredInfo, [e.target.name]: e.target.value });
  const handleDateChange = (date) => setRequiredInfo({ ...requiredInfo, date });

  const handleRequiredInfoSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: requiredInfo.title,
      description: requiredInfo.description,
      date: requiredInfo.date,
    };
    postEvent(id, formData).then((res) => {
      if (res.status === 200) {
        navigate(`/initiative/${id}`);
      }
    });
  };

  return (
    <div className="createEvent">
      <div className="createEvent--banner">
        <h2>Create an Event</h2>
        <p className="page-subtitle">
          <i>Events based on your interests</i>
        </p>
      </div>
      <div></div>
      <div className="createEvent--formContainer">
        <form className="createEvent--requiredInfo page-wrapper">
          <TextField
            className="createEvent--textInput"
            label="Title"
            name="title"
            color="secondary"
            value={requiredInfo.title}
            onChange={handleRequiredInfoChange}
          />

          <LocalizationProvider name="date" dateAdapter={AdapterDayjs}>
            <DatePicker
              className="createEvent--textInput"
              color="secondry"
              name="date"
              value={requiredInfo.date}
              onChange={handleDateChange}
            />
          </LocalizationProvider>

          <TextField
            className="createEvent--textInput"
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
            className="createEvent--submitButton"
            onClick={handleRequiredInfoSubmit}
          >
            Create Event
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
