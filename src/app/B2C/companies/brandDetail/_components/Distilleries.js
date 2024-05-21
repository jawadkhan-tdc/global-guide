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

import MerchantCard from "./MerchantCard";
import DistelleryCard from "./DistilleryCard";

const Distelleries = ({ data, loading }) => {
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
            <DistelleryCard data={data} loading={loading} />
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
                        width: 25,
                        height: 25,
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
                        width: 25,
                        height: 25,
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
                  <Button sx={{ fontWeight: "600", color: "#BA9775" }}>
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
                  <Button sx={{ fontWeight: "600", color: "#BA9775" }}>
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
                  <Button sx={{ fontWeight: "600", color: "#BA9775" }}>
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
                  <Button sx={{ fontWeight: "600", color: "#BA9775" }}>
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

export default Distelleries;
