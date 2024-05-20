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
} from "@mui/material";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";

const Page = () => {
  const router = useRouter();
  const [merchantData, setMerchantData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const dataParam = queryParams.get("data");

    if (dataParam) {
      const decodedData = decodeURIComponent(dataParam);
      const parsedData = JSON.parse(decodedData);
      console.log(parsedData)
      setMerchantData(parsedData);
      setLoading(false);
    }
  }, []);
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleRelease = (data) => {
    router.push(`/B2C/release?data=${encodeURIComponent(JSON.stringify(data))}`);
  };

  return (
    <Box>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid p={isMobile ? 2 : 0} item xs={12} md={6}>
            <Box>
              {loading ? (
                <Typography>Loading</Typography>
              ) : (
                <Box>
                  {merchantData.map((brandDetails) => (
                    <Card
                      key={brandDetails.id} // Add key prop to Card component
                      sx={{ display: "flex", backgroundColor: "black", mt: 2 }}
                    >
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
                          <Typography
                            component="div"
                            variant="h5"
                            color={"white"}
                          >
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
                          <Typography color={"white"}>
                            attherate@gmail.com
                          </Typography>
                          <Box>
                            <Button
                              onClick={() => handleRelease(brandDetails.releases)}
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
                              Releases
                            </Button>
                          </Box>
                        </CardContent>
                      </Box>
                    </Card>
                  ))}
                </Box>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Rest of your component */}
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Page;
