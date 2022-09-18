import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
 } from './Navbar.elements';

import { Button } from '../../globalStyles';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const [button] = useState(true);
//   const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const addShadowScrolling = () => {
    let scrollY = window.scrollY;
    if (scrollY >= 80){
        setNavbar(true);
    }else {
        setNavbar(false);
    }
  }

  window.addEventListener('scroll', addShadowScrolling);
  
  return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav style={
                navbar ? {boxShadow: "0 0.125rem 0.25rem 0 rgb(0 0 0 / 11%)"} : {boxShadow: "none"}
            }>
                <NavbarContainer>
                    <NavLogo>
                        <NavIcon />
                         REACT APP
                    </NavLogo>
                    <MobileIcon
                        onClick={handleClick}
                    >
                        { click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>    
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/">
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services">
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/products">
                                Products
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            { button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button fontBig primary>SIGN UP</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>   
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar