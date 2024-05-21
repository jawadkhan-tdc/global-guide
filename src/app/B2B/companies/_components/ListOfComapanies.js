"use client"
import api from "lib/services/api";
import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  CardContent,
} from "@mui/material";
import { useRouter } from "next/navigation";

const ListOfComapanies = () => {
    const router=useRouter();
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/company");
        console.log(response.data);
        setCompanies(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleBrand = (id) => {
    router.push(`/B2B/companies/brandDetail?id=${encodeURIComponent(id)}`);
  };

  return (
    <Box>
      {loading ? (
        <Typography>loading</Typography>
      ) : (
        <Box sx={{ width: "50%" }}>
          {companies.map((companies) => {
            return (
              <Card sx={{ display: "flex", backgroundColor: "black", mt: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151, height: 150 }}
                  image={companies.image}
                  alt="Live from space album cover"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5" color={"white"}>
                      {companies.name}
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        variant="subtitle1"
                        component="div"
                        color={"white"}
                      >
                        {companies.country}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        color={"white"}
                      >
                        Est. 1897
                      </Typography>
                    </Box>
                    <Typography color={"white"}>attherate@gmail.com</Typography>
                    <Box>
                      <Button
                        onClick={() => handleBrand(companies.id)}
                        variant="contained"
                        sx={{
                          backgroundColor: "goldenrod",
                          borderRadius: "none",
                          color: "white",
                          position: "relative",
                          top: "10px",
                          left: "70%",
                          width: "fit-content",
                          fontWeight: "600",
                        }}
                      >
                        View Info
                      </Button>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default ListOfComapanies;
