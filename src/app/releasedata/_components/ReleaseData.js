"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

function ReleaseData() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [releases, setReleases] = useState([]);
  const [company, setCompany] = useState(0);
  const [brandId, setBrandId] = useState(0);
  const [merchantId, setMerchantId] = useState(0);
  const [distelleryId, setDistilleryId] = useState(0);

  const companyData = useSelector((state) => state.company.company);

  const getBrandReleases = (brandId) => {
    const brandIdAsNumber = parseInt(brandId, 10);
    const brand = companyData?.brands?.find((b) => b.id === brandIdAsNumber);
    return brand ? brand.releases : [];
  };

  const getMerchantBrandReleases = (merchantId, brandId) => {
    const merchantIdAsNumber = parseInt(merchantId, 10);
    const brandAsNumber = parseInt(brandId, 10);

    const merchantData = companyData?.merchants?.find(
      (m) => m.id === merchantIdAsNumber
    );

    if (merchantData) {
      const brand = merchantData.brands?.find((b) => b.id === brandAsNumber);
      return brand ? brand.releases : [];
    }
    return [];
  };

  const getDistilleryBrandReleases = (distilleryId, brandId) => {
    const distilleryIdAsNumber = parseInt(distilleryId, 10);
    const brandAsNumber = parseInt(brandId, 10);

    const distilleryData = companyData?.distilleries?.find(
      (d) => d.id === distilleryIdAsNumber
    );

    if (distilleryData) {
      const brand = distilleryData.brands?.find((b) => b.id === brandAsNumber);
      return brand ? brand.releases : [];
    }
    return [];
  };

  const handleAddReleaseClick = () => {
    router.push(
      `/adminrelease?brandId=${encodeURIComponent(
        brandId
      )}&company=${encodeURIComponent(company)}`
    );
  };

  useEffect(() => {
    const brand = searchParams.get("brandId");
    const company = searchParams.get("company");
    const merchant = searchParams.get("merchantId");
    const distellery = searchParams.get("distilleryId");
    if (brand) {
      //   console.log("brand and brand only");
      setBrandId(brand);
      setReleases(getBrandReleases(brand));
    }
    if (company) {
      setCompany(company);
    }
    if (merchant) {
      //   console.log("brand and merchant");
      setMerchantId(merchant);
      setReleases(getMerchantBrandReleases(merchant, brand));
    }
    if (distellery) {
      //   console.log("brand and distillery");
      setDistilleryId(distellery);
      setReleases(getDistilleryBrandReleases(distellery, brand));
    }
  }, []);

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" color={"white"} mt={4}>
          Release Data
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddReleaseClick}
        >
          Add Release
        </Button>
      </Box>
      <Grid container spacing={2}>
        {releases.length === 0 ? (
          <Box sx={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Typography variant="body1" color="#FFF" align="center">
              No releases added yet.
            </Typography>
          </Box>
        ) : (
          releases.map((release, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={release.image}
                  alt={release.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {release.name}
                  </Typography>
                  {/* <Typography variant="body2" color="textSecondary">
                    {release.country}
                  </Typography> */}
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default ReleaseData;
