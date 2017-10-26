/**
*
* FieldCalendar
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
import moment from 'moment';
import { isUndefined } from 'lodash/lang';
import { DateTimePicker } from 'react-widgets';


function FieldCalendar({
  FieldCalendarName,
  valueDefault,
  validate,
  selectFunc,
  changeFunc,
}) {
  return (
    <Field>
      <Label>{FieldCalendarName}</Label>
      <Control>
        <DateTimePicker
          value={(isUndefined(valueDefault)) ? (moment(new Date()).toDate()) : (moment(valueDefault, 'DD/MM/YYYY').toDate())}
          onSelect={(date, str) => { selectFunc(str); }}
          onChange={(date, str) => { changeFunc(str); }}
          time={false}
          format={'DD/MM/YYYY'}
          culture={'es'}
        />
      </Control>
      <Help isColor={'danger'} isHidden={validate}>Fecha vacía.</Help>
    </Field>
  );
}

FieldCalendar.propTypes = {
  FieldCalendarName: PropTypes.string,
  valueDefault: PropTypes.string,
  validate: PropTypes.bool,
  selectFunc: PropTypes.func,
  changeFunc: PropTypes.func,
};

export default FieldCalendar;
