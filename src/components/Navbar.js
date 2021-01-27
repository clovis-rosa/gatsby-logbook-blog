import React, { useEffect, useState } from "react"
// import { FaBars, FaTimes } from "react-icons/fa"
import { VscMenu, VscClose } from "react-icons/vsc"
import { IconContext } from "react-icons/lib"
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "../styles/NavbarElements"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo active={scroll} to="/" onClick={closeMobileMenu}>
              LOGBOOK
            </NavLogo>
            <MobileIcon active={scroll} onClick={handleClick}>
              {click ? <VscClose /> : <VscMenu />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks active={scroll} to="/blog">
                  Archive
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks active={scroll} to="/work">
                  About us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks active={scroll} to="/404">
                  Ops 404!
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
