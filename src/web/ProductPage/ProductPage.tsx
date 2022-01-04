import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { ImageGrid } from "./components/ImageGrid";
import { Info } from "./components/Info";
import { MainImage } from "./components/MainImage";
const images = [
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e425b9bb-d388-475f-a646-a44ff62f10f1/sportswear-swoosh-mens-woven-jacket-zwnqMl.jpg",
  "https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG",
];

const product = { title: "hoodie", description: "lorem ipsum", price: "$44" };
export function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <Box>
      <Grid container sx={{ maxWidth: 1100, margin: "0 auto" }}>
        <Grid item sm={1}>
          <ImageGrid images={images} onSelect={setSelectedImage} />
        </Grid>
        <Grid item sm={5}>
          <MainImage src={images[selectedImage]} />
        </Grid>
        <Grid item sm={6}>
          <Info {...product} />
        </Grid>
      </Grid>
    </Box>
  );
}
