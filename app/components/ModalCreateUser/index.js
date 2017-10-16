/**
*
* ModalCreateUser
*
*/
import React from 'react';
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
    countries: [],
    data: {},
    valname: true,
    valdate: true,
    valcountry: true,
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
    const { editMode, showModal, close } = this.props;
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
  //                valueDefault
              />
              <FieldCalendar
                FieldCalendarName={'Fecha de Nacimiento:'}
  //                valueDefault
                validate={this.state.valdate}
                selectFunc={() => {}}
                changeFunc={() => {}}
              />
              <FieldDrop
                dropName={'Nacionalidad:'}
                data={this.state.countries}
                placeholder={'Selecciona la Nacionalidad:'}
                item={DropItem}
  //                defaultValue
                validate={this.state.valcountry}
                filter={'contains'}
                textField={'name'}
                valueField={'alpha2Code'}
                changeFunc={() => {}}
              />
              <FieldMulti
                MultiName={'Deportes: '}
                placeholder={'Seleccione deportes:'}
                data={this.state.deports}
  //                valueDefault,
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
  editMode: React.PropTypes.bool,
  showModal: React.PropTypes.bool,
  edit: React.PropTypes.func,
  create: React.PropTypes.func,
  close: React.PropTypes.func,
};

export default ModalCreateUser;
