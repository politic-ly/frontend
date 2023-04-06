import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Button,
  Chip,
  IconButton,
  Step,
  Stepper,
  StepLabel,
  TextField,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { postInitiative } from "../apis/initiatives-handler";
import { useOutletContext } from "react-router-dom";

const CreateInitiative = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [tags, setTags] = useState([]);
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const { profile } = useOutletContext();

  const tagRef = useRef();
  const steps = ["Required Information", "Additional Details", "Upload Media"];

  useEffect(() => {}, [tags]);

  const handleDeleteTags = (deletedTag) => {
    let tempTags = tags;
    tempTags.map((tag, index) => {
      if (tag === deletedTag) {
        tempTags.splice(index, 1);
      }
    });
    setTags([...tempTags]);
  };

  const addTag = () => {
    setTags([...tags, tagRef.current.value]);
    tagRef.current.value = "";
  };

  const handleBackStep = () => {
    setActiveStep(activeStep - 1);
  };

  const submitForm = () => {
    const formData = new FormData();
    const user = localStorage.getItem("user");
    const user_id = JSON.parse(user)._id;
    formData.append("title", requiredInfo.title);
    formData.append("location", requiredInfo.location);
    formData.append("shortDescription", requiredInfo.shortDescription);
    formData.append("fullDescription", requiredInfo.longDescription);
    formData.append("tags", tags);
    formData.append("admins", [user_id]);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    postInitiative(formData).then((res) => {
      if (res.status === 200) {
        setSuccessfulSubmit(true);
      }
      console.log(res);
    });
  };

  const handleStep = () => {
    if (activeStep === 2) {
      // submit form
      submitForm();
    }
    setActiveStep(activeStep + 1);
  };

  const TagsChips = () => {
    return (
      <div className="createInitiative--tagsChips">
        {tags.map((tag) => {
          return (
            <Chip
              className="createInitiative--tagChip"
              key={tag}
              label={tag}
              onDelete={() => handleDeleteTags(tag)}
              color="secondary"
              style={{ marginRight: "5px" }}
            />
          );
        })}
      </div>
    );
  };

  const [requiredInfo, setRequiredInfo] = useState({
    title: "",
    location: "",
    shortDescription: "",
    longDescription: "",
  });
  const handleRequiredInfoChange = (e) =>
    setRequiredInfo({ ...requiredInfo, [e.target.name]: e.target.value });

  const RequiredInfo = () => {
    return (
      <form className="createInitiative--requiredInfo page-wrapper">
        <TextField
          className="createInitiative--textInput"
          label="Title"
          name="title"
          color="secondary"
          value={requiredInfo.title}
          onChange={handleRequiredInfoChange}
        />
        <TextField
          className="createInitiative--textInput"
          label="Location"
          color="secondary"
          name="location"
          value={requiredInfo.location}
          onChange={handleRequiredInfoChange}
        />
        <TextField
          className="createInitiative--textInput"
          label="Short Description"
          placeholder="Max 100 words"
          color="secondary"
          name="shortDescription"
          value={requiredInfo.shortDescription}
          onChange={handleRequiredInfoChange}
        />
        <TextField
          className="createInitiative--textInput"
          label="Long Description"
          color="secondary"
          multiline
          rows={5}
          name="longDescription"
          value={requiredInfo.longDescription}
          onChange={handleRequiredInfoChange}
        />
      </form>
    );
  };
  const enterKey = (e) => {
    if (e.key === "Enter") {
      addTag();
    }
  };

  const AdditionalDetails = () => {
    return (
      //   <form className="page-wrapper" onSubmit={(e) => addTag(e)}>
      <form className="page-wrapper">
        <div className="createInitiative--addTagsGroup">
          <TextField
            id="addTagInput"
            label="Tags"
            variant="outlined"
            color="secondary"
            onKeyDown={(e) => {
              enterKey(e);
            }}
            inputRef={tagRef}
          />
          <IconButton
            aria-label="add tag"
            // disabled={tagValue == ""}
            onClick={() => {
              setTags([...tags, tagRef.current.value]);
              tagRef.current.value = "";
            }}
          >
            <Add />
          </IconButton>
        </div>
        <TagsChips />
      </form>
    );
  };

  // create a function that lets user upload multiple images

  const [images, setImages] = useState([]);

  const handleImageUpload = (index, event) => {
    const uploadedImage = event.target.files[0];
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = uploadedImage;
      return newImages;
    });
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleAddMoreImages = () => {
    setImages((prevImages) => [...prevImages, null]);
  };

  const UploadMedia = () => {
    // let user upload multiple images
    return (
      <form className="page-wrapper">
        {images.map((image, index) => (
          <div key={index} className="createInitiative--imageUploadField">
            <Button component="label">
              Select Image:
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={(event) => handleImageUpload(index, event)}
              />
            </Button>
            {image && (
              <div>
                <span>{image.name}</span>
                <IconButton
                  type="button"
                  onClick={() => handleImageDelete(index)}
                >
                  <Delete></Delete>
                </IconButton>
              </div>
            )}
          </div>
        ))}
        <Button onClick={handleAddMoreImages}>Add Image</Button>
      </form>
    );
  };

  const requiredInfoMemoized = useMemo(() => RequiredInfo());

  const renderFormContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="createInitiative--formContainer">
            {/* <RequiredInfo /> */}
            {requiredInfoMemoized}
          </div>
        );
      case 1:
        return (
          <div className="createInitiative--formContainer">
            <AdditionalDetails />
          </div>
        );
      case 2:
        return (
          <div className="createInitiative--formContainer">
            <UploadMedia />
          </div>
        );
      case 3:
        return (
          <div className="createInitiative--submissionMessage">
            <h1>
              {successfulSubmit
                ? "Successfully Submitted!"
                : "Failed to Submit"}
            </h1>
          </div>
        );
      default:
        return null;
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
      {/* {useMemo(() => renderFormContent(activeStep), [activeStep])} */}
      <div className="createInitiative--stepButtons">
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={() => handleBackStep()}
        >
          Back
        </Button>
        <Button color="inherit" onClick={() => handleStep()}>
          {activeStep === 2 ? "Finish" : activeStep >= 3 ? "" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default CreateInitiative;
