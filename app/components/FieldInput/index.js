/**
*
* FieldInput
*
*/

import React from 'react';
import {
  Field,
  Control,
  Label,
  Help,
  Input,
} from 'bloomer';
import { isUndefined } from 'lodash/lang';


function FieldInput({
  fieldName,
  ChangeFunc,
  placeholder,
  validate,
  valueDefault,
  typeField,
}) {
  return (
    <Field>
      <Label>{fieldName}</Label>
      <Control>
        <Input
          type={!typeField ? 'text' : typeField}
          placeholder={placeholder}
          value={isUndefined(valueDefault) ? '' : valueDefault}
          onChange={ChangeFunc}
        />
      </Control>
      <Help isColor={'danger'} isHidden={validate}>Esta vacio este campo.</Help>
    </Field>
  );
}

FieldInput.propTypes = {
  fieldName: React.PropTypes.string,
  ChangeFunc: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  validate: React.PropTypes.bool,
  valueDefault: React.PropTypes.string,
  typeField: React.PropTypes.string,
};

export default FieldInput;
