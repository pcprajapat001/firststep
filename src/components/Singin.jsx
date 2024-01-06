import { Grid, Typography } from "@mui/material";
import React from "react";

const Singin = () => {
  return (
    <Grid sx={{ height: "100vh" }} container spacing={2}>
      <Grid item xs={6}>
        <Typography variant="h4">Sign in</Typography>
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
};

export default Singin;
