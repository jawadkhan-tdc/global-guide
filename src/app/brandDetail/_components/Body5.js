import { Box, Typography } from '@mui/material'
import React from 'react'
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper'

const Body5 = () => {
  return (
   <Box>
    <Typography variant="h4" color={"#BA9775"} textAlign={"center"} sx = {{mt :5}}>
          RELEASES OVERVIEW
        </Typography>
    <SwipeableTextMobileStepper/>
   </Box>
  )
}

export default Body5
