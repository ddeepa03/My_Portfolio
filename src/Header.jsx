import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyPortfolio</div>
      <nav className="nav">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
