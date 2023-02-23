import cx from "classnames";
import randomFacts from "../data/randomFacts.json";

function RandomFactsIntro({ data, showRandomFact }) {
  //console.log(data);
  var randomNumberSel = Math.floor(Math.random() * data.length);
  var textValue = randomFacts[randomNumberSel].text;
  var imgValue = randomFacts[randomNumberSel].image.url;

  const hideRandomFact = cx("splash__teaser", {
    hide: showRandomFact === true,
  });

  return (
    <>
      <div className="col-lg-7 col-xl-7 col-md-7 col-sm-12 fade-in-image">
        <div className="content__right dgtheme--green">
          <div className="blocks blocks__left blocks--green top"></div>
          <div className="blocks blocks__right blocks--green bottom"></div>
          <div className={hideRandomFact}>
            <div className="splash__title teaser__title">
              {textValue}
              <span className="splash__question color--blue">
                Fact or Fiction
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-xl-5 col-md-5 col-sm-12 order-first">
        <div className="row">
          <div className="content__left">
            <img src={imgValue} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RandomFactsIntro;
