import { css, keyframes } from "@emotion/react";
import { colors } from "../Constants/Colors";

const animation = keyframes`
  from{
    transform: translateX(-50px);
    opacity: 0;
  }

  to{
    transform: translateX(0);
    opacity: 1;
  }
`;

export const getCardCss = (i) => css`
  padding: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: 80px auto 15%;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  opacity: 0;

  background: rgba(181, 222, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  animation-name: ${animation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: ${i * 100 + "ms"};
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
  `;
};

export const buttonContainerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
