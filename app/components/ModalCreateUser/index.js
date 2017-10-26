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
    data: {},
    countries: [],
    valname: true,
    valdate: true,
    valcountry: true,
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props && nextProps.editMode) {
      const { data } = nextProps;
      this.setState({ data });
    } else {
      this.setState({ data: {} });
    }
  }
  handleAction = () => {
    const { editMode, edit, create } = this.props;
    if (editMode) {
      edit();
    } else {
      create();
    }
  }
  render() {
    const { editMode, showModal, close, countries } = this.props;
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
                ChangeFunc={() => {}}
                placeholder={'Ingrese el nombre del Usuario'}
                validate={this.state.valname}
                valueDefault={this.state.data.name}
                typeButton={'text'}
              />
              <FieldCalendar
                FieldCalendarName={'Fecha de Nacimiento:'}
                valueDefault={this.state.data.date}
                validate={this.state.valdate}
                selectFunc={() => {}}
                changeFunc={() => {}}
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
                changeFunc={() => {}}
              />
              <FieldMulti
                MultiName={'Deportes: '}
                placeholder={'Seleccione deportes:'}
                data={this.state.deports}
                valueDefault={this.state.data.deports}
                changeFunc={() => {}}
                selectFunc={() => {}}
              />
            </ModalCardBody>
            <ModalCardFooter>
              <Button
                color={'success'}
                action={this.handleAction}
                text={'Guardar'}
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
};

export default ModalCreateUser;
