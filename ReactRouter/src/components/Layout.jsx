


import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

// function Layout() {
//   return (
//     <>
//     <Header></Header>
//     <Outlet />
//     <Footer />
//     </>
//   )
// }

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout