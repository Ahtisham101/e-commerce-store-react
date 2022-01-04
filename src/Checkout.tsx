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
        py: { xs: "0rem", md: "1rem" },
      }}
    >
      <Box
        sx={{
          border: { xs: "none", md: "2px solid	rgb(242, 242, 242)" },
          borderRadius: { xs: "0rem", md: "0.5rem" },
          p: { xs: "0rem", md: "1rem" },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2rem",
            mt: { xs: "1rem", md: "0rem" },
          }}
        >
          Checkout
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ p: { xs: "0rem", md: "1rem" } }}>
            <Shipping />
            <Payment />
          </Box>
          <Cart />
        </Box>
      </Box>
    </Box>
  );
}
