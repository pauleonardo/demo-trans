/**
*
* AccDetails
*
*/

import React from 'react';

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
            action={backToPrincipal}
            loading={loading}
          />
        </Column>
      </Columns>
    </Box>
  );
}

AccDetails.propTypes = {
  backToPrincipal: React.PropTypes.func,
  loading: React.PropTypes.bool,
  account: React.PropTypes.string,
  cantidad: React.PropTypes.string,
};

export default AccDetails;
