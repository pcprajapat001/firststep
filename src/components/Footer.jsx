// Footer.js
import React from "react";
import { Typography, Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              © {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
