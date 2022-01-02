import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import visa from "../public/visa.png";
import { Cart } from "./Cart";

export function Payment() {
  const [card, setCard] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCard(event.target.value as string);
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ width: "60rem" }}>
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem" }}
        >
          Checkout
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Box sx={{ width: "40rem" }}>
              <Typography sx={{ bgcolor: "black", color: "white" }}>
                1. Shipping
              </Typography>
            </Box>
            <Box sx={{ mt: "1rem", bgcolor: "	rgb(38, 128, 217)" }}>
              <Typography sx={{ bgcolor: "black", color: "white" }}>
                2. Payment
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "2rem",
                  mx: "1rem",
                }}
              >
                <Typography sx={{ color: "white" }}>
                  Please select your card
                </Typography>
                <Box sx={{ minWidth: 200 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ color: "white", borderColor: "white" }}
                    >
                      Card
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={card}
                      label="Card"
                      onChange={handleChange}
                      sx={{ color: "white" }}
                    >
                      <MenuItem value={10}>Visa</MenuItem>
                      <MenuItem value={20}>Master card</MenuItem>
                      <MenuItem value={30}>PayPal</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={visa} alt="coverPic" width={200} height={130} />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <Box>
                  <TextField
                    id="standard-basic"
                    label="Card Number"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Card Holder"
                    variant="standard"
                  />
                </Box>

                <TextField
                  id="standard-basic"
                  label="Expires"
                  variant="standard"
                />
                <TextField id="standard-basic" label="CVC" variant="standard" />
              </Box>
              <Button variant="contained">Contained</Button>
            </Box>
          </Box>
          <Cart />
        </Box>
      </Box>
    </Box>
  );
}
