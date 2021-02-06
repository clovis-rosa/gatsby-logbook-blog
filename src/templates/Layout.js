import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import BlogPostLayout from "../templates/BlogPostLayout"

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
        {!BlogPostLayout ? <Hero /> : null}
      </header>

      {children}
      <Footer />
    </>
  )
}
