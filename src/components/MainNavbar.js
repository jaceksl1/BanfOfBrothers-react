import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Icon from "@material-tailwind/react/Icon";

export default function MainNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="blueGray" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>Navbar</NavbarBrand>
          <NavbarToggler
            color="white"
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple="light"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <NavLink href="#navbar" ripple="light">
              <Icon name="language" size="xl" />
              Discover
            </NavLink>
            <NavLink href="#navbar" ripple="light">
              <Icon name="account_circle" size="xl" />
              Profile
            </NavLink>
            <NavLink href="#navbar" ripple="light">
              <Icon name="settings" size="xl" />
              Settings
            </NavLink>
            <NavLink href="#navbar" ripple="light">
              <Icon name="settings" size="xl" />
              Settings
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
