"use client";
import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Grid, Avatar, Typography, Select, MenuItem } from "@mui/material";
import CustomButton from "@/components/CustomButton";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter, useSearchParams } from "next/navigation";
import CountriesList from "@/components/CountriesList";
import 'react-toastify/dist/ReactToastify.css';
import api from "lib/services/api";

const Distillery = ({ isMobile }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [changeContent, setChangeContent] = useState(null);
    const [companyId, setCompanyId] = useState(0);
    const router = useRouter();
    const [countries] = useState(CountriesList);
    const searchParams = useSearchParams()

    useEffect(() => {
        const id = searchParams.get('companyId');
        if (id)
            setCompanyId(id)
    }, []);


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

                const imageResponse = await api.post(
                    "/image/upload",
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
                    companyId: parseInt(companyId),
                };

                const distilleryResponse = await api.post(
                    '/distillery',
                    distilleryData
                );

                console.log('New Distillery created:', distilleryResponse.data);
                toast.success('Distillery created successfully!');
                router.push(`/adminhome?id=${encodeURIComponent(companyId)}`);

                const brandData = {
                    image: imageUrl,
                    companyId: data.companyId,
                    name: data.name,
                    country: data.country,
                    distilleryId: distilleryResponse.data.id,
                    merchantId: null,
                };

                const brandResponse = await api.post(
                    '/brand',
                    brandData
                );

                console.log('New Brand created:', brandResponse.data);
                setError(null);
                resetForm();
                setFile(null);
            } catch (error) {
                console.error('Error creating Distillery or Brand:', error);
                toast.error(error.message || 'An error occurred while creating the Brand.');
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
                    <Typography sx={{ fontWeight: 700, fontSize: "32px", color: "white", mb: 5, mt: 10 }}>Create Distillery</Typography>
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
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
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
                            error={formik.touched.country && Boolean(formik.errors.country)}
                            helperText={formik.touched.country && formik.errors.country}
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
                    <CustomButton onClick={formik.handleSubmit} btnName={changeContent ? 'Next' : 'Create'} width="100%" fontWeight={700} borderRadius={1} />
                </Box>
                <ToastContainer />
            </Box>
        </>
    )
}

export default Distillery;
