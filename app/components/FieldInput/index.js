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
}) {
  return (
    <Field>
      <Label>{fieldName}</Label>
      <Control>
        <Input
          type={'text'}
          placeholder={placeholder}
          value={isUndefined(valueDefault) ? '' : valueDefault}
          onChange={(res) => { ChangeFunc(res); }}
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
};

export default FieldInput;
