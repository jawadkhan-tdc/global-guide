"use client";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Box, Button, TextField, Grid, Avatar, Typography, MenuItem } from "@mui/material";
import CustomButton from "@/components/CustomButton";
import { useFormik } from "formik";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import CountriesList from "@/components/CountriesList";

const Merchant = ({ handleCloseModal, isMobile }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [changeContent, setChangeContent] = useState(null);
    const [companyId, setCompanyId] = useState(null);
    const router = useRouter();
    const [countries] = useState(CountriesList);


    useEffect(() => {
        const storedCompanyIdd = localStorage.getItem('companyId');
        if (storedCompanyIdd) {
            setCompanyId(parseInt(storedCompanyIdd));
        }
    }, []);

    useEffect(() => {
        if (companyId !== null) {
            formik.setFieldValue('companyId', companyId);
        }
    }, [companyId]);

    const formik = useFormik({
        initialValues: {
            image: '',
            name: '',
            country: '',
            companyId: companyId || 0,
        },
        enableReinitialize: true,
        onSubmit: async (data, { resetForm }) => {
            try {
                const formDataToSend = new FormData();
                formDataToSend.append('image', file);

                const imageResponse = await axios.post(
                    "http://ec2-13-48-130-219.eu-north-1.compute.amazonaws.com/image/upload",
                    formDataToSend,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                );

                const imageUrl = imageResponse?.data?.url;

                const distilleryData = {
                    image: imageUrl,
                    name: data.name,
                    country: data.country,
                    companyIdd: data.companyId, // Include the fetched company ID as companyIdd
                };

                const distilleryResponse = await axios.post(
                    'http://ec2-13-48-130-219.eu-north-1.compute.amazonaws.com/merchant',
                    distilleryData
                );

                console.log('New Merchant created:', distilleryResponse.data);

                // Handle success
                toast.success('Merchant created successfully!');
                setError(null);
                router.push('/brands');
                resetForm();
                setFile(null);
            } catch (error) {
                console.error('Error creating Merchant:', error);
                setError(error.message || 'An error occurred while creating the Merchant.');
            }
        }
    });

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setFile(file);
        const imageUrl = URL.createObjectURL(file);
        formik.setFieldValue('image', imageUrl);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        formik.setFieldValue(name, value);
    };

    return (
        <>
            <Box sx={{
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: isMobile ? '300px' : '600px',
                margin: 'auto',
            }}>
               
                <Box mb={2} width="100%" sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "32px", color: "white", mb: 5, mt: 10 }}>Create Merchant</Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 4 }}>
                    <Box>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="avatar-upload"
                            type="file"
                            onChange={handleFileUpload}
                        />
                        {formik.values.image ? (
                            <Avatar src={formik.values.image} style={{ width: '100px', height: '100px' }} />
                        ) : (
                            <label htmlFor="avatar-upload">
                                <Avatar style={{ width: '100px', height: '100px', cursor: 'pointer' }} />
                            </label>
                        )}
                    </Box>
                    <Box>
                        <Typography sx={{ color: "white", mt: 5 }}>Attach Image</Typography>
                    </Box>
                </Box>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <TextField
                            label="Name"
                            name="name"
                            value={formik.values.name}
                            onChange={handleChange}
                            fullWidth
                            sx={{ backgroundColor: 'white', borderRadius: '5px', mt: 5 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            select
                            label="Country"
                            name="country"
                            value={formik.values.country}
                            onChange={handleChange}
                            fullWidth
                            sx={{ backgroundColor: 'white', borderRadius: '5px', mt: 2 }}
                        >
                            {countries.map((country) => (
                                <MenuItem key={country.name} value={country.name}>
                                    {country.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    {/* <Grid item xs={12} md={12}>
                        <TextField
                            label="Company ID"
                            name="companyId"
                            value={formik.values.companyId}
                            onChange={handleChange}
                            type="number"
                            fullWidth
                            sx={{ backgroundColor: 'white', borderRadius: '5px', mt: 2 }}
                        />
                    </Grid> */}
                </Grid>

                <Box mb={2} mt={5} width="100%" textAlign="center">
                    <CustomButton onClick={formik.handleSubmit} btnName={changeContent ? 'Next' : 'Next'} width="100%" fontWeight={700} borderRadius={1} />
                </Box>
            </Box>
        </>
    )
}

export default Merchant;
