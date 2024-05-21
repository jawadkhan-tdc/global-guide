"use client";
import React, { Suspense } from "react";
import {
  Grid,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Typography,
  Box,
  Button,
  TextField,
  CardContent,
  Card,
  CardMedia,
  CardActions,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import HeroSection from "@/app/B2B/details/_components/HeroSection";
import Gallery from "@/app/B2B/details/_components/Gallery";

const Page = () => {
  const params = useSearchParams();
  const router = useRouter();
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleBack = () => {
    router.back();
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <HeroSection />
        <Gallery />
        <Grid p={4} mt={4} container>
          <Grid item xs={12} md={8}>
            <Box
              borderRadius={5}
              p={isMobile ? 1 : 4}
              sx={{ backgroundColor: "#222", color: "#FFF" }}
            >
              <Box
                px={3}
                py={1}
                borderBottom={"2px solid white"}
                display={"flex"}
                flexDirection={isMobile ? "column" : "row"}
                justifyContent={"space-between"}
              >
                <Box
                  gap={isMobile ? 2 : 6}
                  display={"flex"}
                  flexDirection={isMobile ? "row" : "row"}
                  justifyContent={"space-between"}
                >
                  <Box
                    display={isMobile ? "block" : "flex"}
                    gap={isMobile ? 0 : 5}
                  >
                    <Typography
                      variant={isMobile ? "body1" : "h6"}
                      gutterBottom
                    >
                      DETAILS
                    </Typography>
                    <Typography
                      variant={isMobile ? "body1" : "h6"}
                      gutterBottom
                    >
                      USER REVIEWS
                    </Typography>
                  </Box>
                  <Box
                    display={isMobile ? "block" : "flex"}
                    gap={isMobile ? 0 : 5}
                  >
                    <Typography
                      variant={isMobile ? "body1" : "h6"}
                      gutterBottom
                    >
                      RELEASE LEGEND
                    </Typography>
                    <Typography
                      variant={isMobile ? "body1" : "h6"}
                      gutterBottom
                    >
                      DISTILLERY INFO
                    </Typography>
                  </Box>
                </Box>
                <Box mt={isMobile ? 1 : 0} ml={isMobile ? 19 : 0}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#BA9775",
                      "&:hover": {
                        backgroundColor: "darkgoldenrod",
                      },
                    }}
                  >
                    Brand Story
                  </Button>
                </Box>
              </Box>
              <Box p={5}>
                <Typography variant="h6" gutterBottom>
                  COMMUNITY RATING:
                </Typography>
                <img src="/Frame 37.png" alt="" />
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={"left"}
                  gutterBottom
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
                <Box
                  mt={6}
                  display={"flex"}
                  flexDirection={isMobile ? "column" : "row"}
                  justifyContent={"space-between"}
                >
                  <Box
                    display={"flex"}
                    gap={isMobile ? 11 : 0}
                    flexDirection={isMobile ? "row" : "column"}
                  >
                    <Typography color={"#999"} variant="h6" gutterBottom>
                      AGE
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      VSOP
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    gap={isMobile ? 2 : 0}
                    flexDirection={isMobile ? "row" : "column"}
                  >
                    <Typography color={"#999"} variant="h6" gutterBottom>
                      CASK TYPE
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      LimousiN OAK
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    gap={isMobile ? 11 : 0}
                    flexDirection={isMobile ? "row" : "column"}
                  >
                    <Typography color={"#999"} variant="h6" gutterBottom>
                      ABV
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      40,3°
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    gap={isMobile ? 7 : 0}
                    flexDirection={isMobile ? "row" : "column"}
                  >
                    <Typography color={"#999"} variant="h6" gutterBottom>
                      BRAND
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      LOREM IPSUM{" "}
                      <span style={{ fontWeight: "700", color: "#BA9775" }}>
                        (54)
                      </span>
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  mt={3}
                  textAlign={"left"}
                  variant="body1"
                  gutterBottom
                >
                  Brandy distilled in a delimited region within France from
                  specific grapes. Must be double-distilled to no higher than
                  72% ABV. Required to be aged in oak at least 2 years. Also, if
                  labeled as the following, minimum aging is: VS-2 years, VSOP-4
                  years, Napoleon 6 years, XO-10 years (as of April 2018).
                </Typography>
              </Box>
            </Box>
            <Box
              mt={5}
              p={5}
              borderRadius={5}
              sx={{ backgroundColor: "#333", color: "#FFF" }}
            >
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography fontWeight={700} variant="h6" gutterBottom>
                  TASTING NOTES
                </Typography>
                <Box>
                  <WestIcon sx={{ marginRight: "50px" }} />
                  <EastIcon />
                </Box>
              </Box>
              <Box
                display={"flex"}
                flexDirection={isMobile ? "column" : "row"}
                justifyContent={"space-between"}
              >
                <Box width={isMobile ? "100%" : "70%"}>
                  <img src="/Group 96.png" alt="" />
                  <Typography textAlign={"left"} variant="body1" gutterBottom>
                    "The color of this cognac has a very pleasant golden tint
                    and the aromatics show classic scents of baked, white
                    grapes, hard lemon candy, and opulent French oak. True to
                    the product’s marketing description and perhaps in discord
                    with the line’s name, “Eleganse,” the palate is bold and
                    rich with a pleasant impression of grippy oak tannin.
                    Although perhaps slightly misnamed, this would be a
                    wonderful cognac for whisky lovers and its concentration of
                    wood and fruit flavors would make for great New Orleans
                    style cocktails."
                  </Typography>
                </Box>
                <Box p={4}>
                  <Typography variant="h5">ADDED BY</Typography>
                  <Typography mt={2} color={"#BA9775"} variant="h5">
                    JOHN RANKIN
                  </Typography>
                  <Typography mt={2} variant="h5">
                    Score:{" "}
                    <span style={{ fontWeight: "700", color: "#BA9775" }}>
                      90
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              mt={5}
              borderRadius={5}
              p={isMobile ? 2 : 3}
              sx={{
                backgroundImage: 'url("/Rectangle 53.png")',
                color: "#FFF",
              }}
            >
              <Typography gutterBottom variant={isMobile ? "h5" : "h4"}>
                SUBSCRIBE FOR OUR NEWSLETTER
              </Typography>
              <Typography gutterBottom variant={isMobile ? "body1" : "h6"}>
                Keep updated about new products lorem ipsum
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                gap={isMobile ? 3 : 15}
                mt={2}
              >
                <TextField
                  label="Full Name"
                  variant="standard"
                  InputLabelProps={{ style: { color: "white" } }}
                  InputProps={{
                    style: { color: "white" },
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "black",
                      padding: "8px",
                      borderRadius: "4px",
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottom: "2px solid white", // Black color before focus
                    },
                    "& .MuiInput-underline:after": {
                      borderBottom: "3px solid white", // Thicker black color after focus
                    },
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                      borderBottom: "2px solid white", // Black color on hover
                    },
                  }}
                />
                <TextField
                  label="E-mail address"
                  variant="standard"
                  InputLabelProps={{ style: { color: "white" } }}
                  InputProps={{
                    style: { color: "white" },
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "black",
                      padding: "8px",
                      borderRadius: "4px",
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottom: "2px solid white", // Black color before focus
                    },
                    "& .MuiInput-underline:after": {
                      borderBottom: "3px solid white", // Thicker black color after focus
                    },
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                      borderBottom: "2px solid white", // Black color on hover
                    },
                  }}
                />
              </Box>
              <Box py={2} ml={isMobile ? 0 : 39} mt={isMobile ? 1 : 3}>
                <Button
                  variant="contained"
                  endIcon={<EastIcon />}
                  sx={{
                    backgroundColor: "#BA9775",
                    "&:hover": {
                      backgroundColor: "#BA9775",
                    },
                  }}
                >
                  Subscribe for newsletter
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid p={isMobile ? 2 : 0} item xs={12} md={4}>
            <Box p={2}>
              <Box
                borderRadius={5}
                p={3}
                display={"flex"}
                flexDirection={"column"}
                sx={{ backgroundColor: "#BA9775" }}
              >
                <Box px={9} display={"flex"} justifyContent={"space-between"}>
                  <img src="/msg.png" alt="" />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#BA9775",
                      fontSize: "18px",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "goldenrod",
                        boxShadow: "none",
                      },
                    }}
                  >
                    REVIEW THE LIST
                  </Button>
                </Box>
                <Box
                  mt={1}
                  px={9}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <img src="/save.png" alt="" />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#BA9775",
                      fontSize: "18px",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "goldenrod",
                        boxShadow: "none",
                      },
                    }}
                  >
                    ADD TO MY LIST
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box p={2} borderRadius={10}>
              <Card sx={{ borderRadius: "20px", backgroundColor: "#222" }}>
                <CardMedia sx={{ height: 240 }} image="/Rectangle 1897.png" />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    color={"white"}
                    component="div"
                  >
                    BONOLLO GRAPPA OF AMARO NEBARRIQUE
                  </Typography>

                  <Button
                    sx={{
                      backgroundColor: "#BA9775",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "darkgoldenrod",
                      },
                    }}
                    size="large"
                  >
                    Explore more <EastIcon />
                  </Button>
                </CardContent>
              </Card>
            </Box>
            <Box p={2} borderRadius={10}>
              <Card sx={{ borderRadius: "20px", backgroundColor: "#222" }}>
                <CardMedia sx={{ height: 240 }} image="/Rectangle 24.jpg" />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    color={"white"}
                    component="div"
                  >
                    BONOLLO GRAPPA OF AMARO NEBARRIQUE
                  </Typography>

                  <Button
                    sx={{
                      backgroundColor: "#BA9775",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "darkgoldenrod",
                      },
                    }}
                    size="large"
                  >
                    Explore more <EastIcon />
                  </Button>
                </CardContent>
              </Card>
            </Box>
            <Box p={2} borderRadius={10}>
              <Card sx={{ borderRadius: "20px", backgroundColor: "#222" }}>
                <CardMedia sx={{ height: 240 }} image="/Rectangle 36.png" />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    color={"white"}
                    component="div"
                  >
                    PÈRE MAGLOIRE CALVADOS VSOP LESS FLORAL
                  </Typography>

                  <Button
                    sx={{
                      backgroundColor: "#BA9775",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "darkgoldenrod",
                      },
                    }}
                    size="large"
                  >
                    Explore more <EastIcon />
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Suspense>
  );
};

export default Page;
