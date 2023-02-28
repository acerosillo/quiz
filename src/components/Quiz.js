import { useState, useEffect, Fragment } from "react";
import quizQuestions from "../data/quizQuestions.json";
import randomFacts from "../data/randomFacts.json";

import ProgressBar from "./ProgressBar";
import RandomFactsIntro from "./RandomFactsIntro";

function Question({ quizQuestions }) {
  const [questionIndex, setQuestionIndex] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    setAnswerStatus(null);
  }, [questionIndex]);

  useEffect(() => {
    if (answerStatus) {
      setCorrectAnswerCount((count) => count + 1);
    }
  }, [answerStatus]);

  const onNextClick = () => {
    if (questionIndex === quizQuestions.length - 1) {
      setQuizComplete(true);
    } else {
      setQuestionIndex(questionIndex == null ? 0 : questionIndex + 1);
    }
  };

  const SubAnswer = ({ question, setAnswerStatus }) => {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    useEffect(() => {
      if (selectedAnswerIndex != null) {
        setAnswerStatus(selectedAnswerIndex === question.correctAnswerIndex);
      }
    }, [selectedAnswerIndex]);

    useEffect(() => {
      setSelectedAnswerIndex(null);
    }, [question]);

    return (
      <div className="question">
        {answerStatus != null && (
          <div>
            <div className="questionText">{question.title}</div>
            <div className="questionText">{question.desc}</div>
            {/* <div className="answerStatus">
                {!!answerStatus ? "Correct! :)" : "Your answer was incorrect :("}
              </div> */}
            <button className="next" onClick={onNextClick}>
              {questionIndex === quizQuestions.length - 1
                ? "See results of this quiz"
                : "Next Question ->"}
            </button>
          </div>
        )}
      </div>
    );
  };

  //reset all values
  const onRestartClick = () => {
    setQuizComplete(false);
    setQuestionIndex(null);
    setCorrectAnswerCount(0);
  };

  const [showElement, setShowElement] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);

  if (questionIndex == null) {
    return (
      <div className="quiz">
        {showElement ? (
          <div>
            <Fragment>
              <RandomFactsIntro data={randomFacts} />
            </Fragment>
          </div>
        ) : (
          <div className="fade-in-image">
            <img src={"./randImg/rand-1.png"} alt="img" width="400" />
            <h1>
              The DRINKiQ quiz will help you find out how much you really know
              about drinking
            </h1>
            <p>
              Brought to you by Diageo, a global leader in beverage alcohol.
            </p>
            <button className="btn" onClick={onNextClick}>
              Start the quiz
            </button>
          </div>
        )}{" "}
      </div>
    );
  }

  // return (
  //   <div className="quiz">
  //     {quizComplete ? (
  //       <Fragment>
  //         <h1>Quiz complete!</h1>
  //         <p>
  //           You scored {correctAnswerCount} out of {quizQuestions.length}
  //         </p>
  //         <button className="restart" onClick={onRestartClick}>
  //           Take the quiz again
  //         </button>

  //         <br />
  //         <br />

  //         <p>Invite others to take the quiz</p>
  //         <ul>
  //           <li>Facebook</li>
  //           <li>Twitter</li>
  //           <li>LinkedIn</li>
  //         </ul>
  //       </Fragment>
  //     ) : (
  //       <Fragment>
  //         {/* <ProgressBar
  //           currentQuestionIndex={questionIndex + 1}
  //           totalQuestionsCount={quizQuestions.length}
  //         /> */}
  //         {/* <Question
  //           question={quizQuestions[questionIndex]}
  //           setAnswerStatus={setAnswerStatus}
  //         /> */}
  //         {/*
  //         <SubAnswer
  //           question={quizQuestions[questionIndex]}
  //           setAnswerStatus={setAnswerStatus}
  //         /> */}
  //       </Fragment>
  //     )}
  //   </div>
  // );
}

export default Question;
