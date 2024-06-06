import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { CgProfile } from "react-icons/cg";
import "./HomePage.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Link to="/profile" className="profile">
        <IconContext.Provider value={{ color: "white", size: "40px" }}>
          <CgProfile />
        </IconContext.Provider>
      </Link>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Hotel Name</h5>
            <p className="card-text">
              Description about hotel
            </p>
            <p className="card-text">
              Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
