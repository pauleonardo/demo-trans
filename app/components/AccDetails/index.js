/**
*
* AccDetails
*
*/

import React from 'react';
import PropTypes from 'prop-types';


import {
  Box,
  Title,
  Column,
  Columns,
} from 'bloomer';
import Button from 'components/Button';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AccDetails({
  backToPrincipal,
  doTransaccion,
  loading,
  account,
  cantidad,
}) {
  return (
    <Box>
      <Title isSize={4}>
        <strong>
          <FormattedMessage {...messages.numeroCuenta} />
        </strong>
        {account}
      </Title>
      <Title isSize={4}>
        <strong>
          <FormattedMessage {...messages.cantidad} />
        </strong>
        {cantidad}
      </Title>
      <Columns isCentered>
        <Column>
          <Button
            color={'warning'}
            text={'Volver al inicio'}
            action={backToPrincipal}
            loading={false}
          />
        </Column>
        <Column>
          <Button
            color={'success'}
            text={'Realizar Transferencia'}
            action={doTransaccion}
            loading={loading}
          />
        </Column>
      </Columns>
    </Box>
  );
}

AccDetails.propTypes = {
  backToPrincipal: PropTypes.func,
  doTransaccion: PropTypes.func,
  loading: PropTypes.bool,
  account: PropTypes.string,
  cantidad: PropTypes.number,
};

export default AccDetails;
