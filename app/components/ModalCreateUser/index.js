/**
*
* ModalCreateUser
*
*/
import React from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardHeader,
  ModalCardTitle,
  Delete,
  ModalCardFooter,
  ModalCardBody,
} from 'bloomer';
import FieldNombre from 'components/FieldInput';
import FieldCalendar from 'components/FieldCalendar';
import FieldDrop from 'components/DropField';
import FieldMulti from 'components/FieldMultiSelect';
import Button from 'components/Button';

import DropItem from './DropItem';


class ModalCreateUser extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    data: { deports: [] },
    countries: [],
    valname: true,
    valdate: true,
    valcountry: true,
    valdeports: true,
    loading: false,
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props && nextProps.editMode) {
      const { data, loading } = nextProps;
      this.setState({ data, loading });
    } else {
      const { loading } = nextProps;
      this.setState({ data: {}, loading });
    }
  }
  handleChangeName = (name) => {
    this.setState({ data: { ...this.state.data, name } });
  }
  handleChangeCountry = (country) => {
    this.setState({ data: { ...this.state.data, country: country.alpha2Code } });
  }
  handleChangeDate = (date) => {
    this.setState({ data: { ...this.state.data, date } });
  }
  handleOnChange = (value) => {
    this.setState({ data: { ...this.state.data, deports: value } });
  }
  handleOnSelected = () => {
    const { data } = this.state;
    this.setState({ data: { ...data } });
  }
  handleAction = () => {
    const { editMode, edit, create } = this.props;
    const { data } = this.state;
    if (editMode) {
      if (this.validateFields('name') &&
        this.validateFields('country') &&
        this.validateFields('date') &&
        this.validateFields('deports')
        ) {
        edit(data);
      }
    } else {
      if (this.validateFields('name') &&
        this.validateFields('country') &&
        this.validateFields('date') &&
        this.validateFields('deports')
      ) {
        create(data);
      }
      return true;
    }
    return true;
  }
  validateFields = (field) => {
    let bool = false;
    if ((this.state.data[field] === '') ||
        (typeof this.state.data[field] === 'undefined') ||
        (this.state.data[field].length <= 0) ||
        (this.state.data[field] === 'Invalid date')
      ) {
      this.setState({ [`val${field}`]: false });
    } else {
      this.setState({ [`val${field}`]: true });
      bool = true;
    }
    return bool;
  }
  render() {
    const { editMode, showModal, close, countries, deports, loading } = this.props;
    return (
      <div>
        <Modal isActive={showModal}>
          <ModalBackground onClick={close} />
          <ModalCard>
            <ModalCardHeader>
              {
                (<ModalCardTitle> { (!editMode) ? 'Menu Agregar nuevo Usuario' : 'Menu Editar Usuario' }</ModalCardTitle>)
              }
              <Delete onClick={close} />
            </ModalCardHeader>
            <ModalCardBody>
              <FieldNombre
                fieldName={'Nombre:'}
                ChangeFunc={(res) => this.handleChangeName(res.target.value)}
                placeholder={'Ingrese el nombre del Usuario'}
                validate={this.state.valname}
                valueDefault={this.state.data.name}
                typeButton={'text'}
              />
              <FieldCalendar
                FieldCalendarName={'Fecha de Nacimiento:'}
                valueDefault={this.state.data.date}
                validate={this.state.valdate}
                selectFunc={this.handleChangeDate}
                changeFunc={this.handleChangeDate}
              />
              <FieldDrop
                dropName={'Nacionalidad:'}
                data={countries}
                placeholder={'Selecciona la Nacionalidad:'}
                item={DropItem}
                defaultValue={this.state.data.country}
                validate={this.state.valcountry}
                filter
                textField={'name'}
                valueField={'alpha2Code'}
                changeFunc={this.handleChangeCountry}
              />
              <FieldMulti
                MultiName={'Deportes: '}
                placeholder={'Seleccione deportes:'}
                data={deports}
                valueDefault={this.state.data.deports}
                changeFunc={this.handleOnChange}
                selectFunc={this.handleOnSelected}
                validate={this.state.valdeports}
              />
            </ModalCardBody>
            <ModalCardFooter>
              <Button
                color={'success'}
                action={this.handleAction}
                text={'Guardar'}
                loading={loading}
              />
              <Button
                color={'warning'}
                action={close}
                text={'Cancel'}
              />
            </ModalCardFooter>
          </ModalCard>
        </Modal>
      </div>
    );
  }
}

ModalCreateUser.propTypes = {
  editMode: PropTypes.bool,
  showModal: PropTypes.bool,
  edit: PropTypes.func,
  create: PropTypes.func,
  close: PropTypes.func,
  data: PropTypes.object,
  countries: PropTypes.array,
  loading: PropTypes.bool,
  deports: PropTypes.array,
};

export default ModalCreateUser;
