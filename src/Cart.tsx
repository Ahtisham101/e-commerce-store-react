import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

export function Cart() {
  return (
    <Box
      sx={{
        position: "relative",
        top: "-10rem",
        height: "20rem",
      }}
    >
      <Typography sx={{ textAlign: "center", fontSize: "1.5rem" }}>
        Order Summary
      </Typography>
      <Divider sx={{ mt: "0.5rem" }} />
      <Box sx={{ display: "flex", mt: "1rem" }}>
        <Box>
          <img
            src="https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG"
            alt="image"
            width={130}
          />
        </Box>
        <Box>
          <br />
          <Box component="span">Nike</Box>
          <br /> Free Run 3.0 Women
          <br />
          <Box component="span">
            Color: Grey/Orange, Size: 10.5
            <br />
            <br />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <Typography>$99.95</Typography>
        </Box>
      </Box>
      <Divider sx={{ mt: "1.2rem" }} />
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "1.2rem" }}
      >
        <Typography>Total</Typography>
        <Typography>$90</Typography>
      </Box>
    </Box>
  );
}
