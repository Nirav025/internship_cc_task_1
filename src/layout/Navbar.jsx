import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">MyDemo</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;