import React from "react";
import logo from './react.png';

function Header() {
  return (
    <header>
      <nav>
        <div className="left-section">
          <img src={logo} className="nav-img"></img>
          <h2>React Facts</h2>
        </div>
        <ul className="nav-items">
          <li>Demo</li>
          <li>Download</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;