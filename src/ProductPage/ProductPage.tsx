import { Box, Grid } from "@mui/material";
import React from "react";
import { ImageGrid } from "./components/ImageGrid";
import { Info } from "./components/Info";
import { MainImage } from "./components/MainImage";

export function ProductPage() {
  const images = [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e425b9bb-d388-475f-a646-a44ff62f10f1/sportswear-swoosh-mens-woven-jacket-zwnqMl.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e425b9bb-d388-475f-a646-a44ff62f10f1/sportswear-swoosh-mens-woven-jacket-zwnqMl.jpg",
  ];
  return (
    <Box>
      <Grid container>
        <Grid item sm={1}>
          <ImageGrid images={images} />
        </Grid>
        <Grid item sm={5}>
          <MainImage />
        </Grid>
        <Grid item sm={6}>
          <Info />
        </Grid>
      </Grid>
    </Box>
  );
}
