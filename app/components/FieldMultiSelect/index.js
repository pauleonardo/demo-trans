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
} from 'bloomer';
import { isUndefined } from 'lodash/lang';

function FieldMultiSelect({
  MultiName,
  placeholder,
  data,
  valueDefault,
  changeFunc,
  selectFunc,
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
};

export default FieldMultiSelect;
