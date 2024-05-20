import React from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Gallery from "./_components/Gallery";
import HeroSection from "./_components/HeroSection";

import ChartMain from "./_components/ChartMain";
import Navbar1 from "@/components/Navbar1";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <Box>
      <Navbar />
      <Navbar1/>
      <HeroSection />
      <Gallery />
      <ChartMain/>
      <Footer/>
    </Box>
  );
};

export default page;
