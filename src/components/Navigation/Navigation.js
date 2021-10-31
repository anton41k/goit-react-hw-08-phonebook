import React from "react";
import { useSelector } from "react-redux";

import { NavLinkStyled, styleTextShadow } from "../../common.styled";
import { getUserIsLoggedIn } from "../../redux/auth";

export default function AppBar() {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  return (
    <nav>
      <NavLinkStyled
        to="/"
        exact
        activeStyle={styleTextShadow}
        fontSize={{ s: 18, m: 20, p: 25, d: 30 }}
      >
        Home
      </NavLinkStyled>

      {isLoggedIn && (
        <NavLinkStyled
          to="/contacts"
          exact
          activeStyle={styleTextShadow}
          fontSize={{ s: 18, m: 20, p: 25, d: 30 }}
        >
          Contacts
        </NavLinkStyled>
      )}
    </nav>
  );
}
