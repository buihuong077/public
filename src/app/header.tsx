import React from "react";

function Header() {
  return (
    <div>
      <div>
        <span>Logo</span>
        <a href="#">Home</a>

        <span>Your library</span>
        <a href="#">Expert Solutions</a>
      </div>
      <div>
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input type="text" placeholder="Search for a question" />
      </div>
      <div>
        <span>
          <i className="fa-solid fa-plus"></i>
        </span>
        <span>
          <i className="fa-regular fa-bell"></i>
        </span>
      </div>
    </div>
  );
}

export default Header;
