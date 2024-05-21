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

const DistilleryTab = ({ distilleries, companyId }) => {
  const router = useRouter();

  const handleAddDistilleryClick = () => {
    router.push(`/distellery?companyId=${encodeURIComponent(companyId)}`);
  };

  const handleDistilleryClick = (id) => {
    router.push(
      `/branddata?distilleryId=${encodeURIComponent(
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
          Distillery Data
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddDistilleryClick}
        >
          Add Distillery
        </Button>
      </div>
      <Grid container spacing={2} mt={2}>
        {distilleries.length > 0 ? (
          distilleries.map((distillery, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{ cursor: "pointer" }}
                onClick={() => handleDistilleryClick(distillery?.id)}
              >
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
          ))
        ) : (
          <Typography variant="h6" color="textSecondary">
            No distilleries added.
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default DistilleryTab;
