import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Singin = () => {
  return (
    <Grid sx={{ height: "100vh" }} container spacing={2}>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="h4">Sign in</Typography>
            <Typography
              sx={{
                bgcolor: "red",
                background:
                  "linear-gradient(to bottom right, #0000ff 0%, #ff99ff 100%)",
                borderRadius: 15,
                color: "white",
                padding: "5px",
                textAlign: "center",
              }}
              variant="h4"
            >
              Sign in With
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
};

export default Singin;
