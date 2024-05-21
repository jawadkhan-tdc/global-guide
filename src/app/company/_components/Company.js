"use client";
import React, { useState } from "react";
import { Box, Button, TextField, Grid, Avatar, Typography, MenuItem, Select } from "@mui/material";
import CustomButton from "@/components/CustomButton";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import CountriesList from "@/components/CountriesList";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import api from "lib/services/api";

const Company = ({ handleCloseModal, isMobile }) => {
    const [file, setFile] = useState(null);
    const [countries] = useState(CountriesList);

    const [error, setError] = useState(null);
    const [changeContent, setChangeContent] = useState(false);
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            image: '',
            name: '',
            country: '',
        },
        onSubmit: async (data, { resetForm }) => {
            try {
                const formDataToSend = new FormData();
                formDataToSend.append('image', file);

                const imageResponse = await api.post(
                    "image/upload",
                    formDataToSend,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                );

                const imageUrl = imageResponse?.data?.url;

                const formData = {
                    image: imageUrl,
                    name: data.name,
                    country: data.country,
                }

                console.log('form data is', formData)

                const response = await api.post(
                    '/company',
                    formData
                );

                console.log('New Company created:', response.data);
                const companyId = response?.data?.id;
                console.log('companyId', companyId);
                localStorage.setItem('companyId', companyId);
                toast.success('Company created successfully!');
                router.push('/companydata')
                resetForm();
                setFile(null);
                setError(null);
            } catch (error) {
                console.error('Error creating Company:', error);
                setError(error.message || 'An error occurred while creating the Company.');
                toast.error('An error occurred while creating the Company.');
            }
        }
    })

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
            {/* Modal Form Component */}
            <Box sx={{
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: isMobile ? '300px' : '600px',
                margin: 'auto',
            }}>
                {/* Close Button */}
                <Box width="100%">
                    <Button onClick={handleCloseModal}
                        sx={{
                            color: '#fff',
                            cursor: 'pointer',
                            float: 'right',
                            left: '40px'
                        }}>
                        {/* <CloseIcon /> */}
                    </Button>
                </Box>

                {/* Heading */}
                <Box mb={2} width="100%" sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "32px", color: "white", mb: 5, mt: 10 }}>Create Company</Typography>
                </Box>

                {/* Avatar with File Input */}
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

                {/* TextFields */}
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
                </Grid>

                {/* Next Button */}
                <Box mb={2} mt={5} width="100%" textAlign="center">
                    <CustomButton onClick={formik.handleSubmit} btnName={changeContent ? 'Next' : 'Create'} width="100%" fontWeight={700} borderRadius={1} />
                </Box>
                <ToastContainer />
            </Box>
        </>
    );
}

export default Company;
