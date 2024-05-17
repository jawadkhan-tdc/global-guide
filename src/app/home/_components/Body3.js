import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Body3 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        backgroundImage: "url('/Pattern.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={12} md={5} lg={4}>
          <Box sx={{ width: { xs: "90%", sm: "80%", md: "70%" }, p: { xs: 2, sm: 4, md: 8 }, mt : { xs: 5, sm: 4, md: 2 },  mb : { sm: 4, md: 10 }}}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Image src="/8.png" width={40} height={40} alt="Countries Icon" />
              <Typography
                ml={2}
                sx={{
                  fontFamily: "Cormorant Infant",
                  fontSize: { xs: "24px", sm: "28px", md: "32px" },
                  fontWeight: 400,
                  color: "#BA9775",
                }}
              >
                COUNTRIES
              </Typography>
            </Box>
            <Typography sx={{ fontSize: { xs: "14px", sm: "18px", md: "18px" }, color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Box gap={2} sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Image src="/button.png" width={50} height={50} alt="Explore Button" />
              <Typography sx={{ fontSize: { xs: "14px", sm: "15px", md: "16px" }, color: "white" }}>
                Explore more
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          lg={8}
          sx={{
            backgroundImage: "url('/World Map.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        />
      </Grid>
    </Box>
  );
};

export default Body3;
