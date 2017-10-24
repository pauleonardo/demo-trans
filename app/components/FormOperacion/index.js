/**
*
* FormOperacion
*
*/

import React from 'react';
import {
  Box,
  Container,
  Title,
} from 'bloomer';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import DropList from 'components/DropField';
import Input from 'components/FieldInput';
import Item from './ItemDrop';
import {
  styles,
  ContainerTitle,
  ContainerButtons,
} from './StyledComponents';
import messages from './messages';


function FormOperacion({
  SubmitAction,
  backToList,
  dataCustomers,
  loading,
  changeFunc,
  changeMonto,
  actual,
  montoActual,
}) {
  return (
    <form onSubmit={SubmitAction} style={styles.containerFlex} >
      <Box style={styles.containerBox}>
        <Container style={styles.container}>
          <ContainerTitle>
            <Title isSize={4}>
              <strong>
                <FormattedMessage {...messages.title} />
              </strong>
            </Title>
          </ContainerTitle>
          <DropList
            dropName={'Selecciona un customer:'}
            data={dataCustomers}
            item={Item}
            placeholder={'Seleccione un customer:'}
            validate
            filter={false}
            textField={'name'}
            valueField={'name'}
            changeFunc={(selected) => { changeFunc(selected); }}
            busy={loading}
            defaultValue={actual[1]}
          />
          <Input
            fieldName={'Monto a Transferir: '}
            ChangeFunc={(monto) => { changeMonto(monto); }}
            placeholder={'Monto'}
            validate
            valueDefault={montoActual}
            typeField={'number'}
          />
          <ContainerButtons>
            <Button
              color={'success'}
              text={'Transferir'}
              loading={loading}
              typeButton={'submit'}
            />
            <Button
              color={'warning'}
              text={' Volver '}
              loading={false}
              action={backToList}
            />
          </ContainerButtons>
        </Container>
      </Box>
    </form>
  );
}

FormOperacion.propTypes = {
  SubmitAction: React.PropTypes.func,
  backToList: React.PropTypes.func,
  dataCustomers: React.PropTypes.array,
  loading: React.PropTypes.bool,
  changeFunc: React.PropTypes.func,
  actual: React.PropTypes.obj,
  changeMonto: React.PropTypes.func,
  montoActual: React.PropTypes.string,
};

export default FormOperacion;
