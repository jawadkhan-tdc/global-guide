import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import ChartData from "./ChartData";
import Image from "next/image";

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

function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
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
          <Tab label={<Label name={"FLAVOURS"} />} {...a11yProps(0)} />
          <Tab label={<Label name={"AROMAS"} />} {...a11yProps(1)} />
          <Tab label={<Label name={"AFTERTASYE"} />} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ChartData />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ChartData />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ChartData />
      </CustomTabPanel>
    </Box>
  );
}

const Chart = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <BasicTabs />
        </Grid>
        <Grid mt={3} item xs={12} lg={6}>
          <Image src="/Group 427319345.png" height={300} width={400} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chart;
