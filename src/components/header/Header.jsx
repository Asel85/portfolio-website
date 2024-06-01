import React from 'react'
import "./header.css";

const Header = () => {
  return (
    <header className="header">
    <div className="header__wrapper">
        <h1 className="header__title">
            <strong>Hi, my name is <em>Asel</em></strong><br />
            a frontend developer
        </h1>
        <div className="header__text">
            <p>with passion for learning and creating.</p>
        </div>
        <a href="https://files.fm/u/dnbq74chrx#/view/drmc9e28j5" className="btn">Download CV</a>
    </div>
</header>
  )
}

export default Header
