import {
  Container,
  Menu,
  MenuItem,
  MobileIcon,
  Wrapper,
} from "./Navbar.elements";
import React, { useState } from "react";

import BannerImageGrey from "../Assets/logo-wombats-grey.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { IconContext } from "react-icons";
import { IoReturnDownBack } from "react-icons/io5";
import { Link as MenuItemLink } from "react-scroll";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <IoReturnDownBack /> : <HiMenuAlt4 />}
          </MobileIcon>
          <Menu open={showMobileMenu}>
            <img
              className="navbar-heading-image"
              src={BannerImageGrey}
              alt="logo-wombats"
            />
            <MenuItem>
              <div className="title-navbar">Surfing Wombats Mirissa</div>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="/home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={3000}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                role="link"
              >
                <div className="links-size">| Home |</div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="/about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={3000}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                role="link"
              >
                <div className="links-size"> | About |</div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="/menu"
                spy={true}
                smooth={true}
                offset={-100}
                duration={3000}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                role="link"
              >
                <div className="links-size">| Menu & Drinks |</div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="/location"
                spy={true}
                smooth={true}
                offset={-100}
                duration={4000}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                role="link"
              >
                <div className="links-size">| Location |</div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
