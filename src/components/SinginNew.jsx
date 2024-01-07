import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { bgcolor } from "@mui/system";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SinginNew = () => {
  return (
    <Grid sx={{ height: "100vh" }} align="center" container spacing={2}>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80%",
          marginTop: 6,
        }}
      >
        <Typography variant="h4" align="center">
          Sign up
        </Typography>
        <TextField
          placeholder="Enter Your Username"
          sx={{ padding: "0 30px 0 50px", width: 500, marginTop: 1 }}
          fullWidth
          variant="outlined"
        />
        <TextField
          placeholder="Enter Your Email ID"
          sx={{ padding: "0 30px 0 50px", width: 500, marginTop: 1 }}
          fullWidth
          variant="outlined"
        />
        <TextField
          placeholder="Enter Your Password"
          sx={{ padding: "0 30px 0 50px", width: 500, marginTop: 1 }}
          fullWidth
          variant="outlined"
        />
        <TextField
          placeholder="Confirm Password"
          sx={{ padding: "0 30px 0 50px", width: 500, marginTop: 1 }}
          fullWidth
          variant="outlined"
        />
        <Button
          align="center"
          sx={{
            marginTop: 1,
            height: 40,
            align: "center",
            borderRadius: 10,
          }}
          variant="contained"
        >
          Signup
        </Button>
        <Link to="/signin">
          <Typography color="blue" variant="h6" align="center">
            or Log In with
          </Typography>
        </Link>
        <Grid item xs={12}>
          <FaFacebookF size={20} className="icon" />
          <FaGoogle size={20} className="icon" />
          <RiLinkedinFill size={20} className="icon" />
        </Grid>
      </Grid>

      <Grid item xs={6} sx={{ backgroundColor: "" }}>
        <Card
          sx={{
            fontWeight: 600,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "blue",
            height: "80vh",
            margin: 2,
            borderRadius: "20px 0 0 20px",
          }}
        >
          <CardContent>
            <img
              align="center"
              width={200}
              justifyContent="center"
              height={200}
              src="/signup.png"
              alt=""
            />
            <Typography align="center" justifyContent="center" variant="h3">
              Come join us!!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SinginNew;
