//import "../../assets/scss/Question.scss";
import { useState, useEffect } from "react";
import quizQuestionsLive from "../data/quizQuestionsLive.json";

function TeaserQuestion() {
  const [show, setShow] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const onNextClick = () => {
    setShow(false);
    if (questionIndex === quizQuestionsLive.length - 1) {
      setQuizComplete(true);
    } else {
      setQuestionIndex(questionIndex == null ? 0 : questionIndex + 1);
    }
  };

  return (
    <div id="teaser-block">
      <div>teaser question </div>
      <button className="btn btn-fill--blue" onClick={onNextClick}>
        Next Questions
      </button>
    </div>
  );
}

export default TeaserQuestion;
