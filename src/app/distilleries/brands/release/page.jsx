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
} from "@mui/material";
import ReleaseModalForm from "./_components/ReleaseModalForm";
import ReleaseCard from "./_components/ReleaseCard";

const Page = () => {
  const [openModal, setOpenModal] = useState(false); // State

  const theme = createTheme(); // Create a theme instance
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (typeof window !== "undefined") {
    const distelleryBrandReleaseData = JSON.parse(
      localStorage.getItem("distelleryBrandReleaseData")
    );
    const dataArray = [];
    if (distelleryBrandReleaseData) {
      // add id's to both distellerybrand and release Data
      // distelleryData.distelleryId = dataArray.length;
      // BrandData.brandId = distelleryData.distelleryId;

      // add image to both distellerybrand and release Data
      distelleryBrandReleaseData.distelleryBrandReleaseImg =
        "/Rectangle 24.jpg";

      // push release data in array
      dataArray.push(distelleryBrandReleaseData);
    }
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
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
        {dataArray.length === 0 && (
          <Box ml={5}>
            <Typography
              variant="p"
              textTransform="uppercase"
              mr={isMobile ? 5 : 0}
            >
              No Releases to show
            </Typography>
          </Box>
        )}

        <Box mr={isMobile ? 0 : 5}>
          <Button
            onClick={handleOpenModal}
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "600",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "#999",
              },
            }}
          >
            Add Releases
          </Button>
        </Box>
      </Box>

      {/* Cards */}
      <Box>
        <ReleaseCard dataArray={dataArray} isMobile={isMobile} />
      </Box>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          maxWidth={isMobile ? 300 : 500}
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
          {/* Release Modal Form Component */}
          <ReleaseModalForm
            handleCloseModal={handleCloseModal}
            isMobile={isMobile}
          />
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default Page;
