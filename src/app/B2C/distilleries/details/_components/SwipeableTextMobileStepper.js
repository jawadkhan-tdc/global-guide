import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Grid, Typography, Button, MobileStepper, Divider } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MediaCard from "@/components/MediaCard";
import Image from "next/image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];
const data = [
  {
    title: "Glenmorangie",
    description: "SHERRY OAK 25 YEARS OLD, 2018 RELEASE",
    image: "/drink1.png",
  },
  {
    title: "The Macallan",
    description: "SHERRY OAK 25 YEARS OLD, 2018 RELEASE",
    image: "/drink.png",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
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
    <Box sx={{ width: "100%", mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{ width: "100%" }}
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 450,
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
          <MobileStepper
            sx={{
              backgroundColor: "#111211",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            variant="none"
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                <ArrowCircleDownIcon sx={{ fontSize: 40, color: "white" }} />
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                <ArrowCircleUpIcon sx={{ fontSize: 40, color: "white" }} />
              </Button>
            }
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", mt: { xs: 3, sm: 0, md: 0, lg: 0 }, mb: { xs: 4, sm: 4, md: 5, lg: 5 } }}>
          <Box>
            <Typography variant="h5" color={"white"}>
              Lorem ipsum
            </Typography>
            <Typography variant="body1" color={"white"} sx={{ mb: { xs: 3, sm: 3, md: 0, lg: 0 } }} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {data.map((detail, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                <MediaCard data={detail} />
              </Grid>
            ))}
          </Grid>
          <Box mt={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Divider
              sx={{
                width: "30%",
                height: 2,
                backgroundColor: "white",
                opacity: 0.2,
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", width: "35%" }}>
              <Image src="/button.png" width={40} height={45} alt="Button Icon" />
              <Typography color={"white"} ml={1} sx={{ fontSize: { xs: 10, sm: 14, md: 16, lg: 18 } }}>
                View all Brands
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", width: "35%" }}>
              <Image src="/button.png" width={40} height={45} alt="Button Icon" />
              <Typography color={"white"} ml={1} sx={{ fontSize: { xs: 10, sm: 14, md: 16, lg: 18 } }}>
                View all Brands
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
