import React, { useState } from "react";
import {
  Button,
  Chip,
  FormControl,
  IconButton,
  Step,
  Stepper,
  StepLabel,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";

const CreateInitiative = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [tags, setTags] = useState([]);
  const steps = ["Required Information", "Additional Details", "Upload Media"];

  const addTag = (addedTag) => {
    let tempTags = tags;
    tempTags.push(addedTag);
    setTags(tempTags);
  };

  const deleteTag = (deletedTag) => {
    let tempTags = tags;
    tempTags.push(deletedTag);
    setTags(tempTags);
  };

  const handleBackStep = () => {
    setActiveStep(activeStep - 1);
  };

  const handleStep = () => {
    setActiveStep(activeStep + 1);
  };

  const RequiredInfo = () => {
    return (
      <form className="createInitiative--requiredInfo page-wrapper">
        <TextField className="createInitiative--textInput" label="Title" color="secondary"/>
        <TextField className="createInitiative--textInput" label="Location" color="secondary"/>
        <TextField
          className="createInitiative--textInput"
          label="Short Description"
          placeholder="Max 100 words"
          color="secondary"
        />
        <TextField
          className="createInitiative--textInput"
          label="Long Description"
          color="secondary"
          multiline
          rows={5}
        />
      </form>
    );
  };

  const AdditionalDetails = () => {
    return (
      <form className="page-wrapper">
        <div className="createInitiative--addTagsGroup">    
            <TextField className="createInitiative--textInput" label="Tags" color="secondary"/>
            <IconButton aria-label="add tag">
                <Add/>
            </IconButton>
        </div>
      </form>
    );
  };

  const renderFormContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="createInitiative--formContainer">
            <RequiredInfo />
          </div>
        );
      case 1:
        return (
          <div className="createInitiative--formContainer">
            <AdditionalDetails />
          </div>
        );
    }
  };

  return (
    <div className="createIntiative">
      <div className="createInitiative--banner">
        <h2>Create an Initiative</h2>
        <p className="page-subtitle">
          <i>Initiatives based on your interests</i>
        </p>
      </div>
      <div></div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          return (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {renderFormContent(activeStep)}
      <div className="createInitiative--stepButtons">
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={() => handleBackStep()}
        >
          Back
        </Button>
        <Button color="inherit" onClick={() => handleStep()}>
          {activeStep === 2 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default CreateInitiative;
