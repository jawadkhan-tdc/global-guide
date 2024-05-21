"use client";
import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";

const BrandTab = ({ brands, companyId }) => {
  const router = useRouter();

  const handleAddBrandClick = () => {
    router.push(
      `/brand?companyId=${encodeURIComponent(
        companyId
      )}&company=${encodeURIComponent(companyId)}`
    );
  };

  const handleBrandClick = (id) => {
    router.push(
      `/releasedata?company=${encodeURIComponent(
        companyId
      )}&brandId=${encodeURIComponent(id)}`
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" color={"white"} mt={4}>
          Brands Data
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddBrandClick}
        >
          Add Brand
        </Button>
      </div>
      <Grid container spacing={2} mt={2}>
        {brands.length > 0 ? (
          brands.map((brand, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card onClick={() => handleBrandClick(brand?.id)}>
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
        ) : (
          <Typography variant="h6" color="textSecondary">
            No Brands added.
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default BrandTab;
