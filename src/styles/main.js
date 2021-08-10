import { css } from '@emotion/css'

export const animationPing = css`
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`
