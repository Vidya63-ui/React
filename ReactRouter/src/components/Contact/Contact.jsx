import React from 'react'

function Contact() {
  return (
   <div className="relative flex items-center justify-center min-h-[700px] bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 w-full">
    <div className="mt-8 overflow-hidden shadow-xl rounded-2xl bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Contact Info */}
        <div className="p-8 bg-gray-50 sm:rounded-l-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Get in touch
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-600 mt-3">
            Fill in the form to start a conversation
          </p>

          {/* Address */}
          <div className="flex items-center mt-8 text-gray-700">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-orange-500"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span className="ml-4 text-md font-semibold">Acme Inc, Street, State, Postal Code</span>
          </div>

          {/* Phone */}
          <div className="flex items-center mt-6 text-gray-700">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-orange-500"
            >
              <path d="M3 5a2 2 0 012-2h3.28l1.498 4.493-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257 4.493 1.498V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span className="ml-4 text-md font-semibold">+44 1234567890</span>
          </div>

          {/* Email */}
          <div className="flex items-center mt-6 text-gray-700">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-orange-500"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span className="ml-4 text-md font-semibold">info@acme.org</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="p-8 flex flex-col justify-center bg-white">
          <div className="space-y-4">
            
            {/* Name */}
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="w-full py-3 px-4 rounded-lg border border-gray-300 shadow-sm 
                           focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                           outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full py-3 px-4 rounded-lg border border-gray-300 shadow-sm 
                           focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                           outline-none transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="tel" className="sr-only">Telephone</label>
              <input
                type="tel"
                id="tel"
                placeholder="Telephone Number"
                className="w-full py-3 px-4 rounded-lg border border-gray-300 shadow-sm 
                           focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                           outline-none transition"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full md:w-40 bg-orange-600 hover:bg-orange-700 
                         text-white font-bold py-3 px-6 rounded-lg mt-4 
                         transition transform hover:scale-105 duration-200"
            >
              Submit
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
</div>

  )
}

export default Contact