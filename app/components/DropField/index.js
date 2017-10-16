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
}) {
  const bool = true;
  return (
    <Field>
      <Label>{dropName}</Label>
      <Control>
        <DropdownList
          busy={
            (data === 0) ? bool : !bool
          }
          placeholder={placeholder}
          data={data}
          filter={filter}
          itemComponent={item}
          textField={textField}
          valueField={valueField}
          onChange={(value) => { changeFunc(value); }}
          value={(isUndefined(defaultValue)) ? '' : (defaultValue.toUpperCase())}
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
  filter: React.PropTypes.string,
  textField: React.PropTypes.string,
  valueField: React.PropTypes.string,
  changeFunc: React.PropTypes.func,
};

export default DropField;
