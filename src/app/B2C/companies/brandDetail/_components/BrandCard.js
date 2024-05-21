"use client";
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Box,
  Paper,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const body3Image = [
  {
    id: 1,
    image: "/Img1.png",
  },
  {
    id: 2,
    image: "/Img2 1.png",
  },
  {
    id: 3,
    image: "/Img3.png",
  },
];
export default function BrandCard({ loading, data }) {
  const router = useRouter();
  const handleRelease = (data) => {
    router.push(
      `/B2C/release?data=${encodeURIComponent(JSON.stringify(data))}`
    );
  };

  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      {loading ? (
        <Typography>loading</Typography>
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          borderRadius={2}
          rowGap={4}
          py={2}
          component={Paper}
          bgcolor={"#333"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {data.brands.map((item, index) => {
            return (
              <Grid item xs={12} key={item.id}>
                <Card
                  sx={{
                    display: "flex",
                    marginLeft: 3,
                    flexDirection: isMobile ? "column" : "row",
                    maxWidth: "90%",
                    borderRadius: "10px",
                    border: "1px solid #fff",
                    backgroundColor: "#222",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Box>
                    {/* Part 1 */}
                    <Box
                      display={"flex"}
                      flexDirection={isMobile ? "column" : "row"}
                      alignItems={"center"}
                      px={3}
                      mt={1}
                      mb={isMobile ? 1 : 3}
                    >
                      <img
                        src={item.image}
                        alt="brand-image"
                        width={isMobile ? 200 : 90}
                        height={isMobile ? 200 : 90}
                      />
                      <Typography color={"white"}>
                        Found in 1911, lorem ipsum this cognac has a very
                        pleasant golden tint and the aromatics show classic
                        scents of baked, white grapes, lemon and French oak.
                      </Typography>
                      <Box
                        border={"1px solid white"}
                        borderRadius={3}
                        width={isMobile ? "24px" : "74px"}
                        height={"25px"}
                        mb={3}
                      >
                        <img
                          src={"/Subtract.png"}
                          alt="copy-image"
                          style={{ marginLeft: "6px", marginTop: "5px" }}
                        />
                      </Box>
                    </Box>

                    {/* Part 2 */}
                    <Box
                      px={isMobile ? 2 : 3}
                      display={"flex"}
                      flexDirection={isMobile ? "column" : "row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      rowGap={isMobile ? 2 : 0}
                    >
                      <Typography
                        color={"#999"}
                        variant={"body1"}
                        fontWeight={100}
                        textTransform={"uppercase"}
                      >
                        Trending releases
                      </Typography>
                      {/* <Box textAlign="end" mr={3} display={'flex'} justifyContent={isMobile ? 'center' : 'flex-end'} alignItems="center"> */}
                      <Box
                        sx={{
                          cursor: "pointer",
                          width: isMobile ? "70%" : "25%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          px: 1,
                          "&:hover": {
                            backgroundColor: "none",
                          },
                        }}
                        onClick={() => handleRelease(item.releases)}
                      >
                        <Typography
                          fontWeight={500}
                          color="#BA9775"
                          textTransform="Capitalize"
                          padding="0px"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            border: 0,
                          }}
                        >
                          Explore the brand
                        </Typography>
                        <ArrowRightAltIcon sx={{ color: "#BA9775" }} />
                      </Box>
                      {/* </Box> */}
                    </Box>

                    {/* Part 3 */}
                    <Box
                      px={3}
                      display={"flex"}
                      flexDirection={isMobile ? "column" : "row"}
                      gap={2}
                      my={isMobile ? 3 : 2}
                    >
                      {body3Image?.map((item) => (
                        <Card
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: isMobile ? "340px" : "330px",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            border: "none",
                          }}
                          key={item.id}
                        >
                          <CardMedia
                            component="img"
                            sx={{
                              width: isMobile ? "100%" : "100%",
                              height: isMobile ? "auto" : "auto",
                            }}
                            image={item?.image}
                          />
                          <CardContent>
                            {/* Heading */}
                            <Typography
                              color={"white"}
                              fontSize={"20px"}
                              fontWeight={400}
                            >
                              Brand’s trending product name
                            </Typography>
                          </CardContent>
                        </Card>
                      ))}
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
