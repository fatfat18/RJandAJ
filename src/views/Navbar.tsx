import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-screen bg-slate-950 flex items-center justify-center gap-6 p-6 text-xl transition duration-500">
      <Link to="/" className=" hover:text-white border-b-2 border-transparent text-cyan-500 hover:border-white px-8 py-2">
        Home
      </Link>

      <Link to="/AboutUS" className=" hover:text-white border-b-2 border-transparent text-cyan-500 hover:border-white px-8 py-2">
        About Us
      </Link>

      <Link to="/Products" className=" hover:text-white border-b-2 border-transparent text-cyan-500 hover:border-white px-8 py-2">
        Products
      </Link>
    </nav>
  );
}

export default Navbar;
