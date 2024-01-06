import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import MyComponent from "./MyComponent";

const Home = () => {
  return (
    <Grid
      style={{
        background: "linear-gradient(to bottom left, #33ccff 0%, #000099 100%)",
        minHeight: "100vh",
        padding: "20px", // Add padding for better spacing
      }}
      container
      spacing={2}
      justifyContent="center" // Center the content horizontally
      alignItems="center" // Center the content vertically
    >
      <Grid item xs={12} md={6}>
        <img style={{ width: "100%", height: "auto" }} src="study.png" alt="" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container direction="column" alignItems="center">
          <Button sx={{ marginTop: 2, borderRadius: 5 }} variant="contained">
            #firststep
          </Button>
          <Typography
            style={{ fontWeight: "700", marginTop: 2 }}
            color="white"
            variant="h4"
          >
            Welcome to the First Step
          </Typography>
          <Typography sx={{ marginTop: 2 }} align="center" color="white">
            Dive into learning with our platform—offering diverse courses and
            engaging content. Empower yourself through education and unlock
            boundless possibilities today.
          </Typography>
        </Grid>
      </Grid>
      <MyComponent />
    </Grid>
  );
};

export default Home;
