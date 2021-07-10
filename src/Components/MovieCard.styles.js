import { css } from "@emotion/react";
import { colors } from "../Constants/Colors";

export const cardCss = css`
  padding: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: 80px auto 15%;
  background-color: ${colors.white};
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const innerCardCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 8px;
`;

export const getPosterCss = (url) => {
  return css`
    width: 60px;
    height: 90px;
    background: url(${url});
    background-size: cover;
    background-position: center;
    border-radius: 2px;
    border: 1px solid ${colors.gray100};
  `;
};

export const buttonContainerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
