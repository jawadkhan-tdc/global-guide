import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function MediaCard({ data, height, width }) {
  return (
    <Grid item xs={12} lg={12}>
      <Card sx={{ maxWidth: width || 345, backgroundColor: "black" }}>
        <CardMedia
          sx={{ height: height || 180 }}
          image={data.image}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div" color={"white"}>
            {data.description}
          </Typography>
          <Typography variant="h6" color={"#BA9775"}>
            {data.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
