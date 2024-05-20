import React from 'react'
import { Divider, Box } from '@mui/material'

import DistilleryCard from './DistelleryCard';
import Heading from "@/components/Heading";
import CustomAutocomplete from "@/components/CustomAutocomplete";

const LeftSection = ({dataArray, isMobile}) => {
    return (
        <>
            {/* Heading */}
            <Box mt={2} ml={3} mb={1}>
                <Heading headingName="Distelleries" color='#fff' textTransform="uppercase" variant="h6" textAlign="start" />
            </Box>
            <Divider variant='fullWidth' sx={{ backgroundColor: '#666' }} />

            {/* Search Components  */}
            <Box mt={2} mb={1} display="flex" flexDirection={isMobile? 'column': 'row'} justifyContent={isMobile? 'flex-start': "space-between"} mx="auto" width="90%">
                <Box display="flex" flexDirection={isMobile? 'column': 'row'}>
                    {/* Filter */}
                    <CustomAutocomplete labelName="Filter" width={90} />
                    {/* Sort By */}
                    <CustomAutocomplete labelName="Sort By: Newest/Recent/top Appreciated" width={isMobile? 250: 350} />
                </Box>

                <Box>
                    {/* Search */}
                    <CustomAutocomplete width={90} getSearchIcon={true} />
                </Box>
            </Box>

            <Box mb={3}>
            {/* Cards */}
            <DistilleryCard dataArray={dataArray} isMobile={isMobile} />
            </Box>
        </>
    )
}

export default LeftSection
