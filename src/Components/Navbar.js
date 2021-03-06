/** @jsxImportSource @emotion/react */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
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
      <div>
        <FontAwesomeIcon
          icon={faBoxOpen}
          size="lg"
          color={colors.bluePrimary}
          onClick={() => history.push("/mymoos")}
        />
      </div>
    </div>
  );
};

export default Navbar;
