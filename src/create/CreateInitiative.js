import React, { useState, useMemo, useRef } from "react";
import {
  Button,
  Chip,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Step,
  Stepper,
  StepLabel,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";

const CreateInitiative = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [tags, setTags] = useState([]);
  const [tagValue, setTagValue] = useState("");
  const tagRef = useRef();
  const steps = ["Required Information", "Additional Details", "Upload Media"];

  const addTag = () => {
    setTagValue(tagRef.current.value)
    let tempTags = tags;
    tempTags.push(tagValue);
    setTags(tempTags);
    setTagValue("");
    console.log(tags)
    console.log(tagRef.current.value)
    // resetInput()
  };

  const deleteTag = (deletedTag) => {
    let tempTags = tags;
    tempTags.push(deletedTag);
    setTags(tempTags);
  };

  // const resetInput = () => {
  //   tagRef.current.value = "";
  //   setTagValue("")
  // }

  const handleBackStep = () => {
    setActiveStep(activeStep - 1);
  };

  const handleStep = () => {
    setActiveStep(activeStep + 1);
  };

  const RequiredInfo = () => {
    return (
      <form
        className="createInitiative--requiredInfo page-wrapper"
        onSubmit={(e) => test(e)}
      >
        <TextField
          className="createInitiative--textInput"
          label="Title"
          color="secondary"
        />
        <TextField
          className="createInitiative--textInput"
          label="Location"
          color="secondary"
        />
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
      //   <form className="page-wrapper" onSubmit={(e) => addTag(e)}>
      <form className="page-wrapper">
        <div className="createInitiative--addTagsGroup">
          <TextField
            id="addTaPgInput"
            label="Tags"
            variant="outlined"
            color="secondary"
            inputRef={tagRef}
            // onChange={(e) => setTagValue(e.target.value)}
          />
          <IconButton
            aria-label="add tag"
            // disabled={tagValue == ""}
            onClick={() => addTag()}
          >
            <Add />
          </IconButton>
        </div>
        {/* {tags.map((tag) => {
          return (
            tag
          );
        })} */}
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
      {useMemo(() => renderFormContent(activeStep), [activeStep])}
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
