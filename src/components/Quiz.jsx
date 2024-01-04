// src/Quiz.js
import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    correctAnswer: "Yen",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (!showScore) {
      const isCorrect =
        selectedAnswer === questions[currentQuestion].correctAnswer;

      setSelectedOption({
        selected: selectedAnswer,
        isCorrect: isCorrect,
      });
    }
  };

  const handleNext = () => {
    if (isLoading) {
      return; // Do nothing if already loading
    }

    setIsLoading(true);

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowScore(true);
      }

      setIsLoading(false);
    }, 1000);
  };

  const handlePrevious = () => {
    if (currentQuestion - 1 >= 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  const renderQuizContent = () => {
    if (showScore) {
      return (
        <div>
          <Typography variant="h5">Quiz Completed!</Typography>
          <Typography variant="h6">
            Your score is: {score}/{questions.length}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleRestart}>
            Restart Quiz
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Typography variant="h5">
            {questions[currentQuestion].question}
          </Typography>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="contained"
                color="error"
                sx={{
                  color: "black",
                  bgcolor: "gray",
                  paddingTop: 2,
                  marginTop: 2,
                }}
                onClick={() => handleAnswer(option)}
                fullWidth
                style={{
                  backgroundColor:
                    selectedOption && selectedOption.selected === option
                      ? selectedOption.isCorrect
                        ? "green"
                        : "red"
                      : "white",
                }}
              >
                {option}
              </Button>
            ))}
          </div>
          <Grid sx={{ marginTop: 2 }} container spacing={2}>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handlePrevious}
                disabled={currentQuestion === 0 || isLoading}
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={24} /> : "Next"}
              </Button>
            </Grid>
          </Grid>
          <div style={{ marginTop: "20px" }}></div>
        </div>
      );
    }
  };

  return (
    <Grid sx={{ marginTop: 2 }} align="center" container spacing={2}>
      <Grid item xs={4} md={0}></Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>{renderQuizContent()}</CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default Quiz;
