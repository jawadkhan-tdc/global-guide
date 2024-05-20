"use client";
import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
function AdminHome() {
  const router = useRouter();

  const handleClick = (route, role) => {
    localStorage.setItem("role", role);
    router.push(route);
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: 50,
      }}
    >
      <Box>
        <Typography variant="h4" color={"white"} gutterBottom>
          Welcome to Admin Home
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          style={{
            margin: "0 10px",
            backgroundColor: "gray",
            color: "#ffffff",
          }}
          onClick={() => handleClick("/distellery", "distillery")}
        >
          Add Distillery
        </Button>
        <Button
          variant="contained"
          style={{
            margin: "0 10px",
            backgroundColor: "brown",
            color: "#ffffff",
          }}
          onClick={() => handleClick("/branded", "brand")}
        >
          Add Brand
        </Button>
        <Button
          variant="contained"
          style={{
            margin: "0 10px",
            backgroundColor: "green",
            color: "#ffffff",
          }}
          onClick={() => handleClick("/merchant", "merchant")}
        >
          Add Merchant
        </Button>
      </Box>
    </Box>
  );
}

export default AdminHome;
