import { css } from "@emotion/react";
import { colors } from "../../Constants/Colors";

export const paginationContainerCss = css`
  width: 100%;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`;

export const getPageElementCss = (active) => css`
  margin: 0 12px;
  color: ${active ? colors.bluePrimary : "white"};
  font-weight: ${active ? 900 : "default"};
  cursor: pointer;
`;

export const getCaretCss = (disabled) => css`
  opacity: ${disabled ? 0.1 : 1};
  margin: 0 12px;
  cursor: pointer;
  color: white;
`;
