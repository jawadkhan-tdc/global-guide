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
import Navbar from "@/components/Navbar";
import { toast } from 'react-toastify'; // Assuming toast is being used for notifications
import api from "lib/services/api";

const Page = () => {
  const [releaseData, setReleaseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [name, setName] = useState("");
  const [brandId, setBrandId] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const dataParam = queryParams.get("data");

    if (dataParam) {
      const decodedData = decodeURIComponent(dataParam);
      const parsedData = JSON.parse(decodedData);
      console.log(parsedData)
      setReleaseData(parsedData);
      setLoading(false);
    }
  }, []);

  const handleClickOpen = (data) => {
    setSelectedData(data);
    setName(data.name);
    setBrandId(data.brandId);
    setImage(data.image);
    setOpen(true);
  };

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
      toast.success("Service updated successfully!");

      // Update local state with new data
      setReleaseData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, ...updatedData } : item
        )
      );
      
      handleClose();
    } catch (error) {
      console.error("Error updating service:", error);
      toast.error("An error occurred while updating the service.");
    }
  };

  return (
    <Box>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid p={isMobile ? 2 : 0} item xs={12} md={6}>
            <Box>
              {loading ? (
                <Typography>Loading...</Typography>
              ) : (
                <Box>
                  {releaseData.map((brandDetails) => (
                    <Card
                      key={brandDetails.id}
                      sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        backgroundColor: "black",
                        mt: 2,
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: isMobile ? "100%" : 200,
                          height: isMobile ? "auto" : 204,
                        }}
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
                        <CardContent
                          sx={{
                            flex: "1 0 auto",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "space-between",
                          }}
                        >
                          <Typography
                            component="div"
                            variant="h4"
                            fontFamily={"Inter"}
                            color={"white"}
                          >
                            {brandDetails.name}
                          </Typography>
                          <Typography
                            component="div"
                            variant="h6"
                            fontFamily={"Inter"}
                            color={"white"}
                          >
                            The Macallan
                          </Typography>
                          <Typography
                            component="div"
                            variant="h6"
                            fontFamily={"Inter"}
                            color={"#111921"}
                          >
                            Abv: 43% | Volume: 750ml
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Typography color={"white"}>
                              5.0 Rating .
                            </Typography>
                            <Typography color={"#BA9775"}>
                              753 Reviews
                            </Typography>
                          </Box>

                          <Box display={"flex"} justifyContent={"flex-end"}>
                            <Button
                              sx={{
                                backgroundColor: "goldenrod",
                                color: "white",
                                mt: 1,
                                alignSelf: isMobile ? "center" : "flex-end",
                                fontWeight: "600",
                              }}
                              onClick={() => handleClickOpen(brandDetails)}
                            >
                              Edit
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
            <Box p={isMobile ? 3 : 6} sx={{ height: "100%" }}>
              {/* Polls and Notifications components */}
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
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
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
            <Button onClick={() => handleSubmit(selectedData.id)}>Save</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Page;