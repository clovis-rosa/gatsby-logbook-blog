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
            <NavLogo to="/" onClick={closeMobileMenu}>
              Branding
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {/* {click ? <FaTimes /> : <FaBars />} */}
              {click ? <VscClose /> : <VscMenu />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/blog">Blog</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/work">Work</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/404">404</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
