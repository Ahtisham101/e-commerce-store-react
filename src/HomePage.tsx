import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Image from "next/image";
import coverPic from "../public/cover.jpg";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

export function HomePage() {
  return (
    <>
      <Header />
      <Box>
        <Image src={coverPic} alt="coverPic" />
      </Box>

      <Box
        className="maincontainer"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginTop: "2rem" }}>
          <Typography sx={{ fontSize: "2rem" }}>
            Men Jackets and Vests
          </Typography>
        </Box>
        <Box
          className="flex-container-of-image"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ mr: "0.5rem" }}>
            <img
              width={300}
              height={350}
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e425b9bb-d388-475f-a646-a44ff62f10f1/sportswear-swoosh-mens-woven-jacket-zwnqMl.jpg"
              alt="logo"
            />
            <Typography>Product name</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained">add to cart</Button>
            </Box>
          </Box>
          <Box>
            <img
              width={300}
              height={350}
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e425b9bb-d388-475f-a646-a44ff62f10f1/sportswear-swoosh-mens-woven-jacket-zwnqMl.jpg"
              alt="logo"
            />
            <Typography>Product name</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained">add to cart</Button>
            </Box>
          </Box>
          <Box sx={{ ml: "0.5rem" }}>
            <img
              width={300}
              height={350}
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e425b9bb-d388-475f-a646-a44ff62f10f1/sportswear-swoosh-mens-woven-jacket-zwnqMl.jpg"
              alt="logo"
            />
            <Typography>Product name</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained">add to cart</Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
