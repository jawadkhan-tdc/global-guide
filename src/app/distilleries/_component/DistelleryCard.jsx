import React from 'react'
import { Card, CardMedia, CardContent, Grid, Typography, Box } from '@mui/material'
import { useRouter } from 'next/navigation';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import CustomButton from '@/components/CustomButton';

const dummyData = [
    {
        id: 0,
        distelleryName: 'Lorum Ispum',
        distelleryImg: '/Rectangle 24.jpg',
        discription: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
        id: 1,
        distelleryName: 'Lorum Ispum',
        distelleryImg: '/Rectangle 24.jpg',
        discription: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
        id: 2,
        distelleryName: 'Lorum Ispum',
        distelleryImg: '/Rectangle 24.jpg',
        discription: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
        id: 3,
        distelleryName: 'Lorum Ispum',
        distelleryImg: '/Rectangle 24.jpg',
        discription: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
];


const DistilleryCard = ({ dataArray, isMobile }) => {
    const router = useRouter();
    return (
        <>
            <Grid ml={isMobile? 2: 5} container rowSpacing={3}>
                {dummyData.map((item) => (
                    <Grid item xs={12} key={item.id}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                // flexDirection: 'row',
                                // maxWidth: isMobile ? 380 : 780,
                                maxWidth: '90%',
                                borderRadius: "10px",
                                border: '1px solid #fff',
                                backgroundColor: '#222',
                                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <CardMedia
                                sx={{
                                    width: isMobile ? '100%' : '35%',
                                    height: isMobile ? 150 : 'auto'
                                }}
                                image={item.distelleryImg}
                            />
                            <CardContent sx={{ width: isMobile ? '100%' : '65%' }}>
                                {/* Distillery Name */}
                                <Typography
                                    fontWeight={600}
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    color="#fff"
                                >
                                    {item.distelleryName}
                                </Typography>
                                {/* Distillery Discription */}
                                <Typography
                                    // fontWeight={600}
                                    gutterBottom
                                    variant="p"
                                    component="div"
                                    color="#fff"
                                    textAlign={'justify'}
                                    pr={4}
                                >
                                    {item.discription}
                                </Typography>

                                {/* Country Name */}
                                {/* <Typography
                                    fontWeight={600}
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {item.distelleryCountry}
                                </Typography> */}

                                {/* View Detail Button */}
                                <Box textAlign="end" mr={3} display={'flex'} justifyContent={isMobile? 'center': 'flex-end'} alignItems="center">
                                    <Box sx={{ cursor: 'pointer' }} width={isMobile? '45%': '40%'} display="flex" alignItems="center" justifyContent="space-around" mt={2} backgroundColor="#BA9775" px={1}>
                                        <CustomButton
                                            onClick={() => router.push('/distilleries/details')}
                                            btnName="Explore more"
                                            // width="35%"
                                            fontWeight={500}
                                            color="#fff"
                                            backgroundColor="transparent"
                                            textTransform="Capitalize"
                                            padding='0px'
                                            noHoverBgClr={true}
                                            // paddingRight='12px'
                                            variant='text'
                                            sx={{ display: 'flex', alignItems: 'center', border:0, }}
                                        />
                                        {/* Arrow */}
                                        <Box
                                            sx={{
                                                color: '#fff',
                                            }}
                                        >
                                            <ArrowRightAltIcon />
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default DistilleryCard
