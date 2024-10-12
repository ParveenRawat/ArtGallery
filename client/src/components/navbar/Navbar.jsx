import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "../DropDown/Dropdown";
const navitems = [
  {
    itemname: "About",
    path: "/about",
  },
  {
    itemname: "Help",
    path: "/help",
  },
  {
    itemname: "Contact",
    path: "/contact",
  },
  {
    itemname: "Feedback",
    path: "/feedback",
  },
];

const Navbar = () => {
  const location = window.location.href;

  const { userInfo } = useSelector((state) => state.auth);

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 cursor-pointer text-xl">ArtGallery</span>
        </a>

        <nav className="flex cursor-pointer flex-wrap items-center justify-center gap-4 text-base md:ml-auto md:mr-auto">
          {navitems.forEach(
            (item) => (item.active = location.endsWith(item.path)),
          )}
          {navitems.map(({ itemname, path, active }) => (
            <Link
              className={twMerge(
                "hover:text-gray-900",
                active
                  ? "border-b-2 border-blue-200 text-blue-500 transition-all" //apply style for active navitem here
                  : "",
              )}
              key={path}
              to={path}
            >
              {itemname}
            </Link>
          ))}
        </nav>
        {userInfo ? (
          <Dropdown username={userInfo.name} />
        ) : (
          <Link
            to={"/login"}
            className="mt-4 inline-flex items-center rounded border-0 bg-blue-100 px-3 py-1 text-base hover:bg-blue-200 focus:outline-none md:mt-0"
          >
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="ml-1 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Navbar;
