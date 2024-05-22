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
  Paper,
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
const Brand = ({ data }) => {
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
              <Box>
                <BrandCard data={data} />
              </Box>
            {/* <CustomTabPanel value={value} index={1}>
              <Box>
                <BrandCard />
              </Box>
            </CustomTabPanel> */}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={isMobile ? 3 : 0} sx={{ height: "100%" }}>
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
                      style={{
                        color: "darkgoldenrod",
                        height: 25,
                        width: 25,
                        marginRight: 5,
                      }}
                      src="/Vector (1).png"
                      alt=""
                    />
                    <Typography
                      variant={isMobile ? "body1" : "h6"}
                      sx={{ fontWeight: "600", color: "#BA9775" }}
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
                      style={{
                        color: "darkgoldenrod",
                        height: 25,
                        width: 25,
                        marginRight: 5,
                      }}
                      src="/Vector (1).png"
                      alt=""
                    />
                    <Typography
                      variant={isMobile ? "body1" : "h6"}
                      sx={{ fontWeight: "600", color: "#BA9775" }}
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
                      sx={{ fontWeight: "600", color: "#BA9775" }}
                    >
                      View Posting
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* Favourite Brands */}
              <Box
                mt={2}
                sx={{ backgroundColor: "#333" }}
                width={isMobile ? 270 : 500}
                borderRadius={2}
                p={1}
              >
                <Box p={3}>
                  <Typography
                    variant="h5"
                    color={"white"}
                    fontWeight={500}
                    gutterBottom
                  >
                    FAVORITE BRANDS
                  </Typography>
                  <Box
                    mt={2}
                    gap={0}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Box
                      width="33%"
                      height={40}
                      display={"flex"}
                      justifyContent={"center"}
                      px={isMobile ? 2 : 3}
                      py={isMobile ? 3 : 3}
                      borderRadius={4}
                      sx={{ backgroundColor: "#444" }}
                    >
                      <img
                        src="/bowmore-logo-white 2.png"
                        alt=""
                        width={isMobile ? 100 : 140}
                        // height={isMobile ? 20 : 30}
                      />
                    </Box>
                    <Box
                      width="33%"
                      height={40}
                      display={"flex"}
                      justifyContent={"center"}
                      px={isMobile ? 2 : 3}
                      py={isMobile ? 3 : 3}
                      borderRadius={4}
                      sx={{ backgroundColor: "#BA9775" }}
                    >
                      <Typography
                        textAlign={"center"}
                        color={"white"}
                        variant={isMobile ? "body1" : "h6"}
                      >
                        Explore Brand{" "}
                      </Typography>
                    </Box>
                  </Box>
                  <Box mt={2}>
                    <Typography variant="h7" color={"#999"}>
                      ABOUT
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color={"white"}>
                      Found in 1911, lorem ipsum this cognac has a very pleasant
                      golden tint and the aromatics show classic scents of
                      baked, white grapes, hard lemon candy, and opulent French
                      oak.{" "}
                    </Typography>
                  </Box>
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
