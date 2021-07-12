/** @jsxImportSource @emotion/react */

import React from "react";
import {
  posterPlaceholderCss,
  posterDetailsCss,
  posterPlaceholderTextCss,
  posterContainerCss,
} from "./Poster.styles";

const Poster = ({ url }) => {
  if (url === "N/A") {
    return (
      <div css={posterContainerCss}>
        <div css={posterPlaceholderCss}>
          <p css={posterPlaceholderTextCss}>No Poster Image Available</p>
        </div>
      </div>
    );
  }
  return (
    <div css={posterContainerCss}>
      <img src={url} css={posterDetailsCss} alt="poster" />
    </div>
  );
};

export default Poster;
