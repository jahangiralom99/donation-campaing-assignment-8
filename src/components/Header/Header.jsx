import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="py-6">
      <div className="flex justify-between">
        <div>
          <img className="w-[70%]" src={logo} alt="" />
        </div>
        <ul className="flex gap-5 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
