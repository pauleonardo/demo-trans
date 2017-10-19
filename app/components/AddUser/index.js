/**
*
* AddUser
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import {
  Container,
  Box,
  Title,
} from 'bloomer';
import Button from 'components/Button';
import messages from './messages';
import {
  styles,
} from './StyledComponents';


function AddUser({
  actionAdd,
}) {
  return (
    <div>
      <Container style={styles.containerBox} >
        <Box style={styles.box}>
          <Title isSize={3}> <FormattedMessage {...messages.boxAdmin} /> </Title>
          <Button
            color={'warning'}
            text={'Agregar nuevo Usuario'}
            action={actionAdd}
          />
        </Box>
      </Container>
    </div>
  );
}

AddUser.propTypes = {
  actionAdd: React.PropTypes.func,
};

export default AddUser;
