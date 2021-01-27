import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      {children}
      <Footer />
    </>
  )
}
