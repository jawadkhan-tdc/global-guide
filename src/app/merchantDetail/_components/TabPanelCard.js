"use client";
import MediaCard from "@/components/MediaCard";
import { Box } from "@mui/material";
import React from "react";

const TabPanelCard = () => {
  return (
    <Box>
      <MediaCard
      height={300}
      width={600}
        data={{
          title: "22 DEC | London",
          image: "/drink1.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        }}
      />
    </Box>
  );
};

export default TabPanelCard;
