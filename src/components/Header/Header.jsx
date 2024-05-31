import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Header.css";
import { BsXLg, BsList } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-6 ">
      <div className="flex justify-between items-center">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {!open ? (
            <BsList className="text-4xl "></BsList>
          ) : (
            <BsXLg className="text-4xl "></BsXLg>
          )}
        </div>
        <div className="md:hidden">
          <img className="w-40" src={logo} alt="" />
        </div>
      </div>
      <div
        className={`duration-1000 ${
          open ? "left-5 bg-red-100 md:bg-white" : "-left-96"
        } md:flex justify-between absolute md:static`}
      >
        <div className="hidden md:block ">
          <img className="md:w-[70%]" src={logo} alt="" />
        </div>
        <ul className="md:flex gap-5 items-center shadow-xl md:shadow-none p-4">
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
