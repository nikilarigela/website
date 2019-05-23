import React, { Component } from "react";
import "./App.css";
import logo from "./animated.jpg";
import instaLogo from "./instagramIcon.png";
import twitterLogo from "./twitterIcon.png";
import githubLogo from "./githubIcon.png";

class App extends Component {
  openLinkInNewTab = url => {
    var win = window.open(url, "_blank");
    win.focus();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="top-content" />
          <img className="logo" src={logo} alt="Logo" />
          <div className="content">
            <p>Hi, I'm Kartik.</p>
            <p>
              <span>I'm a Software Engineer,</span>
              <br />
              currently working on Mobile <br />
              <span class="bottom-line">Application Developement. </span>
            </p>
          </div>
          <div className="social-links">
            <img
              className="social-icon"
              src={twitterLogo}
              onClick={() =>
                this.openLinkInNewTab("https://twitter.com/nikilarigela")
              }
            />
            <img
              className="social-icon"
              src={githubLogo}
              onClick={() =>
                this.openLinkInNewTab("https://github.com/nikilarigela")
              }
            />
            <img
              className="social-icon"
              src={instaLogo}
              onClick={() =>
                this.openLinkInNewTab(
                  "https://www.instagram.com/nikilarigela0110/"
                )
              }
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
