"use client"
import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";
import Body1 from "./_components/Body1";
import Body2 from "./_components/Body2";
import Body3 from "./_components/Body3";
import Body4 from "./_components/Body4";
import Body5 from "./_components/Body5";
import Body6 from "./_components/Body6";
import Body7 from "./_components/Body7";
import Body8 from "./_components/Body8";
import Footer from "@/components/Footer";
import Navbar1 from "@/components/Navbar1";

const page = () => {
  return (
    <Box>
      <Navbar/>
      <Navbar1/>
      <Body1/>
      <Body2 />
      <Body3/>
      <Body4/>
      <Body5/>
      <Body6/>
      <Body7/>
      <Body8/>
      <Footer/>
    </Box>
  );
};

export default page;
