import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-gray-200 bg-gray-100 w-screen" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../../src/assets/images/logo.png" className="w-20 object-cover mix-blend-multiply" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-950">GoodFinds</span> */}
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto text-xl" id="navbar-solid-bg">
          <Link to="/" className=" text-slate-950 hover:text-cyan-500 border-b-2 border-transparent  hover:border-cyan-500 px-8 py-2">
            Home
          </Link>

          <Link to="/AboutUS" className=" text-slate-950 hover:text-cyan-500 border-b-2 border-transparent  hover:border-cyan-500 px-8 py-2">
            About Us
          </Link>

          <Link to="/Products" className=" text-slate-950 hover:text-cyan-500 border-b-2 border-transparent  hover:border-cyan-500 px-8 py-2">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
