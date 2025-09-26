import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md bg-white">
  <nav className="border-gray-200 px-4 lg:px-8 py-3">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      
      {/* ========== Logo ========== */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          className="h-12"
          alt="Logo"
        />
        <span className="text-xl font-bold text-gray-800 hidden sm:block">
          MyWebsite
        </span>
      </Link>

      {/* ========== Right Side Buttons ========== */}
      <div className="flex items-center space-x-2 lg:order-2">
        <Link
          to="#"
          className="text-gray-700 border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 transition"
        >
          Log in
        </Link>
        <Link
          to="#"
          className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 transition"
        >
          Get started
        </Link>
      </div>

      {/* ========== Nav Links ========== */}
      <div
        className="hidden lg:flex lg:w-auto lg:order-1"
        id="navbar"
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-8 font-medium mt-4 lg:mt-0">
          
          {/* Home */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-3 rounded-md transition ${
                  isActive ? "text-orange-600 font-semibold" : "text-gray-700"
                } hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 hover:text-orange-600`
              }
            >
              Home
            </NavLink>
          </li>

          {/* About */}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 px-3 rounded-md transition ${
                  isActive ? "text-orange-600 font-semibold" : "text-gray-700"
                } hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 hover:text-orange-600`
              }
            >
              About
            </NavLink>
          </li>

          {/* Contact */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 px-3 rounded-md transition ${
                  isActive ? "text-orange-600 font-semibold" : "text-gray-700"
                } hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 hover:text-orange-600`
              }
            >
              Contact
            </NavLink>
          </li>

          {/* GitHub */}
          <li>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                `block py-2 px-3 rounded-md transition ${
                  isActive ? "text-orange-600 font-semibold" : "text-gray-700"
                } hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 hover:text-orange-600`
              }
            >
              GitHub
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</header>
)
}

export default Header