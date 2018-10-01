import React from "react";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <div id="header" className="page-header">
        <div className="title">
          <h1>Puffin Design</h1>
          <div className="slogan">Perfect Design</div>
        </div>
      </div>
    );
  }
}

export default Header;
