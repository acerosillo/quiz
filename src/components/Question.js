import { useState } from "react";
import Option from "./Option";

//Bootstrap Componets
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Question({
  question,
  updateQuizState,
  questionNumber,
  totalQuestions,
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [prevSelOpt, setPrevSelOpt] = useState();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState();

  //used for the modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isActive, setActive] = useState(false);

  const exitQuiz = () => {
    console.log("exit quiz");
  };
  const handleOptionClick = (selectedIndex, selectedOption) => {
    setSelectedOption(selectedOption);

    //console.log(questionNumber, totalQuestions);
    //go to results
    if (questionNumber === totalQuestions - 1) {
      updateQuizState(null, true);
    }

    if (questionNumber === 0) {
      updateQuizState(selectedOption);
    } else {
      setSelectedOptionIndex(selectedIndex);
      //setShowAnswer(true);
      setTimeout(() => {
        //reveal full answer
        setActive(!isActive);
        setShowAnswer(true);
      }, 2000);
    }
  };

  const resetQuestionState = () => {
    setShowAnswer(false);
    setSelectedOptionIndex();
    setPrevSelOpt(selectedOption);
    setSelectedOption();
  };

  const goBack = () => {
    setActive(true);
    setShowAnswer(true);
    setSelectedOption(prevSelOpt);
    updateQuizState(prevSelOpt, false, true);
    //console.log(prevSelOpt);
  };

  // const restartQuiz = () => {
  //   setShowAnswer(false);
  //   setSelectedOptionIndex();
  //   setSelectedOption();
  //   setShow(false);
  // };

  return (
    <>
      <div className="dgQuizContent">
        <section className="quiz__content quizbody fade-in-image">
          <div className="container tab-full">
            <div className="row" id="rowAnimate">
              <div className="animate" id="animate">
                <div className="quizbody__block quizbody__block--question">
                  {questionNumber > 0 && questionNumber < 11 && !showAnswer && (
                    <div className="color__block color__block--orange color__block--answered"></div>
                  )}
                  <div className="col-lg-5 col-md-5">
                    <div className="imganswered__image imganswered imganswered__image--orange container mobile"></div>
                    <div className="quizheading__block dgquizheading">
                      <div className="quizheading__wrap">
                        <div className="dgquizheading__count">
                          <div className="quizheading__counter dgquizheading__counter">
                            {questionNumber > 0 && questionNumber < 11 && (
                              <p>
                                Question {questionNumber} / {totalQuestions - 2}
                              </p>
                            )}
                          </div>
                          <div className="tracker__wrap">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="quizheading__block quizheading">
                                <div className="quizbody__tracker tracker">
                                  <div
                                    className="tracker__status"
                                    style={{ width: "10%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dgquizheading__content">
                          <h2 className="quizheading__title">
                            {question.text}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-7 carousel-toggle">
                    {/* this is the question */}
                    <div
                      className={
                        isActive
                          ? "dgquizbody__selection dgquizbody__questions dgquizbody__selection dgquizbody__selection--answered"
                          : "dgquizbody__selection dgquizbody__questions dgquizbody__selection dgquizbody__selection--unanswered"
                      }
                    >
                      <div className="col-xl-9 offset-xl-3 col-md-10 offset-md-2">
                        <div className="quizbody__wrap quizmain radio-twocol radio__twocol multiple">
                          <div className="multiple__wrap">
                            {question.options.map((option, index) => (
                              <Option
                                key={index}
                                index={index}
                                option={option}
                                selectedOptionIndex={selectedOptionIndex}
                                handleOptionClick={handleOptionClick}
                                qNum={questionNumber}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* this is the full answer */}
                    {showAnswer && (
                      <>
                        <div className="imganswered__image imganswered imganswered__image--answered imganswered__image--green fade-in-image">
                          <div className="color__block color__block--imganswered color__block--imgansweredleft color__block--green"></div>
                          <div className="color__block color__block--imganswered color__block--imgansweredright color__block--green"></div>

                          <Carousel fade>
                            {question.options.map((opt, index) => {
                              return (
                                <Carousel.Item key={index}>
                                  {opt.image && (
                                    <img
                                      src={opt.image.url}
                                      alt={opt.text}
                                      className="image image--desktop d-block w-100"
                                    />
                                  )}
                                </Carousel.Item>
                              );
                            })}
                          </Carousel>
                        </div>
                        <div className="dgquizbody__trivia dgquizbody__questions dgquizbody__trivia dgquizbody__trivia--answered">
                          <div className="col-xl-8 offset-xl-4 col-lg-10 offset-lg-2 col-md-9 offset-md-3">
                            <div className="answered__wrap answered">
                              <h2 className="answered__title answeredheading">
                                {question.answerTitle}
                              </h2>
                              <div className="answered__copy">
                                {question.answerDescription}
                              </div>
                              <div className="quizbutton__wrap answerSelected">
                                <button
                                  className="btn-fill--blue btn btn-main btn-fill"
                                  onClick={() => {
                                    console.log(selectedOption);
                                    console.log(prevSelOpt);
                                    updateQuizState(
                                      selectedOption === undefined
                                        ? prevSelOpt
                                        : selectedOption
                                    );
                                    resetQuestionState();
                                    setActive(false);
                                  }}
                                >
                                  Next Question
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {questionNumber > 0 && (
          <div className="quiz__header quiznav fade-in-image">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="quiznav__wrap">
                    <div className="quiznav__left">
                      {/* NEED TO FIX - SET TO PREVIOUS PANE */}

                      {!isActive &&
                        questionNumber > 1 &&
                        questionNumber < 11 && (
                          <>
                            <div className="icon icon-lcircle icon-lcircle-left icon-lcircle-left--blue"></div>

                            <span
                              className="quiznav__back"
                              onClick={() => {
                                goBack();
                              }}
                            >
                              See previous answer
                            </span>
                          </>
                        )}
                    </div>
                    <div className="quiznav__right" id="openExitModal"></div>

                    <div className="exit-quit" onClick={handleShow}>
                      Exit
                    </div>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body>
                        <h2 className="modal__title">
                          Do you want to exit the Quiz?
                        </h2>
                        <p>Your progress will be lost.</p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          className="btn btn-fill btn-fill--blue"
                          onClick={handleClose}
                        >
                          Continue with Quiz
                        </Button>
                        <Button
                          className="btn btn-nostyle"
                          //NEED TO FIX - Resetting the quiz to zero
                          // onClick={() => App(index)}
                          onClick={exitQuiz}
                        >
                          Exit the Quiz
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Question;
