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
import api from "lib/services/api";
import { useSelector } from "react-redux";

function BrandData() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [brands, setBrands] = useState([]);
  const [companyId, setCompanyId] = useState(0);
  const [merchantId, setMerchantId] = useState(0);
  const [distelleryId, setDistilleryId] = useState(0);

  const companyData = useSelector((state) => state.company.company);

  const getMerchantBrands = (merchantId) => {
    const merchantIdAsNumber = parseInt(merchantId, 10);

    const merchant = companyData?.merchants?.find(
      (m) => m.id === merchantIdAsNumber
    );
    return merchant ? merchant.brands : [];
  };

  const getDistilleryBrands = (distilleryId) => {
    const distilleryIdAsNumber = parseInt(distilleryId, 10);

    const distillery = companyData?.distilleries?.find(
      (d) => d.id === distilleryIdAsNumber
    );
    return distillery ? distillery.brands : [];
  };

  const handleAddBrandClick = () => {
    if (merchantId)
      router.push(
        `/brand?merchantId=${encodeURIComponent(
          merchantId
        )}&company=${encodeURIComponent(companyId)}`
      );
    else if (distelleryId)
      router.push(
        `/brand?distilleryId=${encodeURIComponent(
          distelleryId
        )}&company=${encodeURIComponent(companyId)}`
      );
  };

  const handleBrandClick = (brandId) => {
    if (merchantId)
      router.push(
        `/releasedata?merchantId=${encodeURIComponent(
          merchantId
        )}&company=${encodeURIComponent(
          companyId
        )}&brandId=${encodeURIComponent(brandId)}`
      );
    else if (distelleryId)
      router.push(
        `/releasedata?distilleryId=${encodeURIComponent(
          distelleryId
        )}&company=${encodeURIComponent(
          companyId
        )}&brandId=${encodeURIComponent(brandId)}`
      );
  };

  useEffect(() => {
    const company = searchParams.get("company");
    const merchant = searchParams.get("merchantId");
    const distellery = searchParams.get("distilleryId");
    if (company) {
      setCompanyId(company);
    }
    if (merchant) {
      setMerchantId(merchant);
      setBrands(getMerchantBrands(merchant));
    }
    if (distellery) {
      setDistilleryId(parseInt(distellery));
      setBrands(getDistilleryBrands(parseInt(distellery)));
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
          Brand Data
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddBrandClick}
        >
          Add Brand
        </Button>
      </Box>
      <Grid container spacing={2}>
        {brands.length === 0 ? (
          <Box
            sx={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="#FFF" variant="h4" align="center">
              No brands added yet.
            </Typography>
          </Box>
        ) : (
          brands.map((brand, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{ cursor: "pointer" }}
                onClick={() => handleBrandClick(brand?.id)}
              >
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
          ))
        )}
      </Grid>
    </Box>
  );
}

export default BrandData;
