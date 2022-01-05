import { Box } from "@mui/material";
import React from "react";
interface Props {
  src: string;
}

export function MainImage({ src }: Props) {
  return (
    <Box>
      <img src={src} height={400} />
    </Box>
  );
}
