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

const apearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimationContainerLeft = styled.div`
  animation: ${apearFromLeft} 1s;
`;

const AnimationContainerRight = styled.div`
  animation: ${apearFromRight} 1s;
`;

const AnimationContainerTop = styled.div`
  animation: ${apearFromTop} 1s;
`;

export {
  AnimationContainerTop,
  AnimationContainerLeft,
  AnimationContainerRight,
};
