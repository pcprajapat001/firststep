import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Alert,
  Box,
  Container,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Demo from "./Demo";

const TodoApp = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateIndex, setUpdateIndex] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("todoTasks") || "[]");
    setTasks(savedTasks);
  }, []);

  const handleAdd = () => {
    let newTasks;

    if (updateIndex !== null) {
      newTasks = [...tasks];
      newTasks[updateIndex] = text;
      showAlertMessage("Task updated");
    } else {
      newTasks = [...tasks, text];
      showAlertMessage("Task added");
    }

    setTasks(newTasks);
    setText("");
    setUpdateIndex(null);
    saveTasksToLocalStorage(newTasks);
  };

  const handleDelete = (index) => {
    const filteredTasks = tasks.filter((_, ind) => ind !== index);
    setTasks(filteredTasks);
    setUpdateIndex(null);
    saveTasksToLocalStorage(filteredTasks);
    showAlertMessage("Task deleted", "error");
  };

  const handleUpdate = (index) => {
    setUpdateIndex(index);
    setText(tasks[index]);
    showAlertMessage("Editing task");
  };

  const showAlertMessage = (message, severity = "success") => {
    setAlertMessage(message);
    setAlertSeverity(severity);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const saveTasksToLocalStorage = (tasksToSave) => {
    localStorage.setItem("todoTasks", JSON.stringify(tasksToSave));
  };

  return (
    <Container
      style={{
        background:
          "linear-gradient(to bottom left, #33ccff 10%, #000099 100%)",
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Box sm={12} sx={{ width: "900px", marginTop: 1 }}>
        <Typography align="center" variant="h4">
          To do App
        </Typography>
        <Card
          style={{
            background:
              "linear-gradient(to bottom left, #33ccff 10%, #000099 100%)",
          }}
        >
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <TextField
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                  fullWidth
                  placeholder="Enter your task"
                  variant="outlined"
                />
              </Grid>
              <Grid sm={12} item xs={6} md={2}>
                <Button
                  onClick={handleAdd}
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ height: 55 }}
                  disabled={text.length === 0}
                >
                  {updateIndex !== null ? "Update" : "Add"}
                </Button>
              </Grid>

              {tasks.map((task, index) => (
                <Grid key={index} item xs={12}>
                  <Card sx={{ textAlign: "left" }}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                          <Typography>{task}</Typography>
                        </Grid>
                        <Grid item xs={6} md={2}>
                          <Button
                            onClick={() => handleUpdate(index)}
                            variant="contained"
                            color="warning"
                            startIcon={<ModeEditIcon />}
                            fullWidth
                            sx={{ width: "10px" }}
                          ></Button>
                        </Grid>
                        <Grid item xs={6} md={2}>
                          <Button
                            onClick={() => handleDelete(index)}
                            variant="contained"
                            color="error"
                            startIcon={<DeleteIcon />}
                            fullWidth
                            sx={{ width: "10px" }}
                          ></Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>

          {showAlert && (
            <Alert severity={alertSeverity} sx={{ marginTop: 2 }}>
              {alertMessage}
            </Alert>
          )}
        </Card>
      </Box>
    </Container>
  );
};

export default TodoApp;
