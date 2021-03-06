import { Box, Grid } from "@mui/material";
import React from "react";

interface Props {
  images: string[];
  onSelect: React.Dispatch<React.SetStateAction<number>>;
}

export function ImageGrid({ images, onSelect }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "row", md: "column" } }}>
      {images.map((image, index) => {
        return (
          <img
            src={image}
            key={index}
            width={100}
            style={{ border: "solid #eee gray", cursor: "pointer" }}
            onClick={() => onSelect(index)}
          />
        );
      })}
    </Box>
  );
}
