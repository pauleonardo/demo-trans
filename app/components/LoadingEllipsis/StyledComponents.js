import styled from 'styled-components';
import ElliseSvg from './assets/Ellipsis.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Ellise = styled.div`
  background: url(${ElliseSvg});
  background-position: center;
  background-repeat: no-repeat;
  width: 11em;
  height: 6em;
`;
