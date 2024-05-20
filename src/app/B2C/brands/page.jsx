"use client";
import React, { useState, useEffect } from "react";
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
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Navbar from "@/components/Navbar";
import Navbar1 from "@/components/Navbar1";

const Page = () => {
  const router = useRouter();
  const [releaseData, setReleaseData] = useState([]);
  const [loading,setLoading] = useState(true);

  const handleRelease = (data) => {
    router.push(`/B2C/release?data=${encodeURIComponent(JSON.stringify(data))}`);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const dataParam = queryParams.get("data");

    if (dataParam) {
      const decodedData = decodeURIComponent(dataParam);
      const parsedData = JSON.parse(decodedData);
      setReleaseData(parsedData);
      setLoading(false)
    }
  }, []);

  const theme = createTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid p={isMobile ? 2 : 0} item xs={12} md={6}>
            <Box>{loading ? (
        <Typography>loading</Typography>
      ) : (
        <Box>
          {releaseData.map((brandDetails) => {
            return (
              <Card sx={{ display: "flex", backgroundColor: "black", mt: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151, height: 150 }}
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
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5" color={"white"}>
                      {brandDetails.name}
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        variant="subtitle1"
                        component="div"
                        color={"white"}
                      >
                        {brandDetails.country}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        color={"white"}
                      >
                        Est. 1897
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        color={"white"}
                      >
                        5 Releases
                      </Typography>
                    </Box>
                    <Typography color={"white"}>attherate@gmail.com</Typography>
                    <Box>
                      <Button
                      onClick={()=>handleRelease(brandDetails.releases)}
                        variant="contained"
                        sx={{
                          backgroundColor: "goldenrod",
                          borderRadius: "none",
                          color: "white",
                          position: "relative",
                          top: "10px",
                          left: "70%",
                          width: "fit-content",
                          fontWeight: "600",
                        }}
                      >
                        Release
                      </Button>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            );
          })}
        </Box>
      )}</Box>
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

export default Page;
