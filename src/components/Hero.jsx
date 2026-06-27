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
          I'm a frontend developer who loves to create new and innovative
          things. I'm passionate about building user-friendly interfaces and
          creating seamless user experiences. I'm always looking for new
          challenges and opportunities to learn and grow.
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
