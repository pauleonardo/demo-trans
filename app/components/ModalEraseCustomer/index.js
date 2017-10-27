/**
*
* ModalEraseCustomer
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
  ModalBackground,
  ModalContent,
  ModalClose,
  Box,
} from 'bloomer';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import messages from './messages';
import {
  Container,
  ContainerButtonAction,
  ContainerTexto,
} from './StyledComponents';


function ModalEraseCustomer({
  close,
  showModal,
  fnDelete,
}) {
  return (
    <Modal isActive={showModal}>
      <ModalBackground onClick={close} />
      <ModalContent>
        <Box>
          <Container>
            <ContainerTexto>
              <FormattedMessage {...messages.content} />
            </ContainerTexto>
            <ContainerButtonAction>
              <Button
                color={'warning'}
                text={'Volver'}
                action={close}
                loading={false}
              />
              <Button
                color={'danger'}
                text={'Borrar'}
                action={fnDelete}
                loading={false}
              />
            </ContainerButtonAction>
          </Container>
        </Box>
      </ModalContent>
      <ModalClose onClick={close} />
    </Modal>
  );
}

ModalEraseCustomer.propTypes = {
  close: PropTypes.func,
  showModal: PropTypes.bool,
  fnDelete: PropTypes.func,
};

export default ModalEraseCustomer;
