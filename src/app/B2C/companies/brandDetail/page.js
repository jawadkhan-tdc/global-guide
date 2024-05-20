"use client";
import { Box } from "@mui/material";
import React from "react";
import Navbar from "@/components/Navbar";
import InnerTabs from "./_components/InnerTabs";

const page = () => {
  return (
    <Box>
      <Navbar />
      <InnerTabs/>
      
    </Box>
  );
};

export default page;
