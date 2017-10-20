/**
*
* FormCreateAcc
*
*/

import React from 'react';
import {
  Columns,
  Column,
  Box,
  Title,
  Field,
  Control,
  Help,
} from 'bloomer';

import FieldInput from 'components/FieldInput';
import Button from 'components/Button';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class FormCreateAcc extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    validateForm: true,
    monto: 0,
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { submitAction } = this.props;
    if (this.state.monto > 0) {
      submitAction();
      this.setState({ validateForm: true, monto: 0 });
    } else {
      this.setState({ validateForm: false });
    }
  }
  handleChange = (res) => {
    this.setState({ monto: res.target.value });
  }
  render() {
    const columnSizes = { mobile: 12, default: 6, tablet: 9 };
    const { submitAction, backToPrincipal } = this.props;
    const { validateForm, monto } = this.state;
    return (
      <Columns isCentered>
        <Column isSize={columnSizes}>
          <Box>
            <Title
              isSize={3}
              hasTextAlign={'centered'}
            >
              <strong>
                <FormattedMessage {...messages.Title} />
              </strong>
            </Title>
            <Title isSize={6}>
              <FormattedMessage {...messages.SecondTitle} />
            </Title>
            <form onSubmit={submitAction}>
              <FieldInput
                fieldName={'Monto inicial: '}
                ChangeFunc={this.handleChange}
                placeholder={'Introduzca monto de apertura'}
                validate={validateForm}
                valueDefault={monto}
                typeField={'number'}
              />
              <Field isGrouped>
                <Control>
                  <Button
                    color={'primary'}
                    text={'Apertura Cuenta'}
                    action={this.handleSubmit}
                    typeButton={'submit'}
                  />
                </Control>
                <Control>
                  <Button
                    color={'warning'}
                    text={'Volver al menu'}
                    action={backToPrincipal}
                  />
                </Control>
              </Field>
            </form>
            <Help><FormattedMessage {...messages.Help} /></Help>
          </Box>
        </Column>
      </Columns>
    );
  }
}

FormCreateAcc.propTypes = {
  submitAction: React.PropTypes.func,
  backToPrincipal: React.PropTypes.func,
};

export default FormCreateAcc;
