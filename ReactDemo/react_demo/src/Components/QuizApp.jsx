import React, { useState } from "react";

const questions = [
  { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
  { question: "What is 1 + 2?", options: ["3", "4", "5"], answer: "3" },
  { question: "What is 5 + 2?", options: ["3", "7", "5"], answer: "7" },
  { question: "What is 7 + 2?", options: ["3", "4", "9"], answer: "9" },
  { question: "What is 9 + 2?", options: ["11", "4", "5"], answer: "11" },
  { question: "What is 10 + 2?", options: ["3", "12", "5"], answer: "12" },
  { question: "What is 15 + 2?", options: ["3", "4", "17"], answer: "17" },
  { question: "What is 8 + 2?", options: ["10", "4", "5"], answer: "10" },
  // Add more questions here
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {option}
            </div>
          ))}
          <button onClick={handleAnswer}>Submit</button>
        </div>
      ) : (
        <h2>Your score: {score}</h2>
      )}
    </div>
  );
};

export default QuizApp;
