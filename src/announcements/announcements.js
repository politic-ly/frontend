import React, { useEffect, useState } from "react";
import pic from "../assets/blurby-cat.jpg";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Breadcrumbs } from "@mui/material";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { getAllInitiatives } from "../apis/initiatives-handler";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(166, 233, 216)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "35px",
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(223, 183, 235)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "35px",
}));

function Announcements() {
  const [data, setData] = useState([]);
  const getData = () => {
    getAllInitiatives()
      .then(function (response) {
        return response.data;
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="breadcrumb-containter">
        <NavLink to="/initiative" className="back-arrow">
          <ArrowBackIcon
            sx={{
              "&:hover": { color: "#906F9B" },
            }}
          />
        </NavLink>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Explore Page
          </Link>
          <Link underline="hover" color="inherit" href="/initiative">
            Initiative
          </Link>
          <Typography color="text.primary">Announcements</Typography>
        </Breadcrumbs>
      </div>
      <div className="page-wrapper flex-container">
        <div className="left-half">
          <Box sx={{ width: "100%" }}>
            <Stack spacing={2}>
              <Item>
                <div className="card-content">
                  <div className="card-icon">
                    <CampaignOutlinedIcon
                      fontSize="large"
                      style={{ color: "#709E93" }}
                    />
                  </div>
                  <div className="card-text">
                    <b>Card Title</b>
                    <p>Announcement description</p>
                  </div>
                </div>
              </Item>
              <Item>
                <div className="card-content">
                  <div className="card-icon">
                    <CampaignOutlinedIcon
                      fontSize="large"
                      style={{ color: "#709E93" }}
                    />
                  </div>
                  <div className="card-text">
                    <b>Card Title</b>
                    <p>Announcement description</p>
                  </div>
                </div>
              </Item>
              <Item>
                <div className="card-content">
                  <div className="card-icon">
                    <CampaignOutlinedIcon
                      fontSize="large"
                      style={{ color: "#709E93" }}
                    />
                  </div>
                  <div className="card-text">
                    <b>Card Title</b>
                    <p>Announcement description</p>
                  </div>
                </div>
              </Item>
            </Stack>
          </Box>
        </div>
        <div className="right-half">
          <Box sx={{ width: "100%" }}>
            <Stack spacing={2}>
              <Item>
                <div className="card-content">
                  <div className="card-icon">
                    <CampaignOutlinedIcon
                      fontSize="large"
                      style={{ color: "#709E93" }}
                    />
                  </div>
                  <div className="card-text">
                    <b>Card Title</b>
                    <p>Announcement description</p>
                  </div>
                </div>
              </Item>
              <Item>
                <div className="card-content">
                  <div className="card-icon">
                    <CampaignOutlinedIcon
                      fontSize="large"
                      style={{ color: "#709E93" }}
                    />
                  </div>
                  <div className="card-text">
                    <b>Card Title</b>
                    <p>Announcement description</p>
                  </div>
                </div>
              </Item>
              <Item>
                <div className="card-content">
                  <div className="card-icon">
                    <CampaignOutlinedIcon
                      fontSize="large"
                      style={{ color: "#709E93" }}
                    />
                  </div>
                  <div className="card-text">
                    <b>Card Title</b>
                    <p>Announcement description</p>
                  </div>
                </div>
              </Item>
            </Stack>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
