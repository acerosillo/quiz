function Progress({ currentQuestionIndex, totalQuestionsCount }) {
  return (
    <div className="text">
      Question {currentQuestionIndex} / {totalQuestionsCount}
    </div>
  );
}

export default Progress;
