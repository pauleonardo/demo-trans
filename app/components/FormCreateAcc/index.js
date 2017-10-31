/**
*
* FormCreateAcc
*
*/

import React from 'react';
import PropTypes from 'prop-types';

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
    loadingAcc: false,
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const { loadingAcc } = nextProps;
      this.setState({ loadingAcc });
    }
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { submitAction } = this.props;
    const { monto, loadingAcc } = this.state;
    if (monto > 0 && !loadingAcc) {
      submitAction(monto);
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
    const { backToPrincipal } = this.props;
    const { validateForm, monto, loadingAcc } = this.state;
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
            <form onSubmit={this.handleSubmit}>
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
                    typeButton={'submit'}
                    loading={loadingAcc}
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
  submitAction: PropTypes.func,
  backToPrincipal: PropTypes.func,
  loadingAcc: PropTypes.bool,
};

export default FormCreateAcc;
