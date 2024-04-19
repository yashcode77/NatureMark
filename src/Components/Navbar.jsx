import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <nav className=" bg-green-800 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-20">
        <Link className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="src\Assets\NatureMark System Logo.png"
            className="w-12"
            alt=""
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            NatureMark System
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to="/signup"
            className="block border-1 bg-green-7 text-white hover:cursor-pointer hover:opacity-75 hover:border-2 active:border-2 rounded-md px-4 py-1 hover:bg-green-100 hover:text-black active:text-black hover:font-normal my-auto bg-green-600 "
          >
            Sign Up
          </Link>
          <button
            onClick={toggleOptions}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={showOptions}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            showOptions
              ? "block bg-green-800 transition-all w-screen text-center"
              : "hidden"
          }  items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col ${
              showOptions ? "text-black gap-y-12" : null
            } p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 `}
          >
            <li>
              <Link
                to="/"
                className="block text-white hover:cursor-pointer hover:opacity-75 hover:border-2 active:border-2 rounded-md px-4 py-1 hover:bg-green-100 hover:text-black active:text-black hover:font-normal my-auto"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <select
                name="Services"
                id="Services"
                defaultValue={`Services`}
                className="w-32 mx-auto text-white block text-center border-transparent hover:cursor-pointer hover:bg-green-100 hover:text-black hover:opacity-75 hover:border-2 active:border-2 rounded-md px-4 py-1   hover:font-normal my-auto bg-transparent "
              >
                <option value="Services" className="text-black">
                  Services
                </option>
                <option className="text-black">
                  Carbon Credit MarketPlace
                </option>
                <option className="text-black">Data Analysis</option>
                <option className="text-black">AirborTag App</option>
                <option className="text-black">AirborTag Device</option>
              </select>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="block text-white hover:cursor-pointer hover:opacity-75 hover:border-2 active:border-2 rounded-md px-4 py-1 hover:bg-green-100 hover:text-black active:text-black hover:font-normal my-auto"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block text-white hover:cursor-pointer hover:opacity-75 hover:border-2 active:border-2 rounded-md px-4 py-1 hover:bg-green-100 hover:text-black active:text-black hover:font-normal my-auto"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
