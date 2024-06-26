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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import CustomAutocomplete from "@/components/CustomAutocomplete";
import api from "lib/services/api";

const Page = () => {
  const router = useRouter();

  const [releaseData, setReleaseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [name, setName] = useState("");
  const [brandId, setBrandId] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const handleClickOpen = (data) => {
    setSelectedData(data);
    setName(data.name);
    setBrandId(data.brandId);
    setImage(data.image);
    setOpen(true);
  };

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
    {
      id: 7,
      image: "/Rectangle 24.jpg",
      title: "Sherry oak 25 years old, 2018 release",
      name: "The Macallan",
      volume: "Abv : 43% | Volume : 750ml",
      rating: "5.0 Rating • 753 Reviews",
    },
    {
      id: 8,
      image: "/Rectangle 36.png",
      title: "Sherry oak 25 years old, 2018 release",
      name: "The Macallan",
      volume: "Abv : 43% | Volume : 750ml",
      rating: "5.0 Rating • 753 Reviews",
    },
    {
      id: 9,
      image: "/Group 102.png",
      title: "Sherry oak 25 years old, 2018 release",
      name: "The Macallan",
      volume: "Abv : 43% | Volume : 750ml",
      rating: "5.0 Rating • 753 Reviews",
    },
    {
      id: 10,
      image: "/Rectangle 24.jpg",
      title: "Sherry oak 25 years old, 2018 release",
      name: "The Macallan",
      volume: "Abv : 43% | Volume : 750ml",
      rating: "5.0 Rating • 753 Reviews",
    },
    {
      id: 11,
      image: "/Rectangle 36.png",
      title: "Sherry oak 25 years old, 2018 release",
      name: "The Macallan",
      volume: "Abv : 43% | Volume : 750ml",
      rating: "5.0 Rating • 753 Reviews",
    },
    {
      id: 12,
      image: "/Group 102.png",
      title: "Sherry oak 25 years old, 2018 release",
      name: "The Macallan",
      volume: "Abv : 43% | Volume : 750ml",
      rating: "5.0 Rating • 753 Reviews",
    },
  ];

  const handleClose = () => {
    setOpen(false);
    setFile(null); // Reset file state
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handleSubmit = async (id) => {
    console.log("id is", id);
    try {
      let updatedImageUrl = image; // Default to existing image URL

      if (file) {
        const formData = new FormData();
        formData.append("image", file);
        const imageResponse = await api.post("image/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Image Upload Response:", imageResponse.data.url);
        updatedImageUrl = imageResponse.data.url;
      }

      const updatedData = {
        ...selectedData,
        name,
        brandId,
        image: updatedImageUrl,
      };

      const response = await api.put(`release/${id}`, updatedData);
      console.log("Service updated:", response.data);

      // Update local state with new data
      setReleaseData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, ...updatedData } : item
        )
      );

      handleClose();
    } catch (error) {
      console.error("Error updating service:", error);
    }
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
      <ThemeProvider theme={theme}>
        <Navbar />

        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid
            sx={{ height: "100%", backgroundColor: "#333" }}
            mt={4}
            p={isMobile ? 2 : 4}
            item
            xs={12}
            md={12}
          >
            <Box
              mt={isMobile ? 2 : 2}
              borderRadius={2}
              ml={isMobile ? 0 : 2.7}
              p={isMobile ? 0 : 0}
              px={isMobile ? 0 : 2}
              height={"100%"}
              // sx={{ backgroundColor: "#111" }}
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
                    RELEASES
                  </Typography>
                  <Typography
                    variant={isMobile ? "body1" : "h5"}
                    p={isMobile ? 1.1 : 0}
                    fontWeight={400}
                    gutterBottom
                  >
                    DRAFTS
                  </Typography>
                  <Typography
                    variant={isMobile ? "body1" : "h5"}
                    p={isMobile ? 1.1 : 0}
                    fontWeight={400}
                    gutterBottom
                  >
                    ARCHIEVED
                  </Typography>
                  <Typography
                    variant={isMobile ? "body1" : "h5"}
                    p={isMobile ? 1.1 : 0}
                    fontWeight={400}
                    gutterBottom
                  >
                    PENDING REVIEWS
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
                      "&:hover": {
                        border: "1px solid #BA9775",
                        backgroundColor: "#111",
                      },
                    }}
                  >
                    Importing Catalogue Data
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#BA9775",
                      color: "#fff",
                      textTransform: "none",
                      fontWeight: "700",
                      "&:hover": {
                        backgroundColor: "#BA9775",
                        color: "white",
                      },
                    }}
                  >
                    New Release
                  </Button>
                </Box>
              </Box>
              <Box>
                <Box
                  display="flex"
                  flexDirection={isMobile ? "column" : "row"}
                  justifyContent={isMobile ? "flex-start" : "space-between"}
                  // mx="auto"
                  width="100%"
                >
                  <Box
                    display="flex"
                    flexDirection={isMobile ? "column" : "row"}
                  >
                    {/* Filter */}
                    <CustomAutocomplete labelName="Filter" width={90} />
                    {/* Sort By */}
                    <CustomAutocomplete
                      labelName="Sort By: Newest/Recent/top Appreciated"
                      width={isMobile ? 250 : 350}
                    />
                  </Box>

                  <Box>
                    {/* Search */}
                    <CustomAutocomplete width={90} getSearchIcon={true} />
                  </Box>
                </Box>
                <Grid container spacing={isMobile ? 2 : 4}>
                  {releaseData.map((item, index) => (
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
                          >
                            <b>{array[0].rating}</b>
                          </Typography>
                          <Button
                            onClick={() => handleClickOpen(item)}
                            sx={{
                              color: "white",
                              position: "relative",
                              top: "10px",
                              width: "fit-content",
                              fontWeight: "600",
                              color: "#BA9775",
                              marginLeft: isMobile ? "35%" : "47%",
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
      {selectedData && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Release Details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To edit the brand details, please upload an image and update the
              name.
            </DialogContentText>
            <Box>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="picture-upload"
                type="file"
                onChange={handleFileUpload}
              />
              {image && (
                <Box>
                  <img
                    src={image}
                    alt="Uploaded"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              )}
              <Box mt={2}>
                <label htmlFor="picture-upload">
                  <Button variant="outlined" component="span" fullWidth>
                    {image ? "Change Image" : "Upload Image"}
                  </Button>
                </label>
              </Box>
            </Box>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                handleSubmit(selectedData.id);
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Page;
