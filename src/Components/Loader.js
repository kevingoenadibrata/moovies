/** @jsxImportSource @emotion/react */

import React from "react";
import { BarLoader } from "react-spinners";
import { loaderContainerCss } from "./Loader.styles";

const Loader = () => {
  return (
    <div css={loaderContainerCss}>
      <BarLoader color="white" />
    </div>
  );
};

export default Loader;
