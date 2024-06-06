import React from "react";
import { Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="p-1 text-white header">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <div className="font-link">
              User Review Summarization
            </div>
          </Link>
          {/* <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/" className="nav-link px-2 text-secondary">
                Home
              </NavLink>
            </li>
          </ul> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
