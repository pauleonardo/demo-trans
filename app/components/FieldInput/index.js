/**
*
* FieldInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';

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
  fieldName: PropTypes.string,
  ChangeFunc: PropTypes.func,
  placeholder: PropTypes.string,
  validate: PropTypes.bool,
  valueDefault: PropTypes.any,
  typeField: PropTypes.string,
};

export default FieldInput;
