import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <div>
          <h3>Products</h3>
          <ul>
            <li>
              <Link to="">Something</Link>
            </li>
          </ul>
        </div>
      </FooterContainer>
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
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
