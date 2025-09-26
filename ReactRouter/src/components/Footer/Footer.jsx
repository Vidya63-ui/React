import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
 return (
    <footer className="bg-white border-t border-gray-200 shadow-inner">
  <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-10">
    <div className="md:flex md:justify-between md:items-start">
      
      {/* Logo */}
      <div className="mb-8 md:mb-0">
        <Link to="/" className="flex items-center group">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            className="mr-3 h-16 transform group-hover:scale-105 transition"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
        
        {/* Resources */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Resources
          </h2>
          <ul className="text-gray-600 space-y-3 font-medium">
            <li>
              <Link to="/" className="hover:text-orange-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-600 transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Follow us
          </h2>
          <ul className="text-gray-600 space-y-3 font-medium">
            <li>
              <a
                href="https://github.com/hiteshchoudhary"
                className="hover:text-orange-600 transition"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-600 transition">
                Discord
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Legal
          </h2>
          <ul className="text-gray-600 space-y-3 font-medium">
            <li>
              <Link to="#" className="hover:text-orange-600 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-orange-600 transition">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Divider */}
    <hr className="my-8 border-gray-200 sm:mx-auto" />

    {/* Bottom Section */}
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center">
        © 2023{" "}
        <a href="https://hiteshchoudhary.com/" className="hover:underline hover:text-orange-600">
          hiteshchoudhary
        </a>
        . All Rights Reserved.
      </span>

      {/* Social Icons */}
      <div className="flex mt-6 space-x-5 sm:justify-center sm:mt-0">
        {[
          { name: "Facebook", path: "M6.135 3H8V0H6.135a4.147 4.147..." },
          { name: "Discord", path: "M16.942 1.556a16.3 16.3..." },
          { name: "Twitter", path: "M20 1.892a8.178 8.178..." },
          { name: "GitHub", path: "M10 .333A9.911 9.911..." },
          { name: "Dribbble", path: "M10 0a10 10 0..." },
        ].map((icon, i) => (
          <Link
            key={i}
            to="#"
            className="text-gray-500 hover:text-white bg-gray-100 hover:bg-orange-600 rounded-full p-2 transition transform hover:scale-110"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d={icon.path} />
            </svg>
            <span className="sr-only">{icon.name}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer