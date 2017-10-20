import styled from 'styled-components';
import gear from './assets/Gear.svg';

export const ContainerGear = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Gear = styled.div`
  background: url(${gear});
  background-position: center;
  background-repeat: no-repeat;
  width: 12em;
  height: 12em;
`;
