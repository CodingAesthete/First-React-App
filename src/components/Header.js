import React from "react";
import logo from '../images/react.png';

function Header() {
  return (
    <header>
      <nav>
        <div className="left-section">
          <img src={logo} className="nav-img"></img>
          <h2>React Facts</h2>
          <h3>2023</h3>
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