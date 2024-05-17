import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    position: "relative",
    width: "100%",
    height: "auto",
    overflow: "hidden", 
  },
  blurOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "20%",
    backdropFilter: "blur(10px)", // Adjust the blur strength as needed
    zIndex: 1,
  },
  video: {
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
}));

const Body1 = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} lg={5} sx={{ p: 2 }}>
        <Box sx={{ p: { xs: 0, md: 5 } }}>
          <Typography
            sx={{
              fontSize: { xs: 24, sm: 28, md: 34 }, // Responsive font sizes
              color: "white",
            }}
          >
            Lorem ipsum
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 18 },
              color: "white",
              pt: 2,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Box gap={2} sx={{ display: "flex", alignItems: "center", pt: 2 }}>
            <Image
              src="/Button1.png"
              width={40} // Adjusted size
              height={40} // Adjusted size
              alt="Button Image"
            />
            <Typography sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}>
              Explore more
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Inter",
              fontSize: { xs: 36, sm: 46, md: 65 }, // Responsive font sizes
            }}
          >
            1M + collections
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} lg={7}>
        <Box className={classes.videoContainer}>
          <Box
            className={classes.blurOverlay}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "white" }}>advertisment</Typography>
          </Box>

          <video className={classes.video} autoPlay loop muted>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Body1;
