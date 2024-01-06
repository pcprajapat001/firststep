import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import {
  Container,
  Typography,
  Button,
  CircularProgress,
  Paper,
  TextField,
  Grid,
} from "@mui/material";

const PomodoroTimer = () => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(1500); // 25 minutes in seconds
  const [minutes, setMinutes] = useState(25);
  const [customTime, setCustomTime] = useState("");

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (isActive && seconds === 0) {
      clearInterval(interval);
      setIsActive(false);
      setSeconds(1500); // Reset to 25 minutes
      setMinutes(25);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(1500); // Reset to 25 minutes
    setMinutes(25);
  };

  const handleCustomTimeChange = (event) => {
    setCustomTime(event.target.value);
  };

  const setCustomTimer = () => {
    const customMinutes = parseInt(customTime, 10);
    if (!isNaN(customMinutes) && customMinutes > 0) {
      setIsActive(false);
      setSeconds(customMinutes * 60);
      setMinutes(customMinutes);
    }
  };

  return (
    <Draggable handle=".handle" bounds="parent">
      <Container
        maxWidth="sm"
        style={{
          background: "linear-gradient(to bottom right, #00bcd4, #2979ff)",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          position: "relative",
        }}
      >
        <Paper
          elevation={3}
          style={{
            textAlign: "center",
            padding: "20px",
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Pomodoro Timer
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img width={100} src="watch.svg" alt="" />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                {`${String(minutes).padStart(2, "0")}:${String(
                  seconds % 60
                ).padStart(2, "0")}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={toggleTimer}>
                {isActive ? "Pause" : "Start"}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={resetTimer}
                style={{ marginLeft: "10px" }}
              >
                Reset
              </Button>
            </Grid>
            <Grid item xs={12}>
              <CircularProgress
                variant="determinate"
                value={((1500 - seconds) / 1500) * 100}
                style={{ width: "60px", height: "60px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Set Custom Time (minutes)"
                variant="outlined"
                size="small"
                type="number"
                value={customTime}
                onChange={handleCustomTimeChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={setCustomTimer}
              >
                Set Custom Timer
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Draggable>
  );
};

export default PomodoroTimer;
