import logo from "./logo.svg";
import "./App.css";
import Quiz from "./components/Quiz";
import TodoApp from "./components/TodoApp";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "./components/Demo";
import Article from "./components/Article";
import TicTacToe from "./components/TicTacToe";
import PomodoroTimer from "./components/PomodoroTimer ";
import Home from "./components/Home";
import TodoNew from "./components/TodoNew";
import AuthForm from "./components/AuthForm";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/todo" element={<TodoNew />} />
        <Route path="/article" element={<Article />} />
        <Route path="/pomodoro" element={<PomodoroTimer />} />
        <Route path="/games" element={<TicTacToe />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
