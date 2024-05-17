"use client";
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box display={"flex"} my={"auto"} mx={"auto"} maxWidth={"100%"}>
      <Grid container spacing={0} sx={{ height: 600 }}>
        <Grid item xs={12} lg={5} height={600}>
          <Box
            sx={{
              backgroundImage: "url('/Rectangle 10.png')",
              backgroundSize: "cover",
              height: 600,
            }}
          >
            <Box
              height={500}
              p={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography color={"white"}>
                Home - Brands - Bowmore - Islay single malt 25 years
              </Typography>
              <Typography
                mt={3}
                sx={{ display: "flex", alignItems: "center", color: "white" }}
              >
                <ArrowBackIcon sx={{ fontSize: 23 }} /> Back
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon sx={{ display: "flex", alignItems: "center" }}>
                    <Image src="/Group 87.png" width={40} height={40} />
                    <Typography ml={2} color={"white"}>
                      INTRODUCTION
                    </Typography>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ display: "flex", alignItems: "center" }}>
                    <Image src="/Group 87.png" width={40} height={40} />
                    <Typography ml={2} color={"white"}>
                      GALLERY
                    </Typography>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ display: "flex", alignItems: "center" }}>
                    <Image src="/Group 87.png" width={40} height={40} />
                    <Typography ml={2} color={"white"}>
                      PRODUCT DETAILS
                    </Typography>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ display: "flex", alignItems: "center" }}>
                    <Image src="/Group 87.png" width={40} height={40} />
                    <Typography ml={2} color={"white"}>
                      NEAREST STORE
                    </Typography>
                  </ListItemIcon>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={7} height={600}>
          <Grid
            container
            mx={"auto"}
            sx={{
              backgroundImage: "url('/Rectangle 4.png')",
              backgroundSize: "cover",
              height: 600,
            }}
            maxWidth={"100%"}
          >
            <Grid
              item
              height={600}
              sx={12}
              lg={5}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                mt={2}
                height={500}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ color: "black" }}>
                  <Typography sx={{ color: "#BA9775" }}>PRICE BAND</Typography>
                  <Typography>$100 - $200</Typography>
                </Box>

                <Box sx={{ color: "black" }}>
                  <Typography sx={{ color: "#BA9775" }}>ABV</Typography>
                  <Typography>40,3</Typography>
                </Box>

                <Box sx={{ color: "black" }}>
                  <Typography sx={{ color: "#BA9775" }}>
                    PRODUCT TYPE
                  </Typography>
                  <Typography>Single melt whisky</Typography>
                </Box>
                <Box sx={{ color: "black" }}>
                  <Typography sx={{ color: "#BA9775" }}>REGION</Typography>
                  <Typography>Islay</Typography>
                </Box>

                <Box sx={{ color: "black" }}>
                  <Typography sx={{ color: "#BA9775" }}>
                    FLAVOUR CAMP
                  </Typography>
                  <Typography>Fruity & Spicy</Typography>
                </Box>
                <Box sx={{ color: "black" }}>
                  <Typography sx={{ color: "#BA9775" }}>MEDIA</Typography>

                  <List>
                    <ListItem>
                      <ListItemIcon
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Image
                          src="/Frame 427319808.png"
                          width={10}
                          height={10}
                        />
                        <Typography ml={1} color={"black"}>
                          @release1
                        </Typography>
                      </ListItemIcon>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Image
                          src="/Frame 427319809.png"
                          width={10}
                          height={10}
                        />
                        <Typography ml={1} color={"black"}>
                          @release1
                        </Typography>
                      </ListItemIcon>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Image
                          src="/Frame 427319810.png"
                          width={10}
                          height={10}
                        />
                        <Typography ml={1} color={"black"}>
                          @release1
                        </Typography>
                      </ListItemIcon>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Grid>
            <Grid mt={2} item sx={12} lg={7}>
              <Box
                width={isMobile ? 270 : 350}
                borderRadius={2}
                display={"flex"}
                sx={{backgroundImage: "url('/Rectangle 4.png')",
                backgroundSize: "cover"}}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Box width={isMobile ? 270 : 350} textAlign={"center"}>
                  <Typography
                    fontFamily={"Cormorant Infant"}
                    fontSize={25}
                    fontWeight={300}
                    gutterBottom
                  >
                    BACHE-GABRIELSEN VSOP NATUR & ELEGANSE
                  </Typography>
                </Box>
                <Box sx={{ display: " flex", justifyContent: "center" }}>
                  <Typography color={"black"}>WHISKEY |</Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <BookmarkBorderIcon sx={{ color: "#BA9775" }} />
                    <Typography gutterBottom sx={{ color: "#BA9775" }}>
                      Favorite
                    </Typography>
                  </Box>
                </Box>

                <Typography color={"#BA9775"} gutterBottom>
                  BACHE-GABRIELSEN // WHISKEY, FRANCE
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  Bache-Gabrielsen is a revered cognac house started in 1905.
                  The “Natur & Eleganse” line is supposed to be a break from
                  their classical line signified with an non-traditional, short,
                  squat bottle and a flavor profile that highlights
                  “no-nonsense," “frank and fruity characters.” The four-plus
                  year old brandy is all ugni blanc sourced from vines in mostly
                  the Fins Bois, but also the Petite Champagne and Grande
                  Champagne crus.
                </Typography>

                <Box mt={1} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <Image src="/button1.png" height={40} width={40} />
                  <Typography color={"black"} gutterBottom>Find Stories nearby</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
