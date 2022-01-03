import { Box, Typography } from "@mui/material";
import React from "react";
import { Cart } from "./Cart";
import { Payment } from "./Payment";
import { Shipping } from "./Shipping";

export function Checkout() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: "1rem",
      }}
    >
      <Box
        sx={{
          border: "2px solid	rgb(242, 242, 242)",
          borderRadius: "0.5rem",
          p: "1rem",
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem" }}
        >
          Checkout
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ p: "1rem" }}>
            <Shipping />
            <Payment />
          </Box>
          <Cart />
        </Box>
      </Box>
    </Box>
  );
}
