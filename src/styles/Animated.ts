import styled, { keyframes } from "styled-components";

const apearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const apearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimationContainerLeft = styled.div`
  animation: ${apearFromLeft} 1s;
`;

const AnimationContainerRight = styled.div`
  animation: ${apearFromRight} 1s;
`;

export { AnimationContainerLeft, AnimationContainerRight };
