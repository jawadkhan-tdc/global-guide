"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import "aos/dist/aos.css";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Body5() {
  const [value, setValue] = React.useState(4);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundImage: "url('/Pattern.png')" }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" color={"#BA9775"} textAlign={"center"} sx = {{mt :5}}>
          BRANDS
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="standard"
            sx={{
              "& .MuiTabs-flexContainer": {
                justifyContent: "space-evenly",
                pt: "30px",
                flexWrap: { xs: "wrap", lg: "nowrap" },
              },
              "& .MuiTabs-flexContainer > :nth-of-type(3)": {
                order: { xs: "1", lg: "0" },
                flexGrow: { xs: "1", lg: "0" },
                width: { xs: "100%", lg: "auto" },
              },
              "& .MuiTab-label": {
                color: "#000",
                textTransform: "none",
              },
              "& .Mui-selected": {
                color: "#000",
              },
              "& .MuiTabs-indicator": {
                color: "#000",
                backgroundColor: "white",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#000",
              },
              "& .MuiTab-root.Mui-selected .MuiTab-wrapper": {
                color: "#000",
              },
            }}
          >
            <Tab
              sx={{
                textTransform: "none",
                fontSize: "18px",
                color: "#000",
                marginBottom: "12px",
              }}
              data-aos="fade-up"
              data-aos-duration="300"
              icon={
                <Image
                  src="/tab1.png"
                  alt="Highland Park"
                  width={100}
                  height={100}
                />
              }
              {...a11yProps(0)}
            />
            <Tab
              {...a11yProps(1)}
              sx={{
                marginBottom: "12px",
              }}
              data-aos="fade-up"
              data-aos-duration="300"
              icon={
                <Image
                  src="/tab1.png"
                  alt="Highland Park"
                  width={100}
                  height={100}
                />
              }
            />
            <Tab
              sx={{
                textTransform: "none",
                fontSize: "18px",
                color: "#000",
                marginBottom: "12px",
              }}
              data-aos="fade-up"
              data-aos-duration="300"
              icon={
                <Image
                  src="/tab2.png"
                  alt="Highland Park"
                  width={100}
                  height={100}
                />
              }
              {...a11yProps(2)}
            />
            <Tab
              sx={{
                textTransform: "none",
                fontSize: "18px",
                backgroundImage: "url('/8+.png')",
                color: "#000",
                marginBottom: "12px",
              }}
              data-aos="fade-up"
              data-aos-duration="300"
              icon={
                <Image
                  src="/tab3.png"
                  alt="Highland Park"
                  width={130}
                  height={80}
                />
              }
              {...a11yProps(3)}
            />
            <Tab
              sx={{
                textTransform: "none",
                fontSize: "18px",
                color: "#000",
                marginBottom: "12px",
              }}
              data-aos="fade-up"
              data-aos-duration="300"
              icon={
                <Image
                  src="/tab4.png"
                  alt="Highland Park"
                  width={150}
                  height={40}
                />
              }
              {...a11yProps(4)}
            />
            <Tab
              sx={{
                textTransform: "none",
                fontSize: "18px",
                color: "#000",
                marginBottom: "12px",
              }}
              data-aos="fade-up"
              data-aos-duration="300"
              icon={
                <Image
                  src="/tab5.png"
                  alt="Highland Park"
                  width={150}
                  height={70}
                />
              }
              {...a11yProps(5)}
            />
            <Tab
              sx={{
                textTransform: "none",
                fontSize: "18px",
                color: "#000",
                marginBottom: "12px",
              }}
              data-aos="fade-up"
              data-aos-duration="300"
              icon={
                <Image
                  src="/tab5.png"
                  alt="Highland Park"
                  width={150}
                  height={70}
                />
              }
              {...a11yProps(6)}
            />
          </Tabs>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <CustomTabPanel value={value} index={4}>
          <SwipeableTextMobileStepper />
        </CustomTabPanel>
      </Grid>
    </Grid>
  );
}
