"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import api from 'lib/services/api';

function MerchantData() {
    const [distilleries, setDistilleries] = useState([]);
    const [companyId, setCompanyId] = useState(null);

    const router = useRouter();
    const handleClick = () => {
        router.push("/merchant")
    }
    const handleNextClick = () => {
        router.push("/brands")
    }

    useEffect(() => {
        const storedCompanyId = localStorage.getItem('companyId');
        if (storedCompanyId) {
            setCompanyId(parseInt(storedCompanyId));
        }

        if (storedCompanyId) {
            api.get('/merchant')
                .then(response => {
                    const filteredDistilleries = response.data.filter(distillery => distillery.companyId === parseInt(storedCompanyId));
                    setDistilleries(filteredDistilleries);
                })
                .catch(error => console.error('Error fetching distillery data:', error));
        }
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <Typography variant="h4" color={"white"} mt={4}>Merchant Data</Typography>
                <Button variant="contained" color="primary" onClick={handleClick}>Add Merchant</Button>
            </div>
            <Grid container spacing={2}>
                {distilleries.map((distillery, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={distillery.image}
                                alt={distillery.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {distillery.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {distillery.country}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button variant="contained" color="primary" onClick={handleNextClick} sx={{ float: "right", width: "150px", mt : 10, mb : 10, mr : 2 }}>Next</Button>
        </div>
    );
}

export default MerchantData;
