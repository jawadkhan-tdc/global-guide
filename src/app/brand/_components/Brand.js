"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Grid,
  Avatar,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import CountriesList from "@/components/CountriesList";
import api from "lib/services/api";
import "react-toastify/dist/ReactToastify.css";
import CustomButton from "@/components/CustomButton";

const Brand = ({ isMobile }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [countries] = useState(CountriesList);
  const [company, setCompany] = useState(0);
  const [companyId, setCompanyId] = useState(0);
  const [merchantId, setMerchantId] = useState(0);
  const [distelleryId, setDistilleryId] = useState(0);

  useEffect(() => {
    const company = searchParams.get("company");
    const id = searchParams.get("companyId");
    if (id) setCompanyId(id);
    if (company) setCompany(company);
    const merchant = searchParams.get("merchantId");
    const distellery = searchParams.get("distilleryId");
    if (merchant) {
      console.log("form data merchant", merchant);
      setMerchantId(merchant);
    }
    if (distellery) {
      console.log("form data distellery", distellery);
      setDistilleryId(distellery);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      country: "",
      companyId: companyId || null,
      merchantId: merchantId || null,
      distilleryId: distelleryId || null,
    },
    enableReinitialize: true,
    onSubmit: async (data) => {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("image", file);

        const imageResponse = await api.post("/image/upload", formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const imageUrl = imageResponse?.data?.url;

        const formData = {
          image: imageUrl,
          name: data.name,
          country: data.country,
          companyId: companyId ? parseInt(companyId) : null,
          merchantId: merchantId ? parseInt(merchantId) : null,
          distilleryId: distelleryId ? parseInt(distelleryId) : null,
        };

        console.log("form data is", formData);

        const response = await api.post("/brand", formData);
        toast.success("Brand created successfully!");

        // const brandId = response.data.id;
        // localStorage.setItem("brandId", brandId);
        router.push(`/adminhome?id=${encodeURIComponent(company)}`);
        formik.resetForm();
        setFile(null);
      } catch (error) {
        console.error("Error creating Distillery or Brand:", error);
        setError(
          error.message || "An error occurred while creating the Brand."
        );
      }
    },
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const imageUrl = URL.createObjectURL(file);
    formik.setFieldValue("image", imageUrl);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "companyId") {
      const newValue = parseInt(value);
      formik.setFieldValue(name, newValue);
    } else {
      formik.setFieldValue(name, value);
    }
  };

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          maxWidth: isMobile ? "300px" : "600px",
          margin: "auto",
        }}
      >
        <Box mb={2} width="100%" sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "32px",
              color: "white",
              mb: 5,
              mt: 10,
            }}
          >
            Create Brand
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 4 }}>
          <Box>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="avatar-upload"
              type="file"
              onChange={handleFileUpload}
            />
            {formik.values.image ? (
              <Avatar
                src={formik.values.image}
                style={{ width: "100px", height: "100px" }}
              />
            ) : (
              <label htmlFor="avatar-upload">
                <Avatar
                  style={{ width: "100px", height: "100px", cursor: "pointer" }}
                />
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
              sx={{ backgroundColor: "white", borderRadius: "5px", mt: 5 }}
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
              sx={{ backgroundColor: "white", borderRadius: "5px", mt: 2 }}
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
          <CustomButton
            onClick={formik.handleSubmit}
            btnName="Create"
            width="100%"
            fontWeight={700}
            borderRadius={1}
          />
        </Box>
        <ToastContainer />
      </Box>
    </>
  );
};

export default Brand;
