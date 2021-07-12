/** @jsxImportSource @emotion/react */

import React from "react";
import {
  perTenCss,
  ratingContainerCss,
  ratingFullContainerCss,
  valueCss,
} from "./Rating.styles";

const Rating = ({ value }) => {
  if (value === "N/A") {
    return null;
  }
  return (
    <div css={ratingFullContainerCss}>
      <div css={ratingContainerCss}>
        <h3 css={valueCss}>{value}</h3>
        <p css={perTenCss}>/10</p>
      </div>
    </div>
  );
};

export default Rating;
