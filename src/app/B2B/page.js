"uae client"
import { Box } from '@mui/material'
import React from 'react'

import Navbar from '@/components/Navbar'
import ListOfComapanies from './companies/_components/ListOfComapanies'

const page = () => {
  return (
    <Box>
      <Navbar/>
      <ListOfComapanies/>
    </Box>
  )
}

export default page
