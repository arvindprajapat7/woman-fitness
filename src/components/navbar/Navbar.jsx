import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Fill_btn from "../btns/Fill_btn";
import "./Navbar.css";
import TopBar from "../topbar/TopBar";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu(){
    setOpenMenu((prev)=>!prev)
  }
  return (
    <>
      <section className="header">
        <TopBar />
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand ps-2" href="#">
                <img src="../../images/logo.svg" width="200" />
              </a>
              <button
                className="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleMenu}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="about"
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="services"
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="portfolio"
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                    >
                      Portfolio
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="blog"
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="contact"
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="nav-right">
                <Fill_btn text="Appointment" href="#" />
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
