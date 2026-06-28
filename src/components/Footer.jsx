import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <p className="mb-1">&copy; 2026 TYT. All rights reserved.</p>

      <div className="d-flex justify-content-center gap-3">
        <a href="#" className="text-white">
          GitHub
        </a>
        <a href="#" className="text-white">
          LinkedIn
        </a>
        <a href="#" className="text-white">
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
