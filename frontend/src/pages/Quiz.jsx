import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import "../styles/quiz.css";
import { updateQuizAttempt, createQuizAttempt } from "../adapters/quiz-adapter";
import CurrentUserContext from "../contexts/current-user-context";

export default function QuizPage() {
  const { currentUser } = useContext(CurrentUserContext);
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const quizId = useParams().quiz_id;
  console.log(quizId);

  useEffect(() => {
    fetch("/api/quiz-questions/" + quizId)
      .then((response) => response.json())
      .then((data) => {
        console.log("quiz_question/:quiz_id data", data);
        setQuestions(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };

  const optionClicked = (selectedAnswer) => {
    if (currentQuestion < questions.length) {
      const correctAnswer = questions[currentQuestion].answer;

      if (selectedAnswer === correctAnswer) {
        setScore(score + 1);
      } else {
        setSelectedOption(selectedAnswer);
      }

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setFinalResults(true);
        sendOrUpdateQuizAttemptToBackend();
      }
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  const sendOrUpdateQuizAttemptToBackend = async () => {
    const quizAttemptData = {
      userId: currentUser.id,
      quiz_id: quizId,
      percentage: (score / questions.length) * 100,
      score_count: score,
    };

    try {
      // Check if a quiz attempt already exists for the user
      const [existingAttempt] = await updateQuizAttempt(quizAttemptData);

      if (existingAttempt) {
        console.log("Updated quiz attempt:", existingAttempt);
      } else {
        // If no attempt exists, create a new one
        const newAttempt = await createQuizAttempt(quizAttemptData);
        console.log("Created new quiz attempt:", newAttempt);
      }
    } catch (error) {
      console.error("Error sending or updating quiz attempt:", error);
    }
  };

  let shuffledChoices = [];
  if (questions[currentQuestion]) {
    shuffledChoices = shuffleArray([
      questions[currentQuestion]?.answer,
      questions[currentQuestion]?.wrong_answer_1,
      questions[currentQuestion]?.wrong_answer_2,
      questions[currentQuestion]?.wrong_answer_3,
    ]);
  }

  return (
    <>
      <h1>Quiz</h1>
      <h2 className="current-score">Current Score: {score}</h2>
      {showFinalResults ? (
        <div className="final-quiz">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
        <h2 className="current-question">
              Question {currentQuestion + 1} out of {questions.length}
            </h2>
          <div className="quiz-card">
            <h3 className="question-text">
              {questions[currentQuestion]?.question}
            </h3>
          </div>
          <div className="quiz-choices">
            {shuffledChoices.map((choice, index) => (
              <button
                className="choices"
                key={index}
                onClick={() => optionClicked(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}
