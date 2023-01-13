import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AUTHENTICATED } from "../const";
import Logo from "../resources/img/navLogo.svg";
const Nav = ({ isAuthenticated }) => {
  return (
    <nav
      className="sticky top-0 z-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30
    border-b border-gray-200 firefox:bg-opacity-30 text-lg shadow-md"
    >
      <div className="flex justify-between m-auto">
        <div className="flex">
          <div className="pl-10">
            <img className="w-16" src={Logo} alt="KN Logo" />
          </div>
          <div className="flex space-x-5 text-lime-600 my-auto ml-14">
            <Link to={"/"} className="hover:text-lime-300">
              Home
            </Link>
            <a href="" className="hover:text-lime-300">
              Stores
            </a>
            <a href="" className="hover:text-lime-300">
              Services
            </a>
          </div>
        </div>
        <div className="my-auto mr-8">
          <Link
            to={
              localStorage.getItem(AUTHENTICATED) === "false"
                ? "/login"
                : "/login?logout=true"
            }
            className="bg-lime-500 p-3 rounded-lg text-lime-50
          hover:bg-lime-300 hover:text-lime-700 shadow-md"
          >
            {localStorage.getItem(AUTHENTICATED) === "false"
              ? "Log In"
              : "Log Out"}
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
