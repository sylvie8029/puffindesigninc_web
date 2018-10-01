import React from "react";
import "./index.css";

class Nav extends React.Component {
  render() {
    return (
      <nav id="main-menu" className="menu">
        <button id="toggle-menu" className="menu-toggle">
          toggle menu
        </button>
        <div className="menu-dropdown">
          <ul className="nav-menu">
            <li className="test">
              <a href="/about.html" />
              About
              <li>
                1
                <li>
                  2<li>3</li>
                </li>
              </li>
              <li>gasdgsd</li>
            </li>
            <li className="test">
              <a href="" />
              About
            </li>
            <li className="test">
              <a href="" />
              About
            </li>
            <li>
              <a href="" />
              About
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
