//A components for the projects
import React from "react";

const ProjectCard = ({ title, description, image }) => {
  const resolveURL = (title) => {
    //Resolves spaces from titles for a better URL
    return title.replace(/\s+/g, "");
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        {image ? (
          <img src={image} className="card-img-top" alt="..." height="180px" />
        ) : (
          <div
            className="card-img-top bg-secondary d-flex align-items-center justify-content-center text-white"
            style={{ height: "180px" }}
          >
            No Image
          </div>
        )}
        <div className="card-body text-center d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={"#" + resolveURL(title)} className="btn btn-primary mt-auto">
            View more
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
