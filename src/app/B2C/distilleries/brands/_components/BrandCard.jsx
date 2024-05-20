import React from 'react'
import { Card, CardMedia, CardContent, Grid, Typography, Box } from '@mui/material'

import CustomButton from '@/components/CustomButton';
import { useRouter } from 'next/navigation';

const BrandCard = ({dataArray, isMobile}) => {
    const router = useRouter();
    return (
        <>
            <Grid p={isMobile ? 2 : 4} mt={isMobile ? 2 : 0} container spacing={6}>
                {dataArray.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.brandName}>
                        <Card
                            sx={{
                                maxWidth: isMobile ? 380 : 450,
                                borderRadius: "10px",
                                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <CardMedia sx={{ height: 250 }} image={item.distelleryBrandImg} />
                            <CardContent>
                                {/* Brand Name */}
                                <Typography
                                    fontWeight={600}
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {item.brandName}
                                </Typography>
                                {/* Country Name */}
                                <Typography
                                    fontWeight={600}
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {item.brandCountry}
                                </Typography>
                                {/* View Detail Button */}
                                <Box textAlign="center">
                                    <CustomButton onClick={() =>router.push('/distilleries/brands/release')} btnName="View Details" width="50%" fontWeight={700} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default BrandCard
