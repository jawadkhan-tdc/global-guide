import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Tabs, Tab, Typography } from '@mui/material';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TabPanelCard from './TabPanelCard';
import ContactUs from './ContactUs';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Label() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Box>
        <Typography sx={{ fontFamily: 'Cormorant Infant', color: '#BA9775', fontSize: 20 }}>ANNOUNCEMENT</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography color="white">22 DEC |</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', }}>
            <PinDropIcon sx={{ color: '#BA9775' }} />
            <Typography sx={{ color: 'white',}}>London</Typography>
          </Box>
        </Box>
      </Box>
      <Box ml={7}>
        <ArrowRightAltIcon sx={{ color: 'white' }} />
      </Box>
    </Box>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box mb={4} ml={2}>
        <Typography sx={{ color: '#BA9775', fontFamily: 'Cormorant Infant', fontSize: 20 }}>BRAND NEWS</Typography>
      </Box>
      <Grid container spacing={3} sx={{ width: '100%',  }}>
        <Grid item xs={12} sm={6} md={3} lg={4}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            sx={{
              borderRight: 1,
              borderColor: 'divider',
              '& .MuiTabs-indicator': {
                color: '#000',
                backgroundColor: 'white',
              },
            }}
          >
            {[0, 1, 2, 3, 4].map((index) => (
              <Tab key={index} label={<Label />} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          {[0, 1, 2, 3, 4].map((index) => (
            <TabPanel key={index} value={value} index={index}>
              <TabPanelCard />
            </TabPanel>
          ))}
        </Grid>
      </Grid>
      <ContactUs />
    </Box>
  );
}
