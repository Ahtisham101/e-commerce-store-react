import { Box, Grid } from "@mui/material";
import React from "react";

interface Props {
  images: string[];
}

export function ImageGrid({ images }: Props) {
  return (
    <Grid container>
      {images.map((image, index) => {
        return <img src={image} key={index} width={100} />;
      })}
    </Grid>
  );
}
