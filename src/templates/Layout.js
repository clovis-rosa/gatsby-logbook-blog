import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="global-wrapper">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
