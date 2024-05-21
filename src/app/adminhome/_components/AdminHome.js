// app/adminhome/page.js
"use client";
import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, Tabs, Tab } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import DistilleryTab from '@/components/DistilleryTab';
import BrandTab from '@/components/BrandTab';
import MerchantTab from '@/components/MerchantTab';
import { useDispatch } from 'react-redux';
import { fetchCompanyData, updateCompany } from 'lib/redux/slices/companySlice/companySlice';

function AdminHome() {

    const dispatch = useDispatch()
    const router = useRouter();
    const [companyId, setCompanyId] = useState(0)
    const [tabIndex, setTabIndex] = useState(0);
    const [brands, setBrands] = useState([]);
    const [merchants, setMerchants] = useState([]);
    const [distilleries, setDistilleries] = useState([]);


    const searchParams = useSearchParams();


    useEffect(() => {
        const id = searchParams.get('id');
        if (id)
            setCompanyId(id)
        if (id) {
            const fetchCompany = async () => {
                try {
                    const response = await dispatch(fetchCompanyData(id))
                    console.log('company data in thunk is', response?.payload)
                    dispatch(updateCompany(response?.payload))
                    setBrands(response?.payload?.brands);
                    setMerchants(response?.payload?.merchants);
                    setDistilleries(response?.payload?.distilleries);
                } catch (error) {
                    console.error('Error fetching distillery data:', error);
                }
            };
            fetchCompany();
        }
    }, []);

    const handleClick = (role, id) => {
        localStorage.setItem('role', role);
    };

    return (
        <Box style={{ display: 'flex', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: 15 }}>
            <Box>
                <Typography variant="h4" color={"white"} gutterBottom mt={3}>Welcome to Admin Home</Typography>
            </Box>
            <Box width="80%">
                <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)} centered>
                    <Tab label="Distillery" sx={{ color: 'white' }} />
                    <Tab label="Brand" sx={{ color: 'white' }} />
                    <Tab label="Merchant" sx={{ color: 'white' }} />
                </Tabs>

                <Box mt={2}>
                    {tabIndex === 0 && <DistilleryTab distilleries={distilleries} companyId={companyId} />}
                    {tabIndex === 1 && <BrandTab brands={brands} companyId={companyId} />}
                    {tabIndex === 2 && <MerchantTab merchants={merchants} companyId={companyId} />}
                </Box>
            </Box>
        </Box>
    );
}

export default AdminHome;

