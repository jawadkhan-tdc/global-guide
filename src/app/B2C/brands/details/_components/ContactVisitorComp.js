import React from "react";
import {
  Box,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import CustomButton from "@/components/CustomButton";

const ContactVisitorComp = ({ isMobile }) => {
  return (
    <>
      <Box
        mx="auto"
        my="auto"
        component={Paper}
        backgroundColor="#BA9775"
        borderRadius={3}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          maxWidth: "80%",
          gap: 3,
        }}
      >
        {/* Left Side */}
        <Box width={isMobile ? "85%" : "45%"} pt={5} pl={isMobile ? 3 : 5}>
          {/* Heading */}
          <Typography
            fontWeight={200}
            gutterBottom
            variant={isMobile ? "h6" : "h4"}
            textTransform={"uppercase"}
            component="div"
            color="#fff"
          >
            Contact visitor center
          </Typography>
          {/* Discription */}
          <Typography
            gutterBottom
            variant="p"
            component="div"
            color="#fff"
            width={isMobile ? "65vw" : "25vw"}
            textAlign={"justify"}
            pr={4}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Typography>
        </Box>

        {/* Right Side  */}
        <Box width={isMobile ? "90%" : "45%"} pt={5} pl={isMobile ? 3 : 0}>
          <Box>
            <Card
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                maxWidth: "90%",
                borderRadius: "10px",
                backgroundColor: "#C8A58A",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0)",
              }}
            >
              <CardMedia
                sx={{
                  width: isMobile ? "100%" : "35%",
                  height: isMobile ? 150 : "auto",
                }}
                image="Avatar.png"
              />
              <CardContent sx={{ width: isMobile ? "100%" : "65%" }}>
                {/* Name */}
                <Typography
                  fontWeight={300}
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="#fff"
                >
                  Jonathan Johnson
                </Typography>
                {/* Designation */}
                <Typography
                  fontWeight={200}
                  gutterBottom
                  variant="h7"
                  component="div"
                  color="#fff"
                >
                  Visitor Manager
                </Typography>
                {/* intsa name */}
                <Box display={"flex"} gap={1} alignContent={"center"}>
                  <img src="Frame 427319810.png" alt="" />
                  <Typography
                    // fontWeight={600}
                    gutterBottom
                    variant="p"
                    component="div"
                    color="#fff"
                    textAlign={"justify"}
                    pr={4}
                  >
                    @nickname
                  </Typography>
                </Box>

                {/* View Detail Button */}
                <Box
                  textAlign="end"
                  mr={3}
                  display={"flex"}
                  justifyContent={isMobile ? "center" : "flex-end"}
                  alignItems="center"
                >
                  <Box
                    sx={{ cursor: "pointer" }}
                    width={isMobile ? "55%" : "30%"}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    mt={2}
                    backgroundColor="#fff"
                    px={1}
                  >
                    <CustomButton
                      onClick={() => router.push("/distilleries/brands")}
                      btnName="Reach Out"
                      // width="35%"
                      fontWeight={500}
                      color="#BA9775"
                      backgroundColor="transparent"
                      textTransform="Capitalize"
                      padding="0px"
                      noHoverBgClr={true}
                      borderRadius={"2px"}
                      // paddingRight='12px'
                      variant="text"
                      sx={{ display: "flex", alignItems: "center", border: 0 }}
                    />
                    {/* Arrow */}
                    <Box
                      sx={{
                        color: "#BA9775",
                      }}
                    >
                      <ArrowRightAltIcon />
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box
            my={2}
            display={"flex"}
            alignItems={"center"}
            gap={isMobile ? 2 : 5}
          >
            <Divider
              sx={{
                backgroundColor: "#fff",
                width: isMobile ? "50%" : "70%",
                height: "1px",
              }}
            />
            <Box variant="button" sx={{ cursor: "pointer" }}>
              <Image
                src="/Group 115.png"
                width={100}
                height={50}
                alt="Button Icon"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactVisitorComp;
