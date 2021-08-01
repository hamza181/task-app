import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <div className="Navbar1">
          <div>
            <Link to="/">
              <h2 className="AppHeading">Todo App</h2>
            </Link>
          </div>
          <div>
            <Link to="/add-note">
              <button className="Button">Add Task</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
