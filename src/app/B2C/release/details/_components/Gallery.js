"use client";
import { Grid, Box, Button, useMediaQuery, Typography } from "@mui/material";
import React from "react";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import Image from "next/image";
import { useTheme } from "@mui/material/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const Gallery = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const maxSteps = images.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box mt={10}>
    <Typography gutterBottom sx={{color:"white", textAlign:"center", fontSize:30}}>GALLERY</Typography>
    <Box
      mt={ isMobile ? 150 : 0}
      mx={"auto"}
      display={"flex"}
      justifyContent={"space-around"}
      maxWidth={"90%"}
    >
      
      <Grid container spacing={1} alignItems="center"  mx={"auto"}>
        <Grid item xs={12} lg={3} display={"flex"} justifyContent={"center"}>
          <Image src="/drink1.png" width={250} height={160} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {!isMobile && (
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <Image src="/Group 87.png" width={40} height={40} />
              </Button>
            )}

            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              sx={{ width: "100%", overflow: "hidden" }}
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 250,
                        display: "block",
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>

            {!isMobile && ( // Show bottom button only on non-mobile screens
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                <Image src="/Group 86.png" width={40} height={40} />
              </Button>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} lg={3} display={"flex"} justifyContent={"center"}>
          <Image src="/drink1.png" width={250} height={160} />
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default Gallery;