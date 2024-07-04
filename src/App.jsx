import React from 'react';
import './App.css'; 

export default function App() {
  return (
    <div className="App">
      <div className="top-left-text">HOWCS.COM</div>
      <div className="centered-text">
        <span className="welcome-text">W E L C O M E &nspb; T O</span>
        <div className="howcs-text">HOWCS.COM</div>
        <div className="center-line"></div>
        <div className="subtitle-text">
          Kickstart your Computer Science Journey with Us and stay ahead in the field. From <br></br>newbie to pro, we've got your back every step of the way!
        </div>
      </div>
      <div className="start-text">
        Not sure where to start in Computer Science?
      </div>
      <button className="get-started-button">LET'S GET STARTED</button>
      <div className="top-line"></div>
      <div className="nav-links">
        <a href="#" className="nav-link">HOME</a>
        <a href="#" className="nav-link">RESOURCES</a>
        <a href="#" className="nav-link">ABOUT US</a>
        <button className="login-button">LOGIN</button>
      </div>
    </div>
  );
}
