"use client";
import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();

  const handleClick = (route) => {
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
          Welcome to Global Guide
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
          onClick={() => handleClick("/companydata")}
        >
          Admin
        </Button>
        <Button
          variant="contained"
          style={{
            margin: "0 10px",
            backgroundColor: "brown",
            color: "#ffffff",
          }}
          onClick={() => handleClick("/B2B")}
        >
          B2B
        </Button>
        <Button
          variant="contained"
          style={{
            margin: "0 10px",
            backgroundColor: "green",
            color: "#ffffff",
          }}
          onClick={() => handleClick("/B2C")}
        >
          B2C
        </Button>
      </Box>
    </Box>
  );
}

export default Dashboard;
