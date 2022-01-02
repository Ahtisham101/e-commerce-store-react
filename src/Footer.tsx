import React from "react";
import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Toolbar,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",

        py: "3rem",
      }}
    >
      <Box>
        <Typography
          sx={{ color: "white", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Customers
        </Typography>
        <Typography sx={{ color: "	rgb(128, 128, 128)" }}>Buyer</Typography>
        <Typography sx={{ color: "	rgb(128, 128, 128)" }}>Supplier</Typography>
      </Box>
      <Box sx={{ mt: "1.5rem" }}>
        <Typography
          sx={{ color: "white", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Company
        </Typography>
        <Typography sx={{ color: "	rgb(128, 128, 128)" }}>About us</Typography>
        <Typography sx={{ color: "	rgb(128, 128, 128)" }}> Careers</Typography>
        <Typography sx={{ color: "	rgb(128, 128, 128)" }}>Contact us</Typography>
      </Box>
      <Box>
        <Typography
          sx={{ color: "white", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Future Information
        </Typography>
        <Typography sx={{ color: "	rgb(128, 128, 128)" }}>
          Terms & Conditions
        </Typography>
        <Typography sx={{ color: "	rgb(128, 128, 128)" }}>
          Privacy Policy
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Follow us
        </Typography>
        <IconButton aria-label="delete" sx={{ color: "white" }}>
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="delete" sx={{ color: "white" }}>
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="delete" sx={{ color: "white" }}>
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
