import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"; // Using a delete icon for better clarity

const TodoApp = () => {
  // State to manage input text and list of tasks
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("todoTasks") || "[]");
    setTasks(savedTasks);
  }, []);

  // Add a new task to the list and save to localStorage
  const handleAdd = () => {
    const newTasks = [...tasks, text];
    setTasks(newTasks);
    setText("");
    saveTasksToLocalStorage(newTasks);
  };

  // Delete a task from the list and save to localStorage
  const handleDelete = (index) => {
    const filteredTasks = tasks.filter((_, ind) => ind !== index);
    setTasks(filteredTasks);
    saveTasksToLocalStorage(filteredTasks);
  };

  // Save tasks to localStorage
  const saveTasksToLocalStorage = (tasksToSave) => {
    localStorage.setItem("todoTasks", JSON.stringify(tasksToSave));
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {/* Center content */}
          <Grid item xs={12} sm={8} md={6}>
            <Grid container spacing={2}>
              {/* Input for adding a new task */}
              <Grid item xs={8}>
                <TextField
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                  fullWidth
                  placeholder="Enter your task"
                  variant="outlined"
                />
              </Grid>
              {/* Button to add a new task */}
              <Grid item xs={4}>
                <Button
                  onClick={handleAdd}
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Add
                </Button>
              </Grid>
            </Grid>

            {/* Displaying the list of tasks */}
            {tasks.map((task, index) => (
              <Card key={index} sx={{ margin: 2, textAlign: "left" }}>
                <CardContent>
                  <Grid container spacing={2}>
                    {/* Task text */}
                    <Grid item xs={8}>
                      <Typography>{task}</Typography>
                    </Grid>
                    {/* Button to delete a task */}
                    <Grid item xs={4}>
                      <Button
                        onClick={() => handleDelete(index)}
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TodoApp;
