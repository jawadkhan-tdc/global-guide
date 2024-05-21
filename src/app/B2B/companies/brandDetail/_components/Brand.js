"use client";
import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Grid,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Button,
  Box,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import BrandCard from "./BrandCard";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import EastIcon from '@mui/icons-material/East';

function Label({ name }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Cormorant Infant",
          color: "white",
          fontSize: 20,
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Brand = ({ data }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const router = useRouter();

  const handleReleaseDetailsPage = () => {
    router.push("/release/details");
  };

  const theme = createTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid p={isMobile ? 2 : 0} item xs={12} md={6}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  "& .MuiTabs-indicator": {
                    color: "#000",
                    backgroundColor: "white",
                  },
                }}
              >
                <Tab label={<Label name={"BRANDS"} />} {...a11yProps(0)} />
                <Tab label={<Label name={"AMBASSADOR"} />} {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Box>
                <BrandCard data={data} />
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Box>
                <BrandCard data={data} />
              </Box>
            </CustomTabPanel>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={isMobile ? 3 : 6} sx={{ height: "100%" }}>
              <Box
                sx={{ backgroundColor: "#333" }}
                width={isMobile ? 270 : 500}
                borderRadius={2}
                p={3}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                    color={"white"}
                  >
                    POLLS
                  </Typography>
                  <Button sx={{ color: "#BA9775" }}>
                    View All <EastIcon sx={{ color: "#BA9775" }} />{" "}
                  </Button>
                </Box>
                <Box
                  borderBottom={"1px solid white"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box gap={1} display={"flex"} flexDirection={"row"}>
                    <Image src="/Group1111.png" height={22} width={24} />
                    <Typography variant="body1" color={"grey"} gutterBottom>
                      What would you prefer?
                    </Typography>
                  </Box>
                  <Box>
                    <PlayArrowIcon sx={{ color: "#BA9775" }} />
                  </Box>
                </Box>
                <Box
                  mt={2}
                  borderBottom={"1px solid white"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box gap={1} display={"flex"} flexDirection={"row"}>
                    <Image src="/Group1111.png" height={22} width={24} />
                    <Typography variant="body1" color={"grey"} gutterBottom>
                      What is your favourite release?
                    </Typography>
                  </Box>
                  <Box>
                    <PlayArrowIcon sx={{ color: "#BA9775" }} />
                  </Box>
                </Box>
                <Box
                  mt={2}
                  borderBottom={"1px solid white"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box gap={1} display={"flex"} flexDirection={"row"}>
                    <Image src="/Group1111.png" height={22} width={24} />
                    <Typography variant="body1" color={"grey"} gutterBottom>
                      What is your favourite release?
                    </Typography>
                  </Box>
                  <Box>
                    <PlayArrowIcon sx={{ color: "#BA9775" }} />
                  </Box>
                </Box>
              </Box>
              <Box
                mt={2}
                sx={{ backgroundColor: "#333" }}
                width={isMobile ? 270 : 500}
                borderRadius={2}
                p={3}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  gutterBottom
                  color={"white"}
                >
                  3 NOTIFICATIONS
                </Typography>
                <Typography variant="body1" gutterBottom color={"white"}>
                  Subscription renewal required
                </Typography>
                <Box mt={2} display={"flex"} flexDirection={"column"}>
                  <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    
                    <Box textAlign={"center"} >
                      <Button sx={{color:"#BA9775"}}>Complete  </Button>
                    </Box>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box gap={2} display={"flex"}>
                      <Image src="/Group 427319128.png" width={24} height={24}/>
                      <Typography color={"white"}>Promotion Payment Required</Typography>
                    </Box>
                    <Box textAlign={"center"} >
                      <Button sx={{color:"#BA9775"}}>Complete <EastIcon sx={{ color: "#BA9775" }} /> </Button>
                    </Box>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box gap={2} display={"flex"}>
                      <Image src="/Group 427319128.png" width={24} height={24}/>
                      <Typography color={"white"}>New Release Review Added</Typography>
                    </Box>
                    <Box textAlign={"center"} >
                      <Button sx={{color:"#BA9775"}}>View Posting</Button>
                    </Box>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box gap={2} display={"flex"}>
                      <Image src="/Group 427319128.png" width={24} height={24}/>
                      <Typography color={"white"}>Release info required</Typography>
                    </Box>
                    <Box textAlign={"center"} >
                      <Button sx={{color:"#BA9775"}}>Add Details</Button>
                    </Box>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box gap={2} display={"flex"}>
                      <Image src="/Group 427319128.png" width={24} height={24}/>
                      <Typography color={"white"}>You Release was published</Typography>
                    </Box>
                    <Box textAlign={"center"} >
                      <Button sx={{color:"#BA9775"}}>View Posting</Button>
                    </Box>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box gap={2} display={"flex"}>
                      <Image src="/Group 427319128.png" width={24} height={24}/>
                      <Typography color={"white"}>Distillery info required</Typography>
                    </Box>
                    <Box textAlign={"center"} >
                      <Button sx={{color:"#BA9775"}}>Add Details</Button>
                    </Box>
                  </Box>
                  
                </Box>
              </Box>
              <Box
                mt={2}
                sx={{ backgroundColor: "#333" }}
                width={isMobile ? 270 : 500}
                borderRadius={2}
                p={3}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  gutterBottom
                  color={"white"}
                >
                  FAVORITE BRANDS
                </Typography>
                <Box py={2} alignItems={'center'} gap={2} display={'flex'} justifyContent={'space-between'}>
                  <Image src="/tab1.png" width={80} height={60}/>
                  <Image src="/tab2.png" width={80} height={60}/>
                  <Image src="/tab3.png" width={80} height={60}/>
                  <Image src="/tab4.png" width={100} height={40}/>
                  <Image src="/tab5.png" width={80} height={60}/>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Brand;