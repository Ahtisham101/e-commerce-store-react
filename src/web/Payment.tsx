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
import visa from "../../public/visa.png";

export function Payment() {
  const [card, setCard] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCard(event.target.value as string);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        mt: { xs: "0.5rem", md: "1rem" },
        bgcolor: "	rgb(38, 128, 217)",
        "& label.Mui-focused": {
          color: "white",
        },
        "& .MuiInputBase-root ": {
          "&.MuiInput-root:before": {
            borderColor: "white",
          },
          "&.MuiInput-root:after": {
            borderColor: "white",
          },
        },
        "& .MuiFormLabel-root": {
          color: "white",
        },
      }}
    >
      <Box sx={{ bgcolor: "black" }}>
        <Typography
          sx={{
            color: "white",
            py: "0.6rem",
            fontSize: "1.3rem",
            ml: "1rem",
          }}
        >
          2. Payment
        </Typography>
      </Box>
      <Box sx={{ mx: "1.2rem", mt: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography sx={{ color: "white" }}>
            Select your payment method
          </Typography>
          <Box>
            <FormControl
              fullWidth
              size="small"
              sx={{
                "& label.Mui-focused": {
                  color: "white",
                },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
                mt: { xs: "1rem", md: "0rem" },
              }}
            >
              <InputLabel id="demo-simple-select-label">Card</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={card}
                label="Card"
                onChange={handleChange}
                sx={{ width: { xs: "12rem" } }}
              >
                <MenuItem value={10}>Visa</MenuItem>
                <MenuItem value={20}>Master card</MenuItem>
                <MenuItem value={30}>EasyPaisa</MenuItem>
                <MenuItem value={30}>COD</MenuItem>
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
            "& > :not(style)": { my: 1 },
            "& .MuiInputBase-root": {
              color: "white",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <Box
            sx={{
              display: "flex",
              width: { md: "13rem" },
              flexDirection: "column",
            }}
          >
            <TextField
              id="standard-basic"
              label="Card Number"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Card Holder"
              variant="standard"
              sx={{ mt: "1rem" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "1rem",
            }}
          >
            <TextField id="standard-basic" label="Expires" variant="standard" />
            <TextField id="standard-basic" label="CVC" variant="standard" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "end", py: "1rem", mx: "1rem" }}
      >
        <Button variant="contained">submit</Button>
      </Box>
    </Box>
  );
}
