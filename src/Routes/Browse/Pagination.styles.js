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
  color: ${active ? colors.pinkPrimary : "black"};
  font-weight: ${active ? 900 : "default"};
`;

export const getCaretCss = (disabled) => css`
  opacity: ${disabled ? 0.3 : 1};
  margin: 0 12px;
`;
