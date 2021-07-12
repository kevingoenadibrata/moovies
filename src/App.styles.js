import { css } from "@emotion/react";
import { colors } from "./Constants/Colors";

export const bodyCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${colors.blue700};
`;

export const mainContainerCss = css`
  width: 100%;
  max-width: 700px;

  background: #141e30;
  background: -webkit-linear-gradient(to right, #243b55, #141e30);
  background: linear-gradient(to right, #243b55, #141e30);

  min-height: 100vh;
  overflow-y: hidden;
`;
