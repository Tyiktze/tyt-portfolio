//List of skills
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Skills = () => {
  const frontend = ["React", "Bootstrap", "CSS", "Material UI"];
  const backend = ["Node JS", "MongoDB"];
  const languages = ["Lua", "C++", "Java", "Python"];
  const tools = ["Git", "Github", "VS Code", "Figma"];

  return (
    <>
      <div className="container mt-5">
        <p className="d-flex gap-1 justify-content-center">
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Frontend
          </a>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Backend
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample3"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Languages
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample4"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Tools
          </button>
        </p>
        <div className="row" style={{ minHeight: "300px" }}>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="card card-body d-flex flex-col gap-2">
                {frontend.map((skill) => {
                  return (
                    <span className="badge text-bg-secondary p-4" key={skill}>
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="card card-body d-flex flex-col gap-2">
                {backend.map((skill) => {
                  return (
                    <span className="badge text-bg-secondary p-4" key={skill}>
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample3">
              <div className="card card-body d-flex flex-col gap-2">
                {languages.map((skill) => {
                  return (
                    <span className="badge text-bg-secondary p-4" key={skill}>
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample4">
              <div className="card card-body d-flex flex-col gap-2">
                {tools.map((skill) => {
                  return (
                    <span className="badge text-bg-secondary p-4" key={skill}>
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
