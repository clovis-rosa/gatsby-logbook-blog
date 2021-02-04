import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function Footer() {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <FooterWrap>
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
          </FooterWrap>
          <FooterWrap>
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
          </FooterWrap>
          <FooterWrap>
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
          </FooterWrap>
          <FooterWrap>
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
          </FooterWrap>
          <FooterWrap>
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
          </FooterWrap>
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
  padding: 3rem 2rem 6rem;

  @media screen and (max-width: 801px) {
    padding: 3rem 2rem 6rem;
  }
`
const FooterContainer = styled.nav`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  gap: 50px;
`
const FooterWrap = styled.div`
  padding: 0 1rem 2rem 1rem;
  font-family: var(--font-family-secondary-mono);
  color: var(--color-white);

  h3 {
    font-family: var(--font-family-secondary-mono);
    font-size: 0.6rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  ul {
    li {
      list-style: none;

      a {
        position: relative;
        font-family: var(--font-family-secondary-mono);
        font-size: 0.6rem;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0.05em;
        cursor: pointer;
        margin-bottom: 1rem;
        text-decoration: none;
        color: inherit;

        &::after {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color-white);
          content: "";
          opacity: 0;
          transition: opacity 0.3s, transform 0.3s;
          transform: translateY(10px);
        }

        &:hover::after,
        &:focus::after {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    }
  }
`
