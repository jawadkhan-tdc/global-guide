"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import api from 'lib/services/api';

function CompanyData() {
    const [distilleries, setDistilleries] = useState([]);
    const router = useRouter();

    const handleClickdata = (id) => {
        router.push(`/adminhome?id=${encodeURIComponent(id)}`);
    };

    const handleClick = () => {
        router.push("/company");
    };

    useEffect(() => {
        const fetchDistilleries = async () => {
            try {
                const response = await api.get('/company');
                setDistilleries(response.data);
            } catch (error) {
                console.error('Error fetching company data:', error);
            }
        };

        fetchDistilleries();
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <Typography variant="h4" color={"white"} mt={4}>Company Data</Typography>
                <Button variant="contained" color="primary" onClick={handleClick}>Add Company</Button>
            </div>
            <Grid container spacing={2}>
                {distilleries.map((distillery, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card onClick={() => handleClickdata(distillery.id)}>
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
        </div>
    );
}

export default CompanyData;
