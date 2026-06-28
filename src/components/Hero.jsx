//Intro section
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container mt-3">
        <h1>
          Imagining Things
          <small className="text-body-secondary"> that never existed</small>
        </h1>

        <p className="lead mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="d-flex justify-content-center gap-4 mt-4">
        <button type="button" className="btn btn-outline-secondary">
          View Projects
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Contact Me
        </button>
      </div>
    </>
  );
};

export default Hero;
