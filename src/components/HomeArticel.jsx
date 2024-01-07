import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Alert,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { books2 } from "./index";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const HomeArticel = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isLoved, setIsLoved] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    showAndHideAlert(`Added to Cart: ${cartCount + 1}`);
  };

  const handleAddToFavorites = () => {
    setIsLoved(!isLoved);
    const action = isLoved ? "Removed from Favorites" : "Added to Favorites";
    showAndHideAlert(action);
  };

  const handleShowCart = () => {
    showAndHideAlert(`Cart Count: ${cartCount}`);
  };

  const handleShare = () => {
    showAndHideAlert("Shared!");
  };

  const showAndHideAlert = (message) => {
    setAlertMessage(message);
    setIsAlertOpen(true);
    setTimeout(() => {
      setIsAlertOpen(false);
    }, 2000); // Hide the alert after 2 seconds
  };

  return (
    <div>
      <Alert
        open={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        severity="success"
      >
        {alertMessage}
      </Alert>
      <IconButton onClick={handleShowCart} aria-label="Show Cart">
        🛒 Cart ({cartCount})
      </IconButton>
      <Grid
        container
        align="center"
        spacing={2}
        sx={{ padding: { xs: "8px", md: "8px" } }}
      >
        {books2.map((item) => (
          <Grid item xs={12} md={6} lg={3} xl={3} key={item.id}>
            <Card sx={{ width: "100%", height: "100%" }}>
              <CardMedia
                component="img"
                height={180}
                width={150}
                image={item.image}
                alt="Book Cover"
              />
              <CardContent>
                <h3>{item.title}</h3>
                <IconButton onClick={handleAddToCart} aria-label="Add to Cart">
                  🛒
                </IconButton>
                <IconButton
                  onClick={handleAddToFavorites}
                  aria-label="Add to Favorites"
                  color={isLoved ? "error" : "inherit"} // Change color if loved
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton onClick={handleShare} aria-label="Share">
                  <ShareIcon />
                </IconButton>{" "}
                <br />
                <Button fullWidth sx={{ borderRadius: 15 }} variant="contained">
                  {" "}
                  Read more...
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomeArticel;
