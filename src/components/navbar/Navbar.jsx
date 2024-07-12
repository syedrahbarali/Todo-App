import { Link, NavLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="navbar__container">
      <nav className="navbar">
        <div className="navbar__logo">
          <Link className="logo" to="/">
            Todo App <FaCheck />
          </Link>
        </div>

        <div className="navbar__menu">
          <ul
            className="navbar__list"
            style={{ left: showMenu ? "0" : "-100%" }}
          >
            <li className="navbar__list-item">
              <NavLink to="/" className="navbar__list-link">
                Your Tasks
              </NavLink>
            </li>
            <li className="navbar__list-item">
              <NavLink to="/create-task" className="navbar__list-link">
                Create Task
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar__auth">
          <Link to="/login" className="navbar__auth-login button--primary">
            Login
          </Link>

          {showMenu ? (
            <IoClose
              onClick={() => setShowMenu(!showMenu)}
              className="navbar__menu-icon"
            />
          ) : (
            <LuMenu
              onClick={() => setShowMenu(!showMenu)}
              className="navbar__menu-icon"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
5;
