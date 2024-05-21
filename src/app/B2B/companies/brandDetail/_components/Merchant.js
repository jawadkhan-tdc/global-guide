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
} from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Merchant = ({ data }) => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(null);

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
    {
      id: 4,
      image: "/Rectangle 24.jpg",
      title: "Sherry oak 25 years old, 2018 release",
      name: "The Macallan",
      volume: "Abv : 43% | Volume : 750ml",
      rating: "5.0 Rating • 753 Reviews",
    },
    {
      id: 5,
      image: "/Rectangle 36.png",
      title: "Sherry oak 25 years old, 2018 release",
      name: "The Macallan",
      volume: "Abv : 43% | Volume : 750ml",
      rating: "5.0 Rating • 753 Reviews",
    },
    {
      id: 6,
      image: "/Group 102.png",
      title: "Sherry oak 25 years old, 2018 release",
      name: "The Macallan",
      volume: "Abv : 43% | Volume : 750ml",
      rating: "5.0 Rating • 753 Reviews",
    },
  ];

  const handleMerchant = (data) => {
    router.push(`/B2B/brands?data=${encodeURIComponent(JSON.stringify(data))}`);
  };

  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={isMobile ? 2 : 0}>
        <Grid p={isMobile ? 2 : 0} item xs={12} md={12}>
          <Box
            mt={isMobile ? 2 : 2}
            borderRadius={2}
            ml={isMobile ? 0 : 2.7}
            px={isMobile ? 0 : 3}
            height={isMobile ? "100%" : "88%"}
            sx={{ backgroundColor: "#111" }}
          >
            <Box
              p={2}
              borderBottom={"2px solid white"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Box
                gap={isMobile ? 0 : 4}
                color={"grey"}
                display={"flex"}
                flexDirection={isMobile ? "column" : "row"}
              >
                <Typography
                  variant={isMobile ? "body1" : "h5"}
                  p={isMobile ? 1.1 : 0}
                  fontWeight={400}
                  gutterBottom
                  color={"white"}
                >
                  Distilleries
                </Typography>
                <Typography
                  variant={isMobile ? "body1" : "h5"}
                  p={isMobile ? 1.1 : 0}
                  fontWeight={400}
                  gutterBottom
                >
                  DRAFTS
                </Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={isMobile ? "column" : "row"}
                gap={isMobile ? 3 : 5}
                justifyContent={isMobile ? "start" : "space-between"}
              >
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid #BA9775",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: "700",
                  }}
                >
                  Add using template
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#BA9775",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: "700",
                    "&:hover": {
                      backgroundColor: "#D8B593",
                      color: "white",
                    },
                  }}
                >
                  Add Distilleries
                </Button>
              </Box>
            </Box>
            <Box mt={1} p={2}>
              <Grid container spacing={isMobile ? 2 : 4}>
                {data.merchants.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent:
                        index % 2 === 0 ? "flex-end" : "flex-start",
                    }}
                  >
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        maxWidth: isMobile ? 320 : 640,
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
                        alt={item.name}
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
                          {item.name}
                        </Typography>
                        <Typography
                          color={"gray"}
                          gutterBottom
                          variant="body1"
                          component="div"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="div"
                          color={"white"}
                        >
                          5 releases
                        </Typography>

                        <Button
                          onClick={() => handleMerchant(item.brands)}
                          sx={{
                            color: "white",
                            position: "relative",
                            top: "10px",
                            width: "fit-content",
                            fontWeight: "600",
                            color: "#BA9775",
                            marginLeft: isMobile ? "30%" : "30%",
                            fontSize: "18px",
                            "&:hover": {
                              backgroundColor: "#BA9775",
                              color: "white",
                            },
                          }}
                        >
                          View Details <ArrowRightAltIcon />
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={isMobile ? 2 : 0}>
        <Grid p={isMobile ? 2 : 0} item xs={12} md={12}>
          <Box
            mt={isMobile ? 2 : 0}
            borderRadius={2}
            ml={isMobile ? 0 : 2.7}
            p={isMobile ? 0 : 5}
            height={isMobile ? "100%" : "88%"}
            sx={{ backgroundColor: "#111" }}
          >
            <Box
              borderBottom={"2px solid white"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Box
                gap={isMobile ? 0 : 0}
                color={"grey"}
                display={"flex"}
                flexDirection={isMobile ? "column" : "row"}
              >
                <Typography
                  variant={isMobile ? "body1" : "h5"}
                  p={isMobile ? 1.1 : 0}
                  fontWeight={400}
                  gutterBottom
                  color={"white"}
                >
                  Check Other Distilleries
                </Typography>
              </Box>
            </Box>
            <Box p={2}>
              <Grid container spacing={isMobile ? 2 : 4}>
                {array.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent:
                        index % 2 === 0 ? "flex-end" : "flex-start",
                    }}
                  >
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        maxWidth: isMobile ? 320 : 620,
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
                          {item.name}
                        </Typography>
                        <Typography
                          color={"gray"}
                          gutterBottom
                          variant="body1"
                          component="div"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="div"
                          color={"white"}
                        >
                          5 releases
                        </Typography>

                        <Button
                          sx={{
                            color: "white",
                            position: "relative",
                            top: "10px",
                            width: "fit-content",
                            fontWeight: "600",
                            color: "#BA9775",
                            marginLeft: isMobile ? "30%" : "30%",
                            fontSize: "18px",
                            "&:hover": {
                              backgroundColor: "#BA9775",
                              color: "white",
                            },
                          }}
                        >
                          View Details <ArrowRightAltIcon />
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Merchant;
