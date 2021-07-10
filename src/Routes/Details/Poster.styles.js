import { css } from "@emotion/react";
import { colors } from "../../Constants/Colors";

export const posterPlaceholderCss = css`
  width: 100%;
  height: 130vw;
  background-color: ${colors.gray100};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const posterDetailsCss = css`
  width: 100%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const posterPlaceholderTextCss = css`
  opacity: 0.3;
`;
