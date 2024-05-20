"use client";
import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Grid,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Button,
  Box,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import BrandCard from "./BrandCard";

function Label({ name }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Cormorant Infant",
          color: "white",
          fontSize: 20,
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
const Brand = ({data}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const router = useRouter();


  const handleReleaseDetailsPage = () => {
    router.push("/release/details");
  };

  const theme = createTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid p={isMobile ? 2 : 0} item xs={12} md={6}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  "& .MuiTabs-indicator": {
                    color: "#000",
                    backgroundColor: "white",
                  },
                }}
              >
                <Tab label={<Label name={"BRANDS"} />} {...a11yProps(0)} />
                <Tab label={<Label name={"AMBASSADOR"} />} {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Box>
                <BrandCard data={data} />
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Box>
                <BrandCard />
              </Box>
            </CustomTabPanel>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={isMobile ? 3 : 6} sx={{ height: "100%" }}>
              <Box
                sx={{ backgroundColor: "#333" }}
                width={isMobile ? 270 : 500}
                borderRadius={2}
                p={3}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  gutterBottom
                  color={"white"}
                >
                  POLLS
                </Typography>
                <Typography variant="body1" color={"#999"} gutterBottom>
                  Which of proposed products you would prefer?
                </Typography>
                <Box>
                  <FormControlLabel
                    control={<Radio />}
                    label="{Product A}"
                    labelPlacement="end"
                    sx={{ color: "#6D8190" }}
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="{Product B}"
                    labelPlacement="end"
                    sx={{ color: "#6D8190" }}
                  />
                </Box>
                <Box color={"white"}>
                  <FormControlLabel
                    control={<Radio />}
                    label="{Product C}"
                    labelPlacement="end"
                    sx={{ color: "#6D8190" }}
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="{Product D}"
                    labelPlacement="end"
                    sx={{ color: "#6D8190" }}
                  />
                </Box>
              </Box>
              <Box
                mt={2}
                sx={{ backgroundColor: "#333" }}
                width={isMobile ? 270 : 500}
                borderRadius={2}
                p={3}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  gutterBottom
                  color={"white"}
                >
                  3 NOTIFICATIONS
                </Typography>
                <Typography variant="body1" gutterBottom color={"white"}>
                  Subscription renewal required
                </Typography>
                <Box mt={2} display={"flex"} justifyContent={"space-between"}>
                  <Box>
                    <img src="/Group 427319128.png" alt="" />
                    <img
                      style={{ marginLeft: "10px" }}
                      src="/Group.png"
                      alt=""
                    />
                  </Box>
                  <Box gap={1} display={"flex"} justifyContent={"center"}>
                    <img
                      style={{ color: "darkgoldenrod" }}
                      src="/Vector (1).png"
                      alt=""
                    />
                    <Typography
                      variant={isMobile ? "body1" : "h6"}
                      sx={{ fontWeight: "600", color: "goldenrod" }}
                    >
                      Renew
                    </Typography>
                  </Box>
                </Box>
                <Box mt={2} display={"flex"} justifyContent={"space-between"}>
                  <Box>
                    <img src="/Group 427319128.png" alt="" />
                    <img
                      style={{ marginLeft: "6px" }}
                      src="/Mask group.png"
                      alt=""
                    />
                  </Box>
                  <Box gap={1} display={"flex"} justifyContent={"center"}>
                    <img
                      style={{ color: "darkgoldenrod" }}
                      src="/Vector (1).png"
                      alt=""
                    />
                    <Typography
                      variant={isMobile ? "body1" : "h6"}
                      sx={{ fontWeight: "600", color: "goldenrod" }}
                    >
                      Renew
                    </Typography>
                  </Box>
                </Box>
                <Box mt={2} display={"flex"} justifyContent={"space-between"}>
                  <Box display={"flex"}>
                    <img src="/Group 427319180.png" alt="" />
                    <Typography
                      ml={1}
                      variant={isMobile ? "body1" : "h6"}
                      color={"white"}
                    >
                      You review was published
                    </Typography>
                  </Box>
                  <Box gap={1} display={"flex"} justifyContent={"center"}>
                    <Typography
                      variant={isMobile ? "body1" : "h6"}
                      sx={{ fontWeight: "600", color: "goldenrod" }}
                    >
                      View Posting
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                mt={2}
                sx={{ backgroundColor: "#333" }}
                width={isMobile ? 270 : 500}
                borderRadius={2}
                p={3}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  gutterBottom
                  color={"white"}
                >
                  FAVORITE BRANDS
                </Typography>
                <Box display={"flex"} justifyContent={"space-between"} mt={2}>
                  <Typography
                    variant={isMobile ? "body1" : "h5"}
                    color={"#999"}
                  >
                    Sherry oak 25 years old, 2018 release
                  </Typography>
                  <Button sx={{ fontWeight: "600", color: "goldenrod" }}>
                    View
                  </Button>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} mt={2}>
                  <Typography
                    variant={isMobile ? "body1" : "h5"}
                    color={"#999"}
                  >
                    Sherry oak 25 years old, 2018 release
                  </Typography>
                  <Button sx={{ fontWeight: "600", color: "goldenrod" }}>
                    View
                  </Button>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} mt={2}>
                  <Typography
                    variant={isMobile ? "body1" : "h5"}
                    color={"#999"}
                  >
                    Sherry oak 25 years old, 2018 release
                  </Typography>
                  <Button sx={{ fontWeight: "600", color: "goldenrod" }}>
                    View
                  </Button>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} mt={2}>
                  <Typography
                    variant={isMobile ? "body1" : "h5"}
                    color={"#999"}
                  >
                    Sherry oak 25 years old, 2018 release
                  </Typography>
                  <Button sx={{ fontWeight: "600", color: "goldenrod" }}>
                    View
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Brand;
