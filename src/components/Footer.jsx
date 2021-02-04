import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function Footer() {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <div>
            <h3>Products</h3>
            <ul>
              <li>
                <Link to="/">Something</Link>
              </li>
              <li>
                <Link to="/">Enterprise</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Customer Stories</Link>
              </li>
              <li>
                <Link to="/">Release Notes</Link>
              </li>
              <li>
                <Link to="/">Status</Link>
              </li>
              <li>
                <Link to="/">Download</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Features</h3>
            <ul>
              <li>
                <Link to="/">Version Control</Link>
              </li>
              <li>
                <Link to="/">Design Collaboration</Link>
              </li>
              <li>
                <Link to="/">Developer Handoff</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li>
                <Link to="/">Getting Started</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Books</Link>
              </li>
              <li>
                <Link to="/">Webinars</Link>
              </li>
              <li>
                <Link to="/">Design Systems</Link>
              </li>
              <li>
                <Link to="/">Remote Work</Link>
              </li>
              <li>
                <Link to="/">Help Center</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul>
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">LinkeIn</Link>
              </li>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Dribbble</Link>
              </li>
              <li>
                <Link to="/">Instagram</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Legal</Link>
              </li>
            </ul>
          </div>
        </FooterContainer>
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
      </FooterSection>
    </>
  )
}

const FooterSection = styled.footer`
  background: var(--color-black);
  color: var(--color-white);
  padding: 6rem 2rem 3rem;

  @media screen and (max-width: 801px) {
    padding: 6rem 2rem 3rem;
  }
`
const FooterContainer = styled.nav`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
`
