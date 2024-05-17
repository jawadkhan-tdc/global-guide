import React from "react";
import { Box, Typography } from "@mui/material";
import CustomTextField from "@/components/CustomTextField";
const ContactUs = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          backgroundImage: "url('/Group 179.png')",
          height: "100%",
          mt: { xs: 5, sm: 7, md: 10, lg: 10 },
          pb: { xs: 15, sm: 10, md: 10, lg: 10 },

        }}
      >
        <Box sx={{ width: { xs: "80%", sm: "60%", md: "35%", lg: "35%" }, padding: { xs: 3, sm: 5, md: 10, lg: 10 }}}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Cormorant Infant",
                fontSize: 20,
                color: "#BA9775",
              }}
            >
              CONTACT US
            </Typography>
          </Box>
          <Box mt={3} sx={{ width: "100%", display: "flex", justifyContent: "space-between", }}>
            <CustomTextField placeholder={"Name"} width={"100%"} />
            {/* <CustomTextField placeholder={"I am"} width={"200px"} sx={{ mt: { xs: 2 } }} /> */}
          </Box>
          <Box mt={3}>
            <CustomTextField placeholder={"Email*"} width={"100%"} />
          </Box>
          <Box mt={3} sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            <CustomTextField placeholder={"Company"} width={"100%"} />
            {/* <CustomTextField placeholder={"Topic"} width={"100%"} /> */}
          </Box>
          <Box mt={3}>
            <CustomTextField placeholder={"Message"} width={"100%"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
