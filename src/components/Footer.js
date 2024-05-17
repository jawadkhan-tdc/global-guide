import { Box, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <Box 
      sx={{ 
        width: "100%",
        backgroundImage: "url('/mask1.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height: "100%", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap : 5,
        pt: { xs: 7, sm: 6, md: 5, lg: 5 },
        pb: { xs: 10, sm: 7, md: 5, lg: 5 }

      }}
    >
      <Box sx = {{width : "100%"}}>
        <Typography sx={{ fontFamily: "Elgoc", fontSize: 20, color: "white", textAlign : "center" }}>
          Global Guide
        </Typography>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent : "center", gap : 1 }}>
        <Image src="/Group 46.png" height={50} width={50} />
        <Image src="/Group 47.png" height={50} width={50} />
        <Image src="/Group 48.png" height={50} width={50} />
        <Divider variant='vertical' sx={{ width: "1px", backgroundColor: "white",  }} />
        <Image src="/Group 49.png" height={50} width={50} />
        <Image src="/Group 50.png" height={50} width={50} />
      </Box>
      <Box>
        <Typography sx={{ fontFamily: "Inter", fontSize: {xl : 10, sm : 12, md : 14, lg : 16}, color: "white"}}>
          Blog | Privacy | FAQ | CONTACT | Sitemap | Terms & Conditions
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontFamily: "Inter", fontSize: {xl : 8, sm : 10, md : 10, lg : 12}, color: "white" }}>
          Copyright © 2023. All rights reserved
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
