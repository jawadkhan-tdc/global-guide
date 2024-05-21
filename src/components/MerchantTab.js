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

const MerchantTab = ({ merchants, companyId }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/merchant?companyId=${encodeURIComponent(companyId)}`);
  };

  const handleMerchantClick = (id) => {
    router.push(
      `/branddata?merchantId=${encodeURIComponent(
        id
      )}&company=${encodeURIComponent(companyId)}`
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
          Merchants Data
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Add Merchants
        </Button>
      </div>
      <Grid container spacing={2} mt={2}>
        {merchants.length > 0 ? (
          merchants.map((merchant, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{ cursor: "pointer" }}
                onClick={() => handleMerchantClick(merchant?.id)}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={merchant.image}
                  alt={merchant.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {merchant.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {merchant.country}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="textSecondary">
            No Merchants added.
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default MerchantTab;
