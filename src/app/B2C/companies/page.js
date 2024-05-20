"use client"
import React from 'react'
import ListOfComapanies from './_components/ListOfComapanies'
import { Box } from '@mui/material'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <Box>
        <Navbar/>
      <ListOfComapanies/>
    </Box>
  )
}

export default page
