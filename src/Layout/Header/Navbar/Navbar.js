import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <div className="Navbar1">
          <div>
            <h2 className='AppHeading'>Todo App</h2>
          </div>
          <div>
            <button className="Button">Add Task</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
