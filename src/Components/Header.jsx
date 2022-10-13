import React from "react";

export default function Header() {
  return (
    <>
      <section className="header">
        <a href="/" className="header__logo">
          Logo
        </a>
        <div className="header__nav">
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Home">Contact</a>
          <a href="/400">Join Now</a>
        </div>
        <button href="#" className="Header__button">
          Get In Touch
        </button>
      </section>
    </>
  );
}
