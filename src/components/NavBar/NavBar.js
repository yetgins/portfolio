import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  NavBarContainer,
  MenuIcon,
  Times,
  Bars,
  Home,
  NavMenu,
  NavMenuActive,
  NavItem,
  NavLinks,
} from "./NavBar.styles";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <NavBarContainer>
      <NavLink to="/">
        <Home onClick={closeMobileMenu} />
      </NavLink>
      <MenuIcon onClick={handleClick}>{click ? <Times /> : <Bars />} </MenuIcon>
      {click ? (
        <NavMenuActive>
          <NavItem>
            <NavLinks to="/about" onClick={closeMobileMenu} color='black'>
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/myworks" onClick={closeMobileMenu} color='black'>
              My Works
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/comments" onClick={closeMobileMenu} color='black'>
              Comments
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contact" onClick={closeMobileMenu} color='black'>
              Contact
            </NavLinks>
          </NavItem>
        </NavMenuActive>
      ) : (
        <NavMenu>
          <NavItem>
            <NavLinks to="/about" onClick={closeMobileMenu}>
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/myworks" onClick={closeMobileMenu}>
              My Works
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/comments" onClick={closeMobileMenu}>
              Comments
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contact" onClick={closeMobileMenu}>
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
      )}
    </NavBarContainer>
  );
};

export default NavBar;

