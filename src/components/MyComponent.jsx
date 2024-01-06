import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const MyComponent = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 5 }}>
      <Grid item xs={12} sm={2}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="https://placekitten.com/200/140"
            alt="Card Image 1"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Card 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Content for Card 1.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={2}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="https://placekitten.com/200/140"
            alt="Card Image 2"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Card 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Content for Card 2.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={2}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="https://placekitten.com/200/140"
            alt="Card Image 2"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Card 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Content for Card 2.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="https://placekitten.com/200/140"
            alt="Card Image 2"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Card 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Content for Card 2.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="https://placekitten.com/200/140"
            alt="Card Image 2"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Card 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Content for Card 2.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="https://placekitten.com/200/140"
            alt="Card Image 2"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Card 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Content for Card 2.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MyComponent;
