"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import api from 'lib/services/api';
import { useSelector } from 'react-redux';

function BrandData() {
    const searchParams = useSearchParams()
    const [brands, setBrands] = useState([]);
    const [merchantId, setMerchantId] = useState(0);
    const [distelleryId, setDistilleryId] = useState(0);

    const companyData = useSelector(state => state.company.company);

    console.log('company data is', companyData)

    const getMerchantBrands = merchantId => {
        const merchant = companyData?.merchants?.find(m => m.id === merchantId);
        return merchant ? merchant.brands : [];
    };

    const getDistilleryBrands = distilleryId => {
        const distillery = companyData?.distilleries?.find(
            d => d.id === distilleryId,
        );
        return distillery ? distillery.brands : [];
    };

    const router = useRouter();
    const handleClick = () => {
        router.push("/brand")
    }

    useEffect(() => {
        const merchant = searchParams.get('merchantId');
        const distellery = searchParams.get('distilleryId');
        if (merchant) {
            setMerchantId(merchant)
            setBrands(getMerchantBrands(merchant))
        }
        if (distellery) {
            setDistilleryId(distellery)
            console.log('company data distil id is', distellery)
            console.log('company data brands are ', getDistilleryBrands(distellery))
            setBrands(getDistilleryBrands(distellery))
        }
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <Typography variant="h4" color={"white"} mt={4}>Brand Data</Typography>
                <Button variant="contained" color="primary" onClick={handleClick}>Add Brand</Button>
            </div>
            <Grid container spacing={2}>
                {brands.map((brand, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={brand.image}
                                alt={brand.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {brand.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {brand.country}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default BrandData;
