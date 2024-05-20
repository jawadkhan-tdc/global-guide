"use client";

import { Box } from "@mui/material";
import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import InnerTabs from "./_components/InnerTabs";

const Page = () => {
  return (
    <Box>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <InnerTabs />
      </Suspense>
    </Box>
  );
};

export default Page;
