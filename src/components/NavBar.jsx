import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { data } from "./index";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Menu icon for mobile */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* Navbar title or logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          First Step
        </Typography>

        {/* Navbar links for desktop */}
        <List sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
          {data.map((link) => (
            <ListItem key={link.label} disablePadding>
              <Link to={link.path} style={{ textDecoration: "none" }}>
                <Typography color="white">{link.label}</Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Toolbar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        sx={{
          width: 50,
          padding: 10,
          margin: 10,
        }}
      >
        <List style={{ width: 80, paddingLeft: 20, fontSize: 20 }}>
          {data.map((link) => (
            <ListItem
              key={link.label}
              disablePadding
              onClick={handleDrawerClose} // Close the drawer when a menu item is clicked
            >
              <Link to={link.path} style={{ textDecoration: "none" }}>
                <ListItemText sx={{ font: 30 }} primary={link.label} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
