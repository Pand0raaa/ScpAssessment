import { Link } from "react-router-dom";
import React from "react";
import './nav.css';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-nav">
          <button
            className="nav-link btn btn-link"
            style={{
              border: "none",
              outline: "none",
              padding: "0",
              background: "none",
              color: "inherit",
            }}
            type="button"
          ></button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <a href="/scp_foundation" className="nav-link">
              <h1 className="TitleNav">SCP Foundation</h1>
            </a>

            <Link to="/scp_Home">
              <button className="nav-link active" aria-current="page" href="#">
                Home
              </button>
            </Link>
            <Link to="/scp_002">
              <button className="nav-link" href="#">
                SCP-002
              </button>
            </Link>

            <Link to="/scp_003">
              <button className="nav-link" href="#">
                SCP-003
              </button>
            </Link>

            <Link to="/scp_004">
              <button className="nav-link" href="#">
                SCP-004
              </button>
            </Link>

            <Link to="/scp_005">
              <button className="nav-link" href="#">
                SCP-005
              </button>
            </Link>

            <Link to="/scp_006">
              <button className="nav-link" href="#">
                SCP-006
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
