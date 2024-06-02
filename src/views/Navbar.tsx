//import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // Now you can access properties of the location object
  console.log(location.pathname); // Current path of the route
  console.log(location.search); // Query parameters
  console.log(location.hash); // Hash fragment

  const dynamicClassNames1 = location.pathname === "/Home" ? "text-cyan-500 border-cyan-500" : "text-slate-50";
  const dynamicClassNames2 = location.pathname === "/AboutUs" ? "text-cyan-500 border-cyan-500" : "text-slate-50";
  const dynamicClassNames3 = location.pathname === "/Products" ? "text-cyan-500 border-cyan-500" : "text-slate-50";

  return (
    <nav className="border-gray-200  w-screen py-5">
      <div className=" xl:px-32 flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/Home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../../src/assets/images/logo2.png" className="w-12 object-cover  " />
          <p className="text-2xl font-bold text-zinc-50">GoodFinds</p>
          {/* <img src="../../src/assets/images/logo.png" className="w-20 object-cover mix-blend-multiply filter grayscale " /> */}
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
        <div className="hidden w-full md:block md:w-auto text-md" id="navbar-solid-bg">
          <Link to="/Home" className={`hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500 px-8 py-2 + ${dynamicClassNames1}`}>
            Home
          </Link>
          <Link to="/Products" className={`hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500 px-8 py-2 + ${dynamicClassNames3}`}>
            Products
          </Link>

          <Link to="/AboutUs" className={`hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500 px-8 py-2 + ${dynamicClassNames2}`}>
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
