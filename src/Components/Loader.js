/** @jsxImportSource @emotion/react */

import React from "react";
import { BarLoader } from "react-spinners";
import { loaderContainerCss } from "./Loader.styles";

const Loader = () => {
  return (
    <div css={loaderContainerCss}>
      <BarLoader />
    </div>
  );
};

export default Loader;
