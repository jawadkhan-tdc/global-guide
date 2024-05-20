import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function DistelleryCard({ loading, data }) {
const router=useRouter()
  const handleDistilley =(data)=>{
;
    router.push(`/B2B/brands?data=${encodeURIComponent(JSON.stringify(data))}`)

  }
  return (
    <Box>
      {loading ? (
        <Typography>loading</Typography>
      ) : (
        <Box>
          {data.distilleries.map((brandDetails) => {
            return (
              <Card sx={{ display: "flex", backgroundColor: "black", mt: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151, height: 150 }}
                  image={brandDetails.image}
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
                      {brandDetails.name}
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        variant="subtitle1"
                        component="div"
                        color={"white"}
                      >
                        {brandDetails.country}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        color={"white"}
                      >
                        Est. 1897
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        color={"white"}
                      >
                        5 Releases
                      </Typography>
                    </Box>
                    <Typography color={"white"}>attherate@gmail.com</Typography>
                    <Box>
                      <Button
                      onClick={()=>handleDistilley(brandDetails.brands)}
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
                        Brands
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
}
