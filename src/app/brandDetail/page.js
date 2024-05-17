"use client";
import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";

import Body5 from "./_components/Body5";

import Body8 from "./_components/Body8";
import Footer from "@/components/Footer";
import HeroSection from "./_components/HeroSection";
import Gallery from "./_components/Gallery";
import Navbar1 from "@/components/Navbar1";

const page = () => {
  return (
    <Box>
      <Navbar />
      <Navbar1/>
      <HeroSection />
      <Gallery />
      <Body5 />
      <Body8 />
      <Footer />
    </Box>
  );
};

export default page;
