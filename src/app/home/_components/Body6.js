import React, { useState } from "react";
import { Button, Box, Typography, Divider } from "@mui/material";
import MediaCard from "@/components/MediaCard";
import Image from "next/image";

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

const Body6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "url('/body1.png')",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box>
          <Typography
            mt={4}
            sx={{
              fontFamily: "Cormorant Infant",
              fontWeight: 200,
              fontSize: {xs : 20, sm : 24, md : 36, lg : 36 },
              color: "#BA9775",
            }}
          >
            Distilleries & Merchants
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: {xs : 3, sm : 5, md : 8, lg : 8 },
          }}
        >
          <Button
            sx={{
              position: "absolute",
              top: "30%",
              left: "10px",
              transform: "translateY(-50%)",
              background: "transparent",
              border: "none",
              outline: "none",
              cursor: "pointer",
              fontSize: "24px",
              zIndex: 1, // Ensure button appears above images
            }}
            onClick={prevSlide}
          >
            {"<"}
          </Button>
          <Box
            sx={{
              display: "flex",
              transition: "transform 0.5s ease",
              width: "calc(100% - 60px)", // Adjusted width for space occupied by buttons
              transform: `translateX(-${(currentIndex / data.length) * 100}%)`, // Slide effect
            }}
          >
            {data.map((dataItem, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: "calc(100% / ${data.length})", // Equal width for each card
                  flex: "0 0 auto",
                  padding: "10px", // Added padding for spacing inside cards
                  boxSizing: "border-box", // Ensured padding doesn't increase width
                }}
              >
                <MediaCard data={dataItem} />
              </Box>
            ))}
          </Box>
          <Button
            sx={{
              position: "absolute",
              top: "30%",
              right: "10px",
              transform: "translateY(-50%)",
              background: "transparent",
              border: "none",
              outline: "none",
              cursor: "pointer",
              fontSize: "24px",
              zIndex: 1, // Ensure button appears above images
            }}
            onClick={nextSlide}
          >
            {">"}
          </Button>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Divider
            sx={{
              width: "30%",
              height: 2,
              backgroundColor: "white",
              opacity: 3.2,
            }}
          />
          <Box ml={2} sx={{ display: "flex", alignItems: "center" }}>
            <Image src="/button.png" width={50} height={50} />
            <Typography color={"white"}>View all Brands</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Body6;
