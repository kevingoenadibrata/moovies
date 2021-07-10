/** @jsxImportSource @emotion/react */

import React from "react";
import { elementContainerCss } from "./DetailsElement.styles";

const DetailsElement = ({ title, value }) => {
  if (value === "N/A") {
    return null;
  }
  return (
    <div css={elementContainerCss}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default DetailsElement;
