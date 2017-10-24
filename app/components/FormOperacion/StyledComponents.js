import styled from 'styled-components';

export const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  containerBox: {
    width: '65%',
    minWidth: '350px',
  },
  containerFlex: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
`;
