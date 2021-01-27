import { Link } from "gatsby"
import styled from "styled-components"

export const Nav = styled.nav`
  top: 0;
  z-index: 999;
  position: sticky;
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: ${({ active }) => (active ? "0.75rem 2rem" : "1.5rem 2rem")};
  background: ${({ active }) =>
    active ? "var(--color-white)" : "var(--color-black)"};
  border-bottom: 1px solid var(--color-black);
  transition: all 0.6s ease;

  @media screen and (max-width: 960px) {
    /* background: ${({ click }) =>
      click ? "var(--color-white)" : "rgba(255, 255, 255, 0.8)"}; */
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
`

export const NavLogo = styled(Link)`
  color: ${({ active }) =>
    active ? "var(--color-black)" : "var(--color-white)"};
  transition: color 0.6s ease;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-family: var(--font-family-primary);
  font-size: ${({ active }) => (active ? "1rem" : "1.2rem")};
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: normal;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  z-index: 990;
  transition: all 0.6s ease;

  /* @media screen and (max-width: 960px) {
    color: white;
  } */
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    /* position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%); */
    font-size: 25px;
    cursor: pointer;
    z-index: 990;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      fill: ${({ active }) =>
        active ? "var(--color-black)" : "var(--color-white)"};
      transition: all 0.6s ease;
    }
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    gap: 8rem; /* */
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    top: ${({ click }) => (click ? "100%" : "-1500px")};
    left: 0; /* */
    opacity: 1;
    transition: all 0.4s ease-in-out;
    /* background: var(--color-white); */
    background: #b744b8;
    margin: 0 auto;
  }
`

export const NavItem = styled.li`
  padding: 0;
  margin: 0;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 80px;
  }
`

export const NavLinks = styled(Link)`
  color: ${({ active }) =>
    active ? "var(--color-black)" : "var(--color-white)"};
  transition: color 0.6s ease;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: var(--font-family-secondary-mono);
  font-size: 0.7rem;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-decoration: 0px transparent underline;

  &:hover {
    /* text-decoration: 2px var(--color-black) underline;
    transition: all 0.2s ease-in-out; */
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    font-size: 5rem;
    font-weight: bold;
    color: white;

    &:hover {
      color: #ffd166;
      transition: all 0.3s ease;
    }
  }
`
