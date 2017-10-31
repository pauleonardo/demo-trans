/**
*
* FieldMultiSelect
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import MultiSelect from 'react-widgets/lib/Multiselect';

import {
  Field,
  Label,
  Control,
  Help,
} from 'bloomer';
import { isUndefined } from 'lodash/lang';

function FieldMultiSelect({
  MultiName,
  placeholder,
  data,
  valueDefault,
  changeFunc,
  selectFunc,
  validate,
}) {
  return (
    <Field>
      <Label>{MultiName}</Label>
      <Control>
        <MultiSelect
          placeholder={placeholder}
          data={data}
          value={(isUndefined(valueDefault)) ? [] : valueDefault}
          onChange={(res) => { changeFunc(res); }}
          onSelect={(res) => { selectFunc(res); }}
        />
        <Help isColor={'danger'} isHidden={validate}>Debe añadir alguna opción.</Help>
      </Control>
    </Field>
  );
}

FieldMultiSelect.propTypes = {
  MultiName: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array,
  valueDefault: PropTypes.array,
  changeFunc: PropTypes.func,
  selectFunc: PropTypes.func,
  validate: PropTypes.bool,
};

export default FieldMultiSelect;
