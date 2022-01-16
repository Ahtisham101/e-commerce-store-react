import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { ImageGrid } from "./components/ImageGrid";
import { MainImage } from "./components/MainImage";
const images = [
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e425b9bb-d388-475f-a646-a44ff62f10f1/sportswear-swoosh-mens-woven-jacket-zwnqMl.jpg",
  "https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG",
];

export function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: "1rem",
      }}
    >
      <Box sx={{ display: { md: "flex" } }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: { md: "block", xs: "none" }, mr: "0.7rem" }}>
              <ImageGrid images={images} onSelect={setSelectedImage} />
            </Box>

            <MainImage src={images[selectedImage]} />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <ImageGrid images={images} onSelect={setSelectedImage} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: { md: "25rem" },
            ml: { md: "1rem" },
            width: { md: "25rem" },
            px: { xs: "0.5rem" },
          }}
        >
          <Box sx={{ mt: { md: "4rem" } }}>
            <Typography fontWeight="bold">STRETCH LOOSE FIT DENIM</Typography>
            <Typography sx={{ mt: { xs: "0.5rem", md: "1.5rem" } }}>
              PKR 2,999
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              mt: { xs: "1.5rem" },
              mb: { xs: "0.5rem" },
            }}
          >
            <Button variant="contained" sx={{ mr: "1rem" }}>
              add to cart
            </Button>
            <Button variant="contained">buy now</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
