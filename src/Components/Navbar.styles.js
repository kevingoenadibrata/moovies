import { css } from "@emotion/react";
import { colors } from "../Constants/Colors";

export const navbarContainerCss = css`
  position: fixed;
  padding: 24px;
  height: 70px;
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export const logoCss = css`
  width: 150px;
  cursor: pointer;
`;
