import React from "react";

function Header() {
  return (
    <header id="page-header">
      <div>
        <a href="/">
          <img id="page-logo" src="./assets/emblem-light.svg" />
        </a>
      </div>
      <nav id="page-nav">
        <ul id="page-nav-ul">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
