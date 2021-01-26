import { Link } from "gatsby"
// import { DiScala } from "react-icons/Di"
import styled from "styled-components"

export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#fff"
      : "linear-gradient(to bottom,  rgba(255,255,255, 0.9) 0%,rgba(255,255,255,0) 100%)"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#fff" : "rgba(255, 255, 255, 0.8)")};
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  /* max-width: 1000px; */
  max-width: 90%;
  margin: 0 auto;
`

export const NavLogo = styled(Link)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  z-index: 990;

  /* @media screen and (max-width: 960px) {
    color: white;
  } */
`

// export const NavIcon = styled(DiScala)`
//   margin: 0 0.5rem 0 2rem;
// `

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    /* position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%); */
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 990;
    display: flex;
    justify-content: center;
    align-items: center;
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
    /* background: #fff; */
    background: #b744b8;
    margin: 0 auto;
  }
`

export const NavItem = styled.li`
  /* height: 80px; */
  padding: 0;
  margin: 0;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 80px;
  }
`

export const NavLinks = styled(Link)`
  color: #141414;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: "Ubuntu", sans-serif;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    font-size: 10rem; /* */
    font-weight: bold;
    color: white; /* */

    &:hover {
      color: #ffd166;
      transition: all 0.3s ease;
    }
  }
`
