import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Brand from "./Brand";
import { useSearchParams } from "next/navigation";
import api from "lib/services/api";
import Merchants from "./Merchant";
import Distelleries from "./Distilleries";

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

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const params = useSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = params.get("id");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/company/${id}`);
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box>
      {loading ? (
        <Typography>Loading</Typography>
      ) : (
        <Box sx={{ width: "100%", bgcolor: "background.black" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab
              label="Brands"
              sx={{
                color: "white",
              }}
              {...a11yProps(0)}
            />
            <Tab
              label="Merchants"
              sx={{
                color: "white",
              }}
              {...a11yProps(1)}
            />
            <Tab
              label="Distilleries"
              sx={{
                color: "white",
              }}
              {...a11yProps(2)}
            />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <Brand data={data} loading={loading} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Merchants data={data} loading={loading} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Distelleries data={data} loading={loading} />
          </CustomTabPanel>
        </Box>
      )}
    </Box>
  );
}
ƒ;
