/** @jsxImportSource @emotion/react */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Logo from "../Assets/logo.png";
import { logoCss, navbarContainerCss } from "./Navbar.styles";
import { colors } from "../Constants/Colors";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
    <div css={navbarContainerCss}>
      <img
        src={Logo}
        alt="logo"
        css={logoCss}
        onClick={() => history.push("/")}
      />
      <FontAwesomeIcon
        icon={faHeart}
        size="lg"
        color={colors.pinkPrimary}
        onClick={() => history.push("/mymoos")}
      />
    </div>
  );
};

export default Navbar;
