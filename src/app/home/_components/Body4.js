import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Body4 = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={12} md={5} lg={4}>
          <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%" }, p: { xs: 2, sm: 4, md: 6 },mt : { xs: 5, sm: 4, md: 2 },  mb : { md: 10 } }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image src="/2M+.png" width={70} height={40} alt="2M+ Icon" />
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
            <Typography sx={{ fontSize: { xs: "14px", sm: "15px", md: "16px" }, color: "white", mt : { xs: 4, sm: 3, md: 2 },  }}>
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
            backgroundImage: "url('/multiple.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        />
      </Grid>
    </Box>
  );
};

export default Body4;
