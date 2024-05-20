import React from "react";
import { Box, Grid } from "@mui/material";
import VerticalTabs from "./VerticalTabs";

const Body8 = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "url('/Pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        pt: { xs: 5, sm: 7, md: 10, lg: 10 },
        pb: { xs: 5, sm: 7, md: 10, lg: 10 },
      }}
    >
      <Grid container sx={{ width: "100%", height: "100%",}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <VerticalTabs />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Body8;
