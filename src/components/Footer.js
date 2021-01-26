import React from "react"

export default function Footer() {
  return (
    <footer className="global-wrapper">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}
