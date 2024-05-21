import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { createTheme } from "@mui/material/styles"; // Correct import for createTheme

export default function BrandCard({ loading, data }) {
  console.log("brands are ", data);
  const router = useRouter();
  const handleRelease = (data) => {
    router.push(
      `/B2B/release?data=${encodeURIComponent(JSON.stringify(data))}`
    );
  };

  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      {loading ? (
        <Typography>loading</Typography>
      ) : (
        <Box>
          <Box>
            <Typography
              color={"white"}
              sx={{ fontSize: 24, fontFamily: "Cormorant Infant" }}
            >
              {" "}
              MY BRANDS
            </Typography>
            {data.brands.map((brandDetails) => {
              return (
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    backgroundColor: "black",
                    mt: 2,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleRelease(brandDetails.releases);
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: isMobile ? "auto" : 151, height: "auto" }}
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
                    <CardContent sx={{ flex: "1 0 auto", width: "auto" }}>
                      <Typography component="div" variant="h5" color={"white"}>
                        {brandDetails.name}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          component="div"
                          color={"#999"}
                        >
                          {brandDetails.country}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          color={"#999"}
                        >
                          Est. 1897
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          color={"#999"}
                        >
                          5 Releases
                        </Typography>
                      </Box>
                      <Typography color={"#999"}>
                        attherate@gmail.com
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box
                    width={isMobile ? "100%" : "30%"}
                    sx={{ backgroundColor: "#BA9775" }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    textAlign={"center"}
                    alignItems={"center"}
                  >
                    <LocalFireDepartmentIcon sx={{ color: "white" }} />
                    <Typography color={"white"}>Promoted Brand</Typography>
                  </Box>
                </Card>
              );
            })}
          </Box>
          <Box mt={4}>
            <Typography
              color={"white"}
              sx={{ fontSize: 25, fontFamily: "Cormorant Infant" }}
            >
              {" "}
              Explore other Brands
            </Typography>
            {data.brands.map((brandDetails) => {
              return (
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "black",
                    mt: 2,
                    cursor: "pointer",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: isMobile ? "auto" : 151, height: "auto" }}
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
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          component="div"
                          color={"#999"}
                        >
                          {brandDetails.country}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          color={"#999"}
                        >
                          Est. 1897
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          color={"#999"}
                        >
                          5 Releases
                        </Typography>
                      </Box>
                      <Typography color={"#999"}>
                        attherate@gmail.com
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box
                    width={"30%"}
                    sx={{ backgroundColor: "#BA9775" }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    textAlign={"center"}
                    alignItems={"center"}
                  >
                    <LocalFireDepartmentIcon sx={{ color: "white" }} />
                    <Typography color={"white"}>Promoted Brand</Typography>
                  </Box>
                </Card>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
}
