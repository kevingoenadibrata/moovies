import { css, keyframes } from "@emotion/react";
import { colors } from "../../Constants/Colors";

const animation = keyframes`
  from{
    transform: translateY(10px);
    opacity: 0;
  }

  to{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const posterPlaceholderCss = css`
  width: 70%;
  height: 90vw;

  background: rgba(181, 222, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(29, 38, 60, 0.37),
    rgba(255, 255, 255, 0.1) 0px 15px 0 -5px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transform: translateY(10px);
  opacity: 0;

  animation-name: ${animation};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const posterDetailsCss = css`
  width: 70%;
  border-radius: 8px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 15px 0 -5px;
  border: rgba(255, 255, 255, 0.5) solid 4px;

  transform: translateY(10px);
  opacity: 0;

  animation-name: ${animation};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

export const posterPlaceholderTextCss = css`
  opacity: 0.3;
`;

export const posterContainerCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 24px 0;
`;
