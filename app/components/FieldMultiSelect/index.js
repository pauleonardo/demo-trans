/**
*
* FieldMultiSelect
*
*/

import React from 'react';
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
  MultiName: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  data: React.PropTypes.array,
  valueDefault: React.PropTypes.array,
  changeFunc: React.PropTypes.func,
  selectFunc: React.PropTypes.func,
};

export default FieldMultiSelect;
