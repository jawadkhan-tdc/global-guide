import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Navbar = () => {
  return (
    <Box
      width={"100%"}
      sx={{
        backgroundColor: "#070807",
        padding: 0.3,
        alignItems: "center",
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        {/* Left section */}
        <Grid item xs={6} sm={4} lg={3} sx={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
          <MenuIcon sx={{ color: "white", fontSize: 35, marginRight: 1 }} />
          <BookmarkBorderIcon sx={{ color: "#070807", fontSize: 35, marginLeft: 1 }} />
          <Tabs>
            <Tab label="Sign In" sx={{ color: "#070807" }} />
            <Tab label="Contact" sx={{ color: "#070807" }} />
          </Tabs>
        </Grid>

        {/* Center section */}
        <Grid item xs={6} sm={4} lg={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src="/logo.png" alt="logo_img" width={50} height={30} />
          </Box>
          <Typography variant="body1" sx={{ color: "white" }}>
            Global Guide
          </Typography>
        </Grid>

        {/* Right section */}
        <Grid item xs={12} sm={4} lg={3} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "20px" }}>
          <SearchIcon sx={{ color: "white", fontSize: 35, marginRight: 1 }} />
          <BookmarkBorderIcon sx={{ color: "white", fontSize: 35, marginLeft: 1 }} />
          <Tabs>
            <Tab label="Sign In" sx={{ color: "white" }} />
            <Tab label="Contact" sx={{ color: "white" }} />
          </Tabs>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
