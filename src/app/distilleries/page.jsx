"use client";
import React, { useState } from "react";
import {
  Typography,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Button,
  Modal,
  Box,
  Paper,
  // Divider,
  // Autocomplete,
  // TextField
} from "@mui/material";
import DistelleryModalForm from "./_component/DistelleryModalForm";
// import DistelleryCard from "./_component/DistelleryCard";
// import Heading from "@/components/Heading";
// import CustomSelect from "@/components/CustomSelect";
// import CustomAutocomplete from "@/components/CustomAutocomplete";
import RightSection from "./_component/RightSection";
import LeftSection from "./_component/LeftSection";
import Navbar1 from "@/components/Navbar1";

const Page = () => {
  const [openModal, setOpenModal] = useState(false); // State

  const theme = createTheme(); // Create a theme instance
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let dataArray = [];
  if (typeof window !== "undefined") {
    const distelleryData = JSON.parse(localStorage.getItem("distelleryData"));
    const BrandData = JSON.parse(localStorage.getItem("brandData"));
    if (distelleryData && BrandData) {
      // add id's to both distellery and brand Data
      distelleryData.distelleryId = dataArray.length;
      BrandData.brandId = distelleryData.distelleryId;

      // add image to both distellery and brand Data
      distelleryData.distelleryImg = "/Rectangle 24.jpg";
      BrandData.brandImg = "/Rectangle 24.jpg";

      // add brand Data object as an array on Distellery Data
      distelleryData.brandData = [BrandData];
      dataArray.push(distelleryData);
    }
    console.log("darray", dataArray);
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box>
      <Navbar1 />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column-reverse" : "",
            gap: isMobile ? 3 : "",
            alignItems: "center",
            justifyContent:
              dataArray.length > 0
                ? isMobile
                  ? "end"
                  : "end"
                : isMobile
                ? ""
                : "space-between",
          }}
        >
          {/* If distilleries not found */}
          {/* {dataArray.length === 0 && (
          <Box ml={5}>
            <Typography variant="p" textTransform='uppercase' mr={isMobile ? 5 : 0}>No Distilleries to show</Typography>
          </Box>
        )} */}

          {/* <Box mr={isMobile ? 0 : 5} mt={3} mb={3}>
          <Button
            onClick={handleOpenModal}
            variant="contained"
            sx={{
              backgroundColor: '#fff',
              color: '#000',
              textTransform: 'capitalize',
              fontWeight: '600',
              borderRadius: 0,
              '&:hover': {
                backgroundColor: '#999',
              },
            }}
          >
            Add Distellery
          </Button>
        </Box> */}
        </Box>

        {/* Main Content */}
        <Box
          mx="auto"
          my="auto"
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            maxWidth: "80%",
            gap: 3,
          }}
        >
          <Box
            width={isMobile ? "100%" : "60%"}
            component={Paper}
            backgroundColor="#222"
            borderRadius={2}
          >
            <LeftSection dataArray={dataArray} isMobile={isMobile} />
          </Box>

          <Box width={isMobile ? "100%" : "40%"}>
            <RightSection isMobile={isMobile} />
          </Box>
        </Box>

        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            maxWidth={isMobile ? 300 : 600}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%", // Responsive width
              bgcolor: "black",
              boxShadow: 24,
              p: 4,
              border: "2px solid white",
            }}
          >
            {/* Distellery Modal Form Component */}
            <DistelleryModalForm
              handleCloseModal={handleCloseModal}
              isMobile={isMobile}
            />
          </Box>
        </Modal>
      </ThemeProvider>
    </Box>
  );
};

export default Page;
