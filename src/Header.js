import React from "react";
import logo from './react.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} className="nav-img"></img>
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