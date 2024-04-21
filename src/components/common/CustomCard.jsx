import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

const CustomCard = ({ img, title, info, link }) => {
  return (
    <Grid xs={12} sm={12} md={6} lg={3} xl={3} sx={{ p: 2 }}>
      <a href={link} target="_blank">
        <Card sx={{ height: "100%" }}>
          <CardActionArea>
            <CardMedia component="img" image={img} alt={title} height="250vh" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "justify" }}
              >
                {info}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </Grid>
  );
};

export default CustomCard;
