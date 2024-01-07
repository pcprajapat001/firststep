import { Grid } from "@mui/material";
import React from "react";
import TodoApp from "./TodoApp";

const TodoNew = () => {
  return (
    <Grid
      container
      sx={{ minHeight: "100vh" }}
      align="center"
      spacing={2}
      style={{
        background: "linear-gradient(to bottom left, #33ccff 0%, #000099 100%)",
      }}
    >
      <Grid sx={{ marginTop: 8 }} item xs={12} md={4}>
        <img
          style={{ marginTop: { md: 5 } }}
          height={300}
          src="todo.png"
          alt=""
        />
      </Grid>
      <Grid
        md={8}
        sx={{ marginTop: { md: 1, xs: 2 }, marginRight: { md: 0 } }}
        item
        xs={12}
      >
        <TodoApp />
      </Grid>
    </Grid>
  );
};

export default TodoNew;
