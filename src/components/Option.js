import cx from "classnames";

const Option = ({
  option,
  index,
  selectedOptionIndex,
  handleOptionClick,
  qNum,
}) => {
  const optionClassNames = cx(
    "quizmain__general input radio radio--dg radio--dgimage",
    {
      "incorrect selected disabled": selectedOptionIndex === index,
      "correct selected disabled":
        selectedOptionIndex !== undefined && option.correct,
      "radio--prelim": qNum === 0,
    }
  );

  return (
    <div
      className={optionClassNames}
      onClick={() => handleOptionClick(index, option)}
    >
      <div className="radio__imagewrap imagewrap">
        {option.image && <img src={option.image.url} alt="img" width="400" />}
      </div>
      <span className="radio__text">{option.text}</span>
    </div>
  );
};

export default Option;
