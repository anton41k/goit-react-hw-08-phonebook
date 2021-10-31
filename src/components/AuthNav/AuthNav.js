import React from "react";

import { NavLinkStyled, styleTextShadow } from "../../common.styled";

export default function AuthNav() {
  return (
    <div>
      <NavLinkStyled
        to="/register"
        exact
        activeStyle={styleTextShadow}
        fontSize={{ s: 12, m: 14, p: 16, d: 18 }}
      >
        SIGN UP
      </NavLinkStyled>
      <NavLinkStyled
        to="/login"
        exact
        activeStyle={styleTextShadow}
        fontSize={{ s: 12, m: 14, p: 16, d: 18 }}
      >
        LOG IN
      </NavLinkStyled>
    </div>
  );
}
