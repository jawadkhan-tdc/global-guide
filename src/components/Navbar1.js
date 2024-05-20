"use client";
import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar1 = () => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const brandsMenuItem = { label: "Brands", route: "/companies" };
  const merchantsMenuItem = { label: "Merchants", route: "/merchantDetail" };
  const distilleriesMenuItem = {
    label: "Distilleries",
    route: "/distilleries",
  };
  const releaseMenuItem = { label: "Release", route: "/release" };

  const handleMenuItemClick = (route) => {
    setSelectedMenu(route);
    router.push(route);
    handleMenuClose(); // Close the menu after clicking on a menu item
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Divider
        variant="fullWidth"
        sx={{ backgroundColor: "#666", margin: 0 }}
      />
      <AppBar sx={{ backgroundColor: "#070807" }} position="static">
        <Toolbar style={{ textAlign: "center" }}>
          <Hidden mdUp>
            <Typography variant="h6" component="div">
              Global Guide
            </Typography>
            <Box ml={"auto"}>
              <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem
                onClick={() => handleMenuItemClick(brandsMenuItem.route)}
              >
                {brandsMenuItem.label}
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick(merchantsMenuItem.route)}
              >
                {merchantsMenuItem.label}
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick(distilleriesMenuItem.route)}
              >
                {distilleriesMenuItem.label}
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick(releaseMenuItem.route)}
              >
                {releaseMenuItem.label}
              </MenuItem>
            </Menu>
          </Hidden>

          <Hidden smDown>
            <Box
              display={"flex"}
              justifyContent={"center"}
              textAlign={"center"}
              alignItems={"center"}
              width={"100%"}
            >
              <Box
                width={"100%"}
                color={"grey"}
                maxWidth={"600px"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Typography
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    borderBottom:
                      selectedMenu === brandsMenuItem.route
                        ? "2px solid white"
                        : "none",
                    transition: "border-bottom 0.1s ease-in-out",
                  }}
                  onClick={() => handleMenuItemClick(brandsMenuItem.route)}
                  variant="h6"
                  component="div"
                  textAlign={"center"}
                >
                  {brandsMenuItem.label}
                </Typography>
                <Typography
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    borderBottom:
                      selectedMenu === merchantsMenuItem.route
                        ? "2px solid white"
                        : "none",
                    transition: "border-bottom 0.1s ease-in-out",
                  }}
                  onClick={() => handleMenuItemClick(merchantsMenuItem.route)}
                  variant="h6"
                  component="div"
                  textAlign={"center"}
                >
                  {merchantsMenuItem.label}
                </Typography>
                <Typography
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    borderBottom:
                      selectedMenu === distilleriesMenuItem.route
                        ? "2px solid white"
                        : "none",
                    transition: "border-bottom 0.1s ease-in-out",
                  }}
                  onClick={() =>
                    handleMenuItemClick(distilleriesMenuItem.route)
                  }
                  variant="h6"
                  component="div"
                  textAlign={"center"}
                >
                  {distilleriesMenuItem.label}
                </Typography>
                <Typography
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    borderBottom:
                      selectedMenu === releaseMenuItem.route
                        ? "2px solid white"
                        : "none",
                    transition: "border-bottom 0.1s ease-in-out",
                  }}
                  onClick={() => handleMenuItemClick(releaseMenuItem.route)}
                  variant="h6"
                  component="div"
                  textAlign={"center"}
                >
                  {releaseMenuItem.label}
                </Typography>
              </Box>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Divider
        variant="fullWidth"
        sx={{ backgroundColor: "#666", marginBottom: 2 }}
      />
    </Box>
  );
};

export default Navbar1;
