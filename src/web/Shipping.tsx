import { Box, TextField, Typography } from "@mui/material";
import React from "react";

export function Shipping() {
  return (
    <Box sx={{ mb: { xs: "1.2rem" }, mt: { xs: "0.5rem" } }}>
      <Box sx={{ bgcolor: "black" }}>
        <Typography
          sx={{
            color: "white",
            py: "0.6rem",
            fontSize: "1.3rem",
            ml: "1rem",
          }}
        >
          1. Shipping
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { mx: { xs: "1rem", md: 0 }, m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField id="standard-basic" label="FirstName" variant="standard" />
          <TextField id="standard-basic" label="LastName" variant="standard" />
        </Box>
        <Box>
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            fullWidth
            sx={{ mt: "0.7rem" }}
          />
          <TextField
            id="standard-basic"
            label="Postal Code"
            variant="standard"
            fullWidth
            sx={{ mt: "0.7rem" }}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            fullWidth
            sx={{ mt: "0.7rem" }}
          />
          <TextField
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            fullWidth
          />
        </Box>
      </Box>
    </Box>
  );
}
