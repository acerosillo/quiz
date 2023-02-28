//css
import "./styles/app.scss";

import { useState, useEffect, Fragment } from "react";

//json
import randomFacts from "./data/randomFacts.json";
import quizQuestionsLive from "./data/quizQuestionsLive.json";
import teaserQuestion from "./data/teaserQuestion.json";
import finalQuestion from "./data/finalQuestion.json";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import RandomFactsIntro from "./components/RandomFactsIntro";
import Question from "./components/Question";

const Quiz = ({ quizQuestionsLive, teaserQuestion }) => {
  // Merged both the calls for teaser and all the other questions together into one array...
  const questions = [...teaserQuestion, ...quizQuestionsLive, ...finalQuestion];

  // Set an initial place of state so everything can use this one "true" source...
  const initialQuizState = {
    factSectionFaded: false,
    questions,
    questionNumber: -1,
    correctCount: 0,
    teaserState: false,
    quizFinished: false,
  };

  // Need some state to deal with question and answer changes...
  const [quizState, setQuizState] = useState(initialQuizState);

  useEffect(() => {
    setTimeout(
      () =>
        setQuizState({
          ...quizState,
          factSectionFaded: true,
          teaserState: true,
        }),
      4000
    );
  }, []);

  // This useEffect can be removed once dev is completed... its good for seeing what the state is after every answer click...
  useEffect(() => {
    // This will log the whole quiz state after every answer click...
    console.log(quizState);
  }, [quizState]);

  return (
    <>
      {!quizState.factSectionFaded ? (
        <RandomFactsIntro data={randomFacts} />
      ) : quizState.quizFinished ? (
        <>
          <div className="quizResults fade-in-image">
            <section className="quiz__results results resultsHeader">
              <div className="container tab-full">
                <div className="color__block color__block--resultsleft color__block--green"></div>
                <div className="color__block color__block--resultsright color__block--green"></div>
                <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12">
                    <div className="resultsHeader__wrap">
                      <div className="color__block color__block--resultsbg"></div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="resultsHeader__left resultsHeader__image resultsHeader__image--green">
                            <img
                              src={
                                "./static/images/score/score-" +
                                quizState.correctCount +
                                ".png"
                              }
                              alt="img"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="resultsHeader__right">
                            <div className="content__wrap">
                              <h2 className="resultsHeader__title">
                                You scored {quizState.correctCount} out of{" "}
                                {quizState.questions.length - 2}
                              </h2>

                              <a
                                href="/"
                                className="btn btn-white"
                                data-galabel="Take the quiz again"
                              >
                                Take the quiz again
                              </a>

                              <div className="social__wrap">
                                <h3 classNName="social__title">
                                  Invite others to take the quiz
                                </h3>
                                <div className="social__links">
                                  <a
                                    href="#"
                                    className="social__icon"
                                    data-platform="facebook"
                                  >
                                    <img
                                      src="./static/images/icons/icon-social-dgquiz-fb.svg"
                                      alt="Share the DRINKiQ Quiz - Facebook"
                                      loading="lazy"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    class="social__icon"
                                    data-platform="twitter"
                                  >
                                    <img
                                      src="/static/images/icons/icon-social-dgquiz-tw.svg"
                                      alt="Share the DRINKiQ Quiz - Twitter"
                                      loading="lazy"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    class="social__icon"
                                    data-platform="linkedin"
                                  >
                                    <img
                                      src="/static/images/icons/icon-social-dgquiz-in.svg"
                                      alt="Share the DRINKiQ Quiz - LinkedIn"
                                      loading="lazy"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <>
          {quizState.questionNumber < 0 ? (
            <div className="landing__content content fade-in-image">
              <div className="col-lg-7 col-xl-7 col-md-7 col-sm-12 ">
                <div className="content__right dgtheme--green">
                  <div className="blocks blocks__left blocks--green bottom"></div>
                  <div className="blocks blocks__right blocks--green top"></div>

                  <div className="splash__content">
                    <h1 className="splash__title">
                      The DRINKiQ quiz will help you find out how much you
                      really know about drinking
                    </h1>
                    <button
                      className="btn btn-main btn-fill btn-fill--blue content__cta"
                      onClick={() => {
                        setQuizState({
                          ...quizState,
                          questionNumber: 0,
                        });
                      }}
                    >
                      Start the quiz
                    </button>
                    <div className="content__copy">
                      <div className="splash__copy teaser__copy">
                        Brought to you by Diageo, a global leader in beverage
                        alcohol.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-5 col-md-5 col-sm-12 order-first">
                <div className="row">
                  <div className="content__left">
                    <img
                      src={"./randImg/rand-1.png"}
                      alt="img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Question
              question={questions[quizState.questionNumber]}
              questionNumber={quizState.questionNumber}
              totalQuestions={quizState.questions.length}
              updateQuizState={(selectedOption, quizFinished, goBack) => {
                //   console.log(selectedOption);

                if (quizFinished) {
                  setQuizState({
                    ...quizState,
                    quizFinished: true,
                  });
                } else if (goBack) {
                  setQuizState({
                    ...quizState,
                    questionNumber: quizState.questionNumber - 1,
                  });
                } else {
                  setQuizState({
                    ...quizState,
                    questionNumber: quizState.questionNumber + 1,
                    [`answer-${quizState.questionNumber}`]: selectedOption.text,
                    correctCount: selectedOption.correct
                      ? quizState.correctCount + 1
                      : quizState.correctCount,
                  });
                }
              }}
            />
          )}
        </>
      )}
    </>
  );
};

function App() {
  return (
    <div className="layout en-gb dgquiz">
      <Header />
      <main className="main">
        <section className="splash splash__block landing">
          <div className="splash__wrap">
            <div className="container tab-full">
              <div className="row">
                <Quiz
                  quizQuestionsLive={quizQuestionsLive}
                  teaserQuestion={teaserQuestion}
                  finalQuestion={finalQuestion}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
