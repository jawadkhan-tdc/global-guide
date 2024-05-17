import MediaCard from "@/components/MediaCard";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

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
];

const Body7 = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "url('/Mask group11.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mb: { xs: 5, sm: 7, md: 10, lg: 10 },
        }}
      >
        <Box>
          <Typography
            mt={4}
            sx={{
              fontFamily: "Cormorant Infant",
              fontWeight: 200,
              fontSize: { xs: 20, sm: 24, md: 36, lg: 36 },
              color: "black",
            }}
          >
            Distilleries & Merchants
          </Typography>
        </Box>
        <Grid container spacing={3} sx={{ width: "100%", mt: { xs: 2, sm: 3, md: 4, lg: 4 } }}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <MediaCard data={item} />
            </Grid>
          ))}
        </Grid>
        <Box
          mt={4}
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap : 1 }}>
            <Image src="/Ellipse 5.png" width={40} height={40} />
            <Typography color={"white"} sx = {{fontSize : {xs : 10, sm : 14, md : 16, lg : 18}}}>View Product Catalogue</Typography>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Divider
              sx={{
                width: "80%",
                height: 2,
                backgroundColor: "white",
                opacity: 3.2,
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap : 1 }}>
            <Image src="/Ellipse 5.png" width={40} height={40} />
            <Typography color={"white"} sx = {{fontSize : {xs : 10, sm : 14, md : 16, lg : 18}}}>To Distilleries & Merchants</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Body7;
