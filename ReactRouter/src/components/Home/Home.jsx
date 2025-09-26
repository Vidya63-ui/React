import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
  {/* Hero / Download Section */}
  <aside className="relative overflow-hidden text-gray-900 rounded-2xl shadow-lg sm:mx-16 mx-2 sm:py-20 bg-gradient-to-r from-orange-50 to-orange-100">
    <div className="relative z-10 max-w-screen-xl px-6 py-16 mx-auto text-center sm:text-left lg:px-12">
      <div className="max-w-xl space-y-8 sm:ml-auto sm:text-right">
        
        {/* Heading */}
        <h2 className="text-4xl font-extrabold sm:text-5xl leading-tight">
          Get Started Today
          <span className="block text-orange-700 mt-2">
            Download Our App
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600">
          Experience seamless control and efficiency with just one click.  
          Available for all devices.
        </p>

        {/* CTA Button */}
        <Link
          className="inline-flex items-center px-6 py-3 font-medium text-white bg-orange-600 rounded-lg shadow-md hover:bg-orange-700 transition"
          to="/"
        >
          <svg
            className="mr-2"
            width="22"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0l8 8h-6v8h-4v-8h-6l8-8zm-12 24v-2h24v2h-24z" />
          </svg>
          Download Now
        </Link>
      </div>
    </div>

    {/* Background Image */}
    <div className="absolute inset-0 flex items-center justify-center sm:justify-start sm:ml-10 opacity-90">
      <img
        className="w-80 sm:w-96"
        src="https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg"
        alt="Remote Illustration"
      />
    </div>
  </aside>

  {/* Secondary Image Section */}
  <div className="grid place-items-center sm:mt-24 mt-12">
    <img
      className="sm:w-96 w-56 drop-shadow-lg"
      src="https://images.pexels.com/photos/534219/pexels-photo-534219.jpeg"
      alt="Remote Device"
    />
  </div>

  {/* Bottom Heading */}
  <h1 className="text-center text-3xl sm:text-5xl py-12 font-semibold text-gray-800">
    Smart Control, Anytime Anywhere
  </h1>
</div>

  );
}

export default Home