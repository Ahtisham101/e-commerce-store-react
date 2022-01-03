import { Box, TextField, Typography } from "@mui/material";
import React from "react";

export function Shipping() {
  return (
    <Box sx={{ width: "40rem" }}>
      <Typography sx={{ bgcolor: "black", color: "white" }}>
        1. Shipping
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="FirstName" variant="standard" />
        <TextField id="standard-basic" label="LastName" variant="standard" />
        <Box>
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            sx={{ width: "39rem" }}
          />
          <TextField
            id="standard-basic"
            label="Postal Code"
            variant="standard"
            sx={{ width: "39rem" }}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            sx={{ width: "39rem" }}
          />
          <TextField
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            sx={{ width: "39rem" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
