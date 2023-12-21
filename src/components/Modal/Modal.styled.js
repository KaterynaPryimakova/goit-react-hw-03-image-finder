import { styled } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Content = styled.div`
  border-radius: 7px;
  padding: 20px;
  background-color: white;
  max-width: 840px;
  width: 100%;
  min-height: 500px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
