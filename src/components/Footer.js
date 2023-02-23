function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-xs-4">
            <div className="footer__left">
              <div className="footer__logo">
                <a
                  href="https://www.diageo.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    //  src={"./static/images/diageo_logo.svg"}
                    src={"./static/images/diageo_logo.svg"}
                    alt="Diageo Logo"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="footer__copywrite">© 2023 Diageo</div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-8">
            <div className="footer__right">
              <div className="footer__right">
                <ul className="footer__nav footernav">
                  <li className="footernav-item">
                    <a
                      href="mailto:information@drinkiq.com"
                      className="footernav-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
                <div id="footer">
                  <div id="dg_footer_wrapper">
                    <div id="dg_footer_wrapper_inner">
                      <div className="dg_footer_main  ">
                        <div className="dg_footer_row_0">
                          <ul>
                            <li className="dg_footer_item_0">
                              <a
                                id="dg_TERMS_AND_CONDITIONS"
                                href="https://footer.diageohorizon.com/dfs/assets/www.drinkiq.com/TnC_en.html?locale=en-gb"
                                target="_blank"
                                rel="noreferrer"
                                title=""
                              >
                                Conditions of Use
                              </a>
                            </li>
                            <li className="dg_footer_item_1">
                              <a
                                id="dg_PRIVACY_CENTRE"
                                href="https://www.diageoprivacycentre.com/en-gb?pp=https://footer.diageohorizon.com/dfs/assets/www.drinkiq.com/PrivacyPolicy_en.html?locale=en-gb"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Diageo Privacy Centre
                              </a>
                            </li>
                            <li className="dg_footer_item_2">
                              <a
                                id="dg_UGC_POLICY"
                                href="https://footer.diageohorizon.com/dfs/assets/www.drinkiq.com/UGC_en.html?locale=en-gb"
                                target="_blank"
                                rel="noreferrer"
                              >
                                UGC Policy
                              </a>
                            </li>
                            <li className="dg_footer_item_3">
                              <a
                                id="dg_ACCESSIBILITY"
                                href="https://footer.diageohorizon.com/dfs/assets/www.drinkiq.com/www.drinkiq.com_en-gb_final_accessibility.html"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Accessibility
                              </a>
                            </li>
                            {/* <li className="dg_footer_item_4">
                              <a
                                className="optanon-toggle-display cookie-settings-button"
                                title="Cookie Settings"
                                aria-label="Cookie Settings"
                                href="javascript:void(0);"
                                tabindex="3"
                                id="dg_COOKIE_LINK"
                              >
                                Do Not Sell or Share My Personal Information
                              </a>
                            </li> */}
                            <li className="dg_footer_item_5">
                              <a
                                id="dg_PRIVACY_POLICY"
                                href="https://footer.diageohorizon.com/dfs/assets/www.drinkiq.com/PrivacyPolicy_en.html?locale=en-gb"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Privacy and Cookie Notice
                              </a>
                            </li>

                            <li className="dg_footer_item_7">
                              <a
                                id="dg_DRINK_IQ"
                                href="http://www.drinkiq.com/en-gb?agp=true"
                                target="_blank"
                                rel="noreferrer"
                              >
                                DRINKiQ
                              </a>
                            </li>
                          </ul>
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
    </footer>
  );
}

export default Footer;
