/**
*
* DropField
*
*/

import React from 'react';
import PropTypes from 'prop-types';

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
  dropName: PropTypes.string,
  data: PropTypes.array,
  placeholder: PropTypes.string,
  item: PropTypes.func,
  defaultValue: PropTypes.object,
  validate: PropTypes.bool,
  filter: PropTypes.bool,
  textField: PropTypes.string,
  valueField: PropTypes.string,
  changeFunc: PropTypes.func,
  busy: PropTypes.bool,
};

export default DropField;
