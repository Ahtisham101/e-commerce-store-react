import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
interface Props {
  title: string;
  description: string;
  price: string;
}
export function Info({ title, description, price }: Props) {
  return (
    <Grid container direction="column" sx={{ height: "100%" }}>
      <Typography>category</Typography>
      <Box mt={2}>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
        <Typography>{price}</Typography>
      </Box>
      <Button variant="contained" color="primary" sx={{ mt: "auto" }}>
        purchase
      </Button>
    </Grid>
  );
}
