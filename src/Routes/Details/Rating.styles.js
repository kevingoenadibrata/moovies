import { css, keyframes } from "@emotion/react";
import { colors } from "../../Constants/Colors";

const animation = keyframes`
  from{
    width: 0;
    opacity: 0;
  }

  to{
    width: 40%;
    opacity: 1;
  }
`;

const textAnimation = keyframes`
  from{
    opacity: 0;
  }

  to{
    opacity: 1;
  }
`;

export const ratingContainerCss = css`
  padding: 16px;

  background: rgba(181, 222, 255, 0.1);
  box-shadow: 0 4px 8px 0 rgba(113, 126, 173, 0.12);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  opacity: 0;
  width: 0;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  animation-name: ${animation};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

export const ratingFullContainerCss = css`
  display: flex;
  justify-content: center;
`;

export const valueCss = css`
  font-size: 1.6em;
  font-weight: 900;
  color: ${colors.white};
  text-shadow: 0 0px 8px 0 rgba(113, 126, 173, 0.42);
  opacity: 0;

  animation-name: ${textAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
`;

export const perTenCss = css`
  transform: translateY(-4px);
  opacity: 0.5;
  opacity: 0;

  animation-name: ${textAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.7s;
`;
