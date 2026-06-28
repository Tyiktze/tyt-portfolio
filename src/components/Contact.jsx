//Contact information
import React from "react";

const Contact = () => {
  const name = "Name: Sum ting Wong";
  const email = "Email: Email@email.email";
  const github = "Github: @GithubName";

  return (
    <>
      <div className="container mt-5 text-center">
        <h2 className="mb-4">Contact Me</h2>
        <div className="d-flex flex-column align-items-center gap-2">
          <span className="badge text-bg-dark">{name}</span>
          <span className="badge text-bg-dark">{email}</span>
          <span className="badge text-bg-dark">{github}</span>
          <div
            className="badge text-bg-dark"
            style={{ width: "100%", maxWidth: "500px" }}
          >
            <form>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mb-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
