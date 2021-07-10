import { css } from "@emotion/react";
import { colors } from "./Constants/Colors";

export const bodyCss = css`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${colors.gray400};
`;

export const mainContainerCss = css`
  width: 100%;
  max-width: 700px;
  background-color: ${colors.gray100};
  min-height: 100vh;
`;
