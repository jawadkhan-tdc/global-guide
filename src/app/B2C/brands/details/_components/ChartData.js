"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
const ChartData = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container>
        <Grid item xs={6}>
          <Box sx={{ border: "1px solid white", height: 100 }}>
            <Box color={"white"}>
              <Typography variant="h6">Color</Typography>
              <Typography> Full Gold</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ border: "1px solid white", height: 100 }}>
            <Box color={"white"}>
              <Typography variant="h6">Nose</Typography>
              <Typography> The fragrance of sweet oak notes</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ border: "1px solid white", height: 160 }}>
            <Box color={"white"}>
              <Typography variant="h6">Palate</Typography>
              <Typography>
                Even after 50 years the cask remains active offering seasonal
                spices of clove and cinnamon
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ border: "1px solid white", height: 160 }}>
            <Box color={"white"}>
              <Typography variant="h6">Finish</Typography>
              <Typography>
                It’s a beautifully structured whisky , with the cask and
                distillate in perfect harmony
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChartData;
