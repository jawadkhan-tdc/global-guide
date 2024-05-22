"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Tabs,
  Tab,
  Button,
  Typography,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import EastIcon from "@mui/icons-material/East";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Navbar1 from "@/components/Navbar1";
import BrandCard from "../companies/brandDetail/_components/BrandCard";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import api from "lib/services/api";

const Image = dynamic(() => import("next/image"));

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

const Page = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [data, setData] = useState();
  const [releaseData, setReleaseData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/company/${id}`);
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleRelease = (data) => {
    router.push(
      `/B2B/release?data=${encodeURIComponent(JSON.stringify(data))}`
    );
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const dataParam = queryParams.get("data");

    if (dataParam) {
      const decodedData = decodeURIComponent(dataParam);
      const parsedData = JSON.parse(decodedData);
      setReleaseData(parsedData);
      setLoading(false);
    }
  }, []);

  const theme = createTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Grid container spacing={isMobile ? 2 : 4} mt={5}>
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
            {releaseData?.map((brandDetails) => {
              return (
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    backgroundColor: "black",
                    mt: 2,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleRelease(brandDetails.releases);
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: isMobile ? "auto" : 151, height: "auto" }}
                    image={brandDetails.image}
                    alt="Live from space album cover"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto", width: "auto" }}>
                      <Typography component="div" variant="h5" color={"white"}>
                        {brandDetails.name}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          component="div"
                          color={"#999"}
                        >
                          {brandDetails.country}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          color={"#999"}
                        >
                          Est. 1897
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          color={"#999"}
                        >
                          5 Releases
                        </Typography>
                      </Box>
                      <Typography color={"#999"}>
                        attherate@gmail.com
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box
                    width={isMobile ? "100%" : "30%"}
                    sx={{ backgroundColor: "#BA9775" }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    textAlign={"center"}
                    alignItems={"center"}
                  >
                    <LocalFireDepartmentIcon sx={{ color: "white" }} />
                    <Typography color={"white"}>Promoted Brand</Typography>
                  </Box>
                </Card>
              );
            })}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={isMobile ? 3 : 6} sx={{ height: "100%" }}>
              <Box
                sx={{ backgroundColor: "#333" }}
                width={isMobile ? 270 : 500}
                borderRadius={2}
                p={3}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                    color={"white"}
                  >
                    POLLS
                  </Typography>
                  <Button sx={{ color: "#BA9775" }}>
                    View All <EastIcon sx={{ color: "#BA9775" }} />{" "}
                  </Button>
                </Box>
                <Box
                  borderBottom={"1px solid white"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box gap={1} display={"flex"} flexDirection={"row"}>
                    <Image src="/Group1111.png" height={22} width={24} />
                    <Typography variant="body1" color={"grey"} gutterBottom>
                      What would you prefer?
                    </Typography>
                  </Box>
                  <Box>
                    <PlayArrowIcon sx={{ color: "#BA9775" }} />
                  </Box>
                </Box>
                <Box
                  mt={2}
                  borderBottom={"1px solid white"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box gap={1} display={"flex"} flexDirection={"row"}>
                    <Image src="/Group1111.png" height={22} width={24} />
                    <Typography variant="body1" color={"grey"} gutterBottom>
                      What is your favourite release?
                    </Typography>
                  </Box>
                  <Box>
                    <PlayArrowIcon sx={{ color: "#BA9775" }} />
                  </Box>
                </Box>
                <Box
                  mt={2}
                  borderBottom={"1px solid white"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box gap={1} display={"flex"} flexDirection={"row"}>
                    <Image src="/Group1111.png" height={22} width={24} />
                    <Typography variant="body1" color={"grey"} gutterBottom>
                      What is your favourite release?
                    </Typography>
                  </Box>
                  <Box>
                    <PlayArrowIcon sx={{ color: "#BA9775" }} />
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
                  3 NOTIFICATIONS
                </Typography>
                <Typography variant="body1" gutterBottom color={"white"}>
                  Subscription renewal required
                </Typography>
                <Box mt={2} display={"flex"} flexDirection={"column"}>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box textAlign={"center"}>
                      <Button sx={{ color: "#BA9775" }}>Complete </Button>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box gap={2} display={"flex"}>
                      <Image
                        src="/Group 427319128.png"
                        width={24}
                        height={24}
                      />
                      <Typography color={"white"}>
                        Promotion Payment Required
                      </Typography>
                    </Box>
                    <Box textAlign={"center"}>
                      <Button sx={{ color: "#BA9775" }}>
                        Complete <EastIcon sx={{ color: "#BA9775" }} />{" "}
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box gap={2} display={"flex"}>
                      <Image
                        src="/Group 427319128.png"
                        width={24}
                        height={24}
                      />
                      <Typography color={"white"}>
                        New Release Review Added
                      </Typography>
                    </Box>
                    <Box textAlign={"center"}>
                      <Button sx={{ color: "#BA9775" }}>View Posting</Button>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box gap={2} display={"flex"}>
                      <Image
                        src="/Group 427319128.png"
                        width={24}
                        height={24}
                      />
                      <Typography color={"white"}>
                        Release info required
                      </Typography>
                    </Box>
                    <Box textAlign={"center"}>
                      <Button sx={{ color: "#BA9775" }}>Add Details</Button>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box gap={2} display={"flex"}>
                      <Image
                        src="/Group 427319128.png"
                        width={24}
                        height={24}
                      />
                      <Typography color={"white"}>
                        You Release was published
                      </Typography>
                    </Box>
                    <Box textAlign={"center"}>
                      <Button sx={{ color: "#BA9775" }}>View Posting</Button>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box gap={2} display={"flex"}>
                      <Image
                        src="/Group 427319128.png"
                        width={24}
                        height={24}
                      />
                      <Typography color={"white"}>
                        Distillery info required
                      </Typography>
                    </Box>
                    <Box textAlign={"center"}>
                      <Button sx={{ color: "#BA9775" }}>Add Details</Button>
                    </Box>
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
                <Box
                  py={2}
                  alignItems={"center"}
                  gap={2}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Image src="/tab1.png" width={80} height={60} />
                  <Image src="/tab2.png" width={80} height={60} />
                  <Image src="/tab3.png" width={80} height={60} />
                  <Image src="/tab4.png" width={100} height={40} />
                  <Image src="/tab5.png" width={80} height={60} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Page;
