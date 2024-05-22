"use client";
import {
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuItemClick = (text) => {
    if (pathname === "/B2C") {
      router.push("/B2C/companies");
    } else if (pathname === "/B2B") {
      router.push("/B2B/companies");
    }
  };
  const handleHome=()=>{
    if (pathname === "/B2C/companies" || pathname === "/B2C/companies/brandDetail" || pathname === "/B2C/release" || pathname ==="/B2C/release/details" || pathname ==="/B2C/brands") {
      router.push("/B2C");
    } else if (pathname === "/B2B/companies/brandDetail" || pathname === "/B2B/release" || pathname === "/B2B/brands") {
      router.push("/B2B");
    }
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Companies"].map((text) => (
          <ListItem button key={text} onClick={() => handleMenuItemClick()} >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
        <Grid
          item
          xs={6}
          sm={4}
          lg={3}
          sx={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}
        >
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: "white", fontSize: 35, marginRight: 1 }} />
          </IconButton>
          <BookmarkBorderIcon
            sx={{ color: "#070807", fontSize: 35, marginLeft: 1 }}
          />
          <Tabs>
            <Tab label="Sign In" sx={{ color: "#070807" }} />
            <Tab label="Contact" sx={{ color: "#070807" }} />
          </Tabs>
        </Grid>

        {/* Center section */}
        <Grid
          item
          xs={6}
          sm={4}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" ,cursor:"pointer", flexDirection:"column"}} onClick={handleHome} >
            <Image src="/logo.png" alt="logo_img" width={50} height={30} />
          <Typography variant="body1" sx={{ color: "white" }}>
            Global Guide
          </Typography>
          </Box>
        </Grid>

        {/* Right section */}
        <Grid
          item
          xs={12}
          sm={4}
          lg={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: "20px",
          }}
        >
          <SearchIcon sx={{ color: "white", fontSize: 35, marginRight: 1 }} />
          <BookmarkBorderIcon
            sx={{ color: "white", fontSize: 35, marginLeft: 1 }}
          />
          <Tabs>
            <Tab label="Sign In" sx={{ color: "white" }} />
            <Tab label="Contact" sx={{ color: "white" }} />
          </Tabs>
        </Grid>
      </Grid>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navbar;
