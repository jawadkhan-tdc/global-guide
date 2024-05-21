import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  createTheme,
  useMediaQuery,
  Paper,
  Divider,
} from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Heading from "@/components/Heading";
import CustomAutocomplete from "@/components/CustomAutocomplete";

export default function DistilleryCard({ loading, data }) {
  const router = useRouter();
  const handleDistillery = (data) => {
    router.push(`/B2C/brands?data=${encodeURIComponent(JSON.stringify(data))}`);
  };
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const headingName = "Distilleries";

  return (
    <Box>
      {loading ? (
        <Typography>loading</Typography>
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          borderRadius={2}
          rowGap={1}
          py={2}
          component={Paper}
          bgcolor={"#333"}
          alignItems={"center"}
          // justifyItems={"center"}
        >
          <Box ml={3}>
            <Heading
              headingName={headingName}
              color="#fff"
              textTransform="uppercase"
              variant="h6"
              textAlign={'start'}
            />
          </Box>
          <Divider
            variant="fullWidth"
            sx={{
              backgroundColor: "#FFF",
              height: 1,
              width: "99%",
            }}
          />
          <Box
            mt={1}
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            justifyContent={isMobile ? "flex-start" : "space-between"}
            mx="auto"
            width="90%"
          >
            <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
              {/* Filter */}
              <CustomAutocomplete labelName="Filter" width={90} />
              {/* Sort By */}
              <CustomAutocomplete
                labelName="Sort By: Newest/Recent/top Appreciated"
                width={isMobile ? 250 : 350}
              />
            </Box>

            <Box>
              {/* Search */}
              <CustomAutocomplete width={90} getSearchIcon={true} />
            </Box>
          </Box>

          {data.distilleries.map((item, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                maxWidth: "90%",
                borderRadius: "10px",
                border: "1px solid #fff",
                backgroundColor: "#222",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <CardMedia
                sx={{
                  width: isMobile ? "100%" : "35%",
                  height: isMobile ? 150 : "auto",
                }}
                image={item.image}
              />
              <CardContent sx={{ width: isMobile ? "100%" : "65%" }}>
                {/* Distillery Name */}
                <Typography
                  fontWeight={600}
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#fff"
                >
                  {item.name}
                </Typography>
                {/* Country Name */}
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  color="#fff"
                  textAlign={"justify"}
                  pr={4}
                >
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </Typography>

                {/* Explore More Button */}
                <Box
                  textAlign="end"
                  mr={3}
                  display={"flex"}
                  justifyContent={isMobile ? "center" : "flex-end"}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      cursor: "pointer",
                      width: isMobile ? "45%" : "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      mt: 2,
                      backgroundColor: "#BA9775",
                      px: 1,
                      "&:hover": {
                        backgroundColor: "#a28664",
                      },
                    }}
                    onClick={() => handleDistillery(item.brands)}
                  >
                    <Typography
                      fontWeight={500}
                      color="#fff"
                      textTransform="Capitalize"
                      padding="0px"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        border: 0,
                      }}
                    >
                      Explore more
                    </Typography>
                    <ArrowRightAltIcon sx={{ color: "#fff" }} />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}
