"use client";
import React, { useState, useEffect, Suspense } from "react";
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
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const array = [
  {
    id: 1,
    image: "/Rectangle 24.jpg",
    title: "Sherry oak 25 years old, 2018 release",
    name: "The Macallan",
    volume: "Abv : 43% | Volume : 750ml",
    rating: "5.0 Rating • 753 Reviews",
  },
  {
    id: 2,
    image: "/Rectangle 36.png",
    title: "Sherry oak 25 years old, 2018 release",
    name: "The Macallan",
    volume: "Abv : 43% | Volume : 750ml",
    rating: "5.0 Rating • 753 Reviews",
  },
  {
    id: 3,
    image: "/Group 102.png",
    title: "Sherry oak 25 years old, 2018 release",
    name: "The Macallan",
    volume: "Abv : 43% | Volume : 750ml",
    rating: "5.0 Rating • 753 Reviews",
  },
];

const Page = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(null);
  const [releaseData, setReleaseData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleReleaseDetailsPage = () => {
    router.push("/B2C/release/details");
  };

  // const handleCardClick = (item) => {
  //   setSelectedItem(item);
  //   console.log(item);
  //   const queryString = `/brands/details/?title=${encodeURIComponent(
  //     item.title
  //   )}&image=${encodeURIComponent(item.image)}`;
  //   router.push(queryString);
  // };

  const theme = createTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid p={isMobile ? 2 : 0} item xs={12} md={6}>
            <Box
              mt={isMobile ? 2 : 6}
              borderRadius={2}
              ml={isMobile ? 0 : 2.7}
              p={isMobile ? 0 : 5}
              height={isMobile ? "100%" : "88%"}
              sx={{ backgroundColor: "#111" }}
            >
              <Typography
                variant="h4"
                p={isMobile ? 1.1 : 0}
                fontWeight={700}
                color={"#FFF"}
                gutterBottom
                borderBottom={"2px solid white"}
              >
                RELEASES
              </Typography>
              <Box
                display={"flex"}
                mt={3}
                flexWrap={isMobile ? "wrap" : "nowrap"}
                justifyContent={isMobile ? "flex-start" : "space-between"}
                gap={isMobile ? 1 : 0}
                ml={isMobile ? 2 : 0}
              >
                <Typography
                  variant="body1"
                  border={"1px solid #999"}
                  color={"#FFF"}
                  borderRadius={10}
                  py={isMobile ? 0.7 : 1.3}
                  px={isMobile ? 1.2 : 2}
                >
                  All
                </Typography>
                <Typography
                  variant="body1"
                  border={"1px solid #999"}
                  color={"#FFF"}
                  borderRadius={10}
                  py={isMobile ? 0.7 : 1.3}
                  px={isMobile ? 1.2 : 2}
                >
                  Top
                </Typography>
                <Typography
                  variant="body1"
                  border={"1px solid #999"}
                  color={"#FFF"}
                  borderRadius={10}
                  py={isMobile ? 0.7 : 1.3}
                  px={isMobile ? 1.2 : 2}
                >
                  Favorite
                </Typography>
                <Typography
                  variant="body1"
                  border={"1px solid #999"}
                  color={"#FFF"}
                  borderRadius={10}
                  py={isMobile ? 0.7 : 1.3}
                  px={isMobile ? 1.2 : 2}
                >
                  Recommended
                </Typography>
                <Typography
                  variant="body1"
                  border={"1px solid #999"}
                  color={"#FFF"}
                  borderRadius={10}
                  py={isMobile ? 0.7 : 1.3}
                  px={isMobile ? 1.2 : 2}
                >
                  New Release
                </Typography>
                <Typography
                  variant="body1"
                  border={"1px solid #999"}
                  color={"#FFF"}
                  borderRadius={10}
                  py={isMobile ? 0.7 : 1.3}
                  px={isMobile ? 1.2 : 2}
                >
                  Tasted
                </Typography>
              </Box>
              <Box mt={1} p={2}>
                <Grid container spacing={isMobile ? 2 : 4}>
                  {releaseData.map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <Card
                        sx={{
                          display: "flex",
                          flexDirection: isMobile ? "column" : "row",
                          justifyContent: "space-between",
                          maxWidth: isMobile ? 320 : 630,
                          borderRadius: "10px",
                          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                          cursor: "pointer",
                          border: "2px solid white",
                          backgroundColor: "black",
                          color: "white",
                        }}
                      >
                        <CardMedia
                          sx={{ height: "auto", width: isMobile ? 341.5 : 237 }}
                          component="img"
                          image={item.image}
                          alt={item.title}
                        />
                        <CardContent
                          sx={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography
                            fontWeight={600}
                            gutterBottom
                            variant="h6"
                            component="div"
                          >
                            {array[0].title}
                          </Typography>
                          <Typography
                            fontWeight={600}
                            gutterBottom
                            variant="body1"
                            component="div"
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body1"
                            component="div"
                            color={"#999"}
                          >
                            {array[0].volume}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body1"
                            component="div"
                            color={"#BA9775"}
                          >
                            <b>{array[0].rating}</b>
                          </Typography>
                          <Button
                            // onClick={() => handleCardClick(item)}
                            onClick={handleReleaseDetailsPage}
                            variant="contained"
                            sx={{
                              backgroundColor: "#BA9775",
                              borderRadius: "none",
                              color: "white",
                              position: "relative",
                              top: "10px",
                              left: isMobile ? "38%" : "42%",
                              width: "fit-content",
                              fontWeight: "600",
                            }}
                          >
                            Explore more <ArrowRightAltIcon />
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={isMobile ? 3 : 6} sx={{ height: "100%" }}>
              <Box
                sx={{ backgroundColor: "#333", color: "#FFF" }}
                width={isMobile ? 270 : 500}
                borderRadius={2}
                p={3}
              >
                <Typography variant="h5" fontWeight={700} gutterBottom>
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
                    color="red"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="{Product B}"
                    labelPlacement="end"
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={<Radio />}
                    label="{Product C}"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="{Product D}"
                    labelPlacement="end"
                  />
                </Box>
              </Box>
              <Box
                mt={2}
                sx={{ backgroundColor: "#333", color: "#FFF" }}
                width={isMobile ? 270 : 500}
                borderRadius={2}
                p={3}
              >
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  3 NOTIFICATIONS
                </Typography>
                <Typography variant="body1" color={"#999"} gutterBottom>
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
                        height: 30,
                        width: 30,
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
                        height: 30,
                        width: 30,
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
                    <Typography ml={1} variant={isMobile ? "body1" : "h6"}>
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
                sx={{ backgroundColor: "#333", color: "#FFF" }}
                width={isMobile ? 270 : 500}
                borderRadius={2}
                p={3}
              >
                <Typography variant="h5" fontWeight={700} gutterBottom>
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
    </Suspense>
  );
};

export default Page;
