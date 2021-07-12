import { css } from "@emotion/react";
import { colors } from "../../Constants/Colors";

export const buttonCss = css`
  background-color: ${colors.white};
  padding: 8px 16px;
  border-radius: 8px;
  color: ${colors.bluePrimary};
  font-weight: 600;
  outline: none;
  border: 2px solid ${colors.bluePrimary};
`;

export const activeButtonCss = css`
  background-color: ${colors.bluePrimary};
  padding: 8px 16px;
  border-radius: 8px;
  color: ${colors.white};
  font-weight: 600;
  outline: none;
  border: 2px solid ${colors.white};
`;
