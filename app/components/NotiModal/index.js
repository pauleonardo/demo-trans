/**
*
* NotiModal
*
*/

import React from 'react';
import PropTypes from 'prop-types';


import {
  Modal,
  ModalBackground,
  ModalContent,
  Notification,
  ModalClose,
} from 'bloomer';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function NotiModal({
  active,
  close,
  type,
}) {
  return (
    <Modal isActive={active} >
      <ModalBackground
        onClick={close}
      />
      <ModalContent>
        <Notification
          isColor={(type) ? ('success') : ('danger')}
          hasTextAlign={'centered'}
        >
          {
            (type) ?
              (<FormattedMessage {...messages.success} />) :
              (<FormattedMessage {...messages.failure} />)
          }
        </Notification>
      </ModalContent>
      <ModalClose onClick={close} />
    </Modal>
  );
}

NotiModal.propTypes = {
  active: PropTypes.bool,
  close: PropTypes.func,
  type: PropTypes.bool,
};

export default NotiModal;
