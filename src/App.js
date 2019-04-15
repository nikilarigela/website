import React, { Component } from "react";
import "./App.css";
import logo from "./animated.jpg";

class App extends Component {
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
              <span class="bottom-line">Application Developement </span>
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
