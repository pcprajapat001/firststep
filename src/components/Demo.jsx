import {
  Box,
  Typography,
  Grid,
  Hidden,
  Drawer,
  IconButton,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { data2 } from "./index";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Demo = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const renderDesktopMenu = () => {
    return (
      <Box
        sx={{
          width: "150px",
          maxHeight: "100vh",
          overflow: "auto",
          alignContent: "center",
          paddingLeft: 2,
          position: "fixed",
          top: 65,
          bgcolor: "#6499E9",
          paddingTop: 3,
        }}
      >
        {data2.map((item) => (
          <Link
            to={item.path}
            key={item.label}
            style={{ textDecoration: "none" }}
          >
            <Typography
              style={{ fontStyle: "none" }}
              color="white"
              variant="h6"
            >
              {item.label}
            </Typography>
            <Divider sx={{ width: "100vw" }} />
          </Link>
        ))}
      </Box>
    );
  };

  const renderMobileMenu = () => {
    return (
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <Box
          sx={{
            width: 150,
            padding: 2,
            bgcolor: "#457474",
          }}
        >
          {data2.map((item) => (
            <Link
              to={item.path}
              key={item.label}
              onClick={handleDrawerClose}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="h6"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </Box>
      </Drawer>
    );
  };

  return (
    <Grid container spacing={2}>
      <Hidden mdDown>
        {/* Render desktop menu */}
        <Grid item xs={2} sx={{ maxHeight: "100vh" }}>
          {renderDesktopMenu()}
        </Grid>
      </Hidden>
      <Hidden lgUp>
        {/* Render mobile menu toggle */}
        <Grid item xs={2}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        {/* Render mobile menu */}
        <Grid item xs={12}>
          {renderMobileMenu()}
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Demo;
