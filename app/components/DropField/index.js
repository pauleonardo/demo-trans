/**
*
* DropField
*
*/

import React from 'react';
import {
  Field,
  Label,
  Control,
  Help,
} from 'bloomer';

import { isUndefined } from 'lodash/lang';
import DropdownList from 'react-widgets/lib/DropdownList';

function DropField({
  dropName,
  data,
  placeholder,
  item,
  defaultValue,
  validate,
  filter,
  textField,
  valueField,
  changeFunc,
  busy,
}) {
  return (
    <Field>
      <Label>{dropName}</Label>
      <Control>
        <DropdownList
          busy={busy}
          placeholder={placeholder}
          data={data}
          filter={filter}
          itemComponent={item}
          textField={textField}
          valueField={valueField}
          onChange={(value) => { changeFunc(value); }}
          value={(isUndefined(defaultValue)) ? '' : (defaultValue)}
        />
      </Control>
      <Help isColor={'danger'} isHidden={validate}>Debe seleccionar una opción.</Help>
    </Field>
  );
}

DropField.propTypes = {
  dropName: React.PropTypes.string,
  data: React.PropTypes.array,
  placeholder: React.PropTypes.string,
  item: React.PropTypes.func,
  defaultValue: React.PropTypes.string,
  validate: React.PropTypes.bool,
  filter: React.PropTypes.bool,
  textField: React.PropTypes.string,
  valueField: React.PropTypes.string,
  changeFunc: React.PropTypes.func,
  busy: React.PropTypes.bool,
};

export default DropField;
