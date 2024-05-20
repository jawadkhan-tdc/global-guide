import React from 'react'
import { Grid, Box, Typography, FormControlLabel, Radio, Paper } from '@mui/material'

const RightSection = ({ isMobile }) => {
    return (
        <>
            <Grid item xs={12}>
                <Box display={'flex'} flexDirection={'column'} sx={{ height: "100%" }} gap={3}>

                    {/* Polls */}
                    <Box component={Paper} backgroundColor="#222" borderRadius={2}>
                        <Box p={3}>
                            <Typography variant="h5" color={'#fff'} fontWeight={700} gutterBottom>
                                POLLS
                            </Typography>
                            <Typography variant="body1" color={'#fff'} gutterBottom>
                                Which of proposed products you would prefer?
                            </Typography>
                            <Box>
                                <FormControlLabel
                                    control={<Radio />}
                                    id='A'
                                    label="{Product A}"
                                    labelPlacement="end"
                                    sx={{ color: '#6D8190' }}
                                />
                                <FormControlLabel
                                    control={<Radio />}
                                    id='B'
                                    label="{Product B}"
                                    labelPlacement="end"
                                    sx={{ color: '#6D8190' }}
                                />
                            </Box>
                            <Box>
                                <FormControlLabel
                                    control={<Radio />}
                                    label="{Product C}"
                                    labelPlacement="end"
                                    sx={{ color: '#6D8190' }}
                                />
                                <FormControlLabel
                                    control={<Radio />}
                                    label="{Product D}"
                                    labelPlacement="end"
                                    sx={{ color: '#6D8190' }}
                                />
                            </Box>
                        </Box>
                    </Box>

                    {/* Notifications */}
                    <Box component={Paper} backgroundColor="#222" borderRadius={2}>
                        <Box p={3}>
                            <Typography variant="h5" color={'#fff'} fontWeight={700} gutterBottom>
                                3 NOTIFICATIONS
                            </Typography>
                            <Typography variant="body1" color={'#fff'} gutterBottom>
                                Subscription renewal required
                            </Typography>
                            <Box mt={2} display={'flex'} justifyContent={'space-between'}>
                                <Box>
                                    <img src="/Group 427319128.png" alt="" />
                                    <img style={{ marginLeft: '10px' }} src="/Group.png" alt="" />
                                </Box>
                                <Box gap={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <img style={{ color: 'darkgoldenrod' }} src="/Group 427319129.png" alt="" />
                                    <Typography variant={isMobile ? "body1" : "h6"} color={'#BA9775'} >Renew</Typography>
                                </Box>
                            </Box>
                            <Box mt={2} display={'flex'} justifyContent={'space-between'}>
                                <Box>
                                    <img src="/Group 427319128.png" alt="" />
                                    <img style={{ marginLeft: '6px' }} src="/Mask group.png" alt="" />
                                </Box>
                                <Box gap={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <img style={{ color: 'darkgoldenrod' }} src="/Group 427319129.png" alt="" />
                                    <Typography variant={isMobile ? "body1" : "h6"} color={'#BA9775'} >Renew</Typography>
                                </Box>
                            </Box>
                            <Box mt={2} display={'flex'} justifyContent={'space-between'}>
                                <Box display={'flex'}>
                                    <img src="/Group 427319180.png" alt="" />
                                    <Typography ml={1} color={'white'} variant={isMobile ? "body1" : "h6"}>You review was published</Typography>
                                </Box>
                                <Box gap={1} display={'flex'} justifyContent={'center'}>
                                    <Typography variant={isMobile ? "body1" : "h6"} color={'#BA9775'} >View Posting</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Favourite Brands */}
                    <Box component={Paper} backgroundColor="#222" borderRadius={2}>
                        <Box p={3}>
                            <Typography variant="h5" color={'white'} fontWeight={500} gutterBottom>
                                FAVORITE BRANDS
                            </Typography>
                            <Box mt={2} gap={0} display={'flex'} justifyContent={'space-between'}>
                                <Box width="33%" display={'flex'} justifyContent={'center'} px={isMobile ? 2 : 3} py={isMobile ? 3 : 3} borderRadius={4} sx={{ backgroundColor: '#444' }}>
                                    <img src="/bowmore-logo-white 2.png" alt="" width={isMobile? 100 :140} />
                                </Box>
                                <Box width="33%" px={isMobile ? 2 : 3} py={isMobile ? 3 : 3} borderRadius={4} sx={{ backgroundColor: '#BA9775' }}>
                                    <Typography textAlign={'center'} color={'white'} variant={isMobile ? "body1" : "h6"}>Explore the Brand  </Typography>
                                </Box>
                            </Box>
                            <Box mt={2}>
                                <Typography variant="h7" color={'#999'}>ABOUT</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body1" color={'white'}>Found in 1911, lorem ipsum this cognac has a very pleasant golden tint and the aromatics show classic scents of baked, white grapes, hard lemon candy, and opulent French oak. </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default RightSection
