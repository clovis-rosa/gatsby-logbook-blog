import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BlogPostLayout from "../templates/BlogPostLayout"
// import Layout from "../templates/Layout"

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {/* <BlogPostLayout /> */}
      {children}
      <Footer />
    </>
  )
}
