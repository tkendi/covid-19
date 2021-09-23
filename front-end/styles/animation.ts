import { keyframes } from "styled-components";

// skeleton ui animation
export const loading = keyframes`
  0% {
    background-position: -100% -50%;
  }
  50% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const spinner = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
