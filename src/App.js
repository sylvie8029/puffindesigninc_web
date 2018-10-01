import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import Nav from "./components/nav";
import Header from "./components/header";
import Aside from "./components/aside";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Aside />
        <Main />
      </div>
    );
  }
}

export default App;
