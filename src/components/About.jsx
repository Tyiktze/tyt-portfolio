//Short bio
import React from "react";
import nerd2 from "../assets/images/Projects/Nerd2.jpg";

const About = () => {
  return (
    <>
      <div className="container text-center border mt-5">
        <div className="row align-items-start">
          <div className="col-md-3">
            <img src={nerd2} alt="Profile picture" />
          </div>
          <div className="col">
            <h1>About me</h1>
            <p className="text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
