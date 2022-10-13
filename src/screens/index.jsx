import React from "react";
import { Link } from "../components/Link";

export default function index() {
  return (
    <>
      <div className="home__Section">
        <div className="home__Section__content">
          <h1 className="home__Section__content__title">
            Welcome to the home page
          </h1>
          <p className="home__Section__content__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam
            consequuntur quas quidem voluptatum natus. Quisquam, quae. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam
            consequuntur quas quidem voluptatum natus. Quisquam, quae.
          </p>
          <a href="/About" className="home__Section__content__button">
            Click And Go To About
          </a>
        </div>
      </div>
    </>
  );
}
