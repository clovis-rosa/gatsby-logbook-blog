import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { renderToStaticMarkup } from "react-dom/server"
import { SvgArrowNext } from "./SvgFiles"

export default function Footer() {
  const svgString = encodeURIComponent(
    renderToStaticMarkup(<SvgArrowNext fill="#fff" />)
  )

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
        <FooterContainerForm>
          <FooterWrapForm>
            <h2>Sign Up for our newsletter</h2>
            <p>
              Monthly hand-picked discoveries and stories of thriving in a new
              world of design. GIFs (often) included.
            </p>
            <div>
              <Form>
                <label htmlFor="">EMAIL ADDRESS</label>
                <FormInputFlex>
                  <NewsletterInput>
                    <input
                      type="email"
                      name="email-universal"
                      placeholder="yourname@example.com"
                      name="email"
                      mail="true"
                    />
                  </NewsletterInput>
                  <NewsletterSubmit>
                    <input
                      className="input-inner"
                      type="submit"
                      value=""
                      style={{
                        backgroundImage: `url('data:image/svg+xml;utf8,${svgString}')`,
                      }}
                    ></input>
                  </NewsletterSubmit>
                </FormInputFlex>
              </Form>
            </div>
          </FooterWrapForm>
          <FooterWrapLegal>
            <p>© Copyright {new Date().getFullYear()}</p>
            <p>All rights reserved.</p>
            <a href="https://clovisrosa.vercel.app/">Built by Clovis Rosa.</a>
          </FooterWrapLegal>
        </FooterContainerForm>
      </FooterSection>
    </>
  )
}

const FooterSection = styled.footer`
  background: var(--color-black);
  color: var(--color-white);
  padding: 3rem 2rem 3rem;

  @media screen and (max-width: 801px) {
    /* padding: 3rem 2rem 6rem; */
  }
`
const FooterContainer = styled.nav`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  gap: 50px;
`
const FooterWrap = styled.div`
  /* padding: 0 1rem 2rem 1rem; */
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
const FooterContainerForm = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* justify-content: space-between; */
  /* align-items: center; */
  gap: 50px;
`
const FooterWrapForm = styled.div`
  color: var(--color-white);
  /* padding: 0 1rem 2rem 1rem; */

  h2 {
    font-family: var(--font-family-primary);
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: normal;
    margin-bottom: 1rem;
  }

  p {
    font-family: var(--font-family-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: normal;
    margin-bottom: 1rem;
  }

  .input-inner {
    transform: translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg);
    transform-style: preserve-3d;
  }
`

const FooterWrapLegal = styled.div`
  font-family: var(--font-family-secondary-mono);
  font-size: 0.6rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.05em;
  color: var(--color-white);
  /* padding: 0 1rem 2rem 1rem; */

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`

const Form = styled.form`
  position: relative;
  background: transparent;

  label {
    font-family: var(--font-family-secondary-mono);
    font-size: 0.6rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--color-white);
    display: block;
    margin-bottom: 0.25rem;
  }
`

const FormInputFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const NewsletterInput = styled.div`
  width: 100%;

  input {
    font-family: var(--font-family-secondary);
    padding-right: 1.5rem;
    color: #fff;
    border-color: #fff;
    box-shadow: inset 0 0 0 0 #fff;
    background: rgba(245, 134, 121, 0.2);
    display: flex;
    height: 2rem;
    margin-bottom: 0rem;
    padding: 8px 0.5rem;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    /* border-color: #191a1b; */
    border-radius: 0.2rem;
    background-color: transparent;
    /* box-shadow: inset 0 0 0 0 #191a1b; */
    transition: background-color 200ms ease, box-shadow 200ms ease;
    font-size: 1rem;
    line-height: 1em;

    width: 100%;
    height: 38px;

    border: 1px solid #cccccc;

    &:focus {
      border-color: #fff;
      box-shadow: inset 0 0 0 1px #fff;
      /* background-color: rgba(245, 134, 121, 0.2); */
      outline: 0;
    }
  }
`

const NewsletterSubmit = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 0.5rem;
  display: flex;
  width: 2rem;
  height: 1.75rem;
  padding-left: 1rem;
  justify-content: center;
  align-items: center;
  color: white;

  input {
    transform: translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg);
    transform-style: preserve-3d;
    appearance: button;

    position: relative;
    z-index: 999;
    width: 100%;
    height: 100%;
    padding: 0px;
    background-color: transparent;
    fill: #fff;
    color: #fff;
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;

    display: inline-block;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;
  }
`
