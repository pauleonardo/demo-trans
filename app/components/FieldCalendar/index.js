/**
*
* FieldCalendar
*
*/

import React from 'react';
import {
  Field,
  Label,
  Control,
  Help,
} from 'bloomer';
import moment from 'moment';
import { isUndefined } from 'lodash/lang';
import DatePicker from 'react-widgets/lib/DateTimePicker';


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
        <DatePicker
          value={(isUndefined(valueDefault)) ? (new Date()) : (moment(valueDefault, 'DD/MM/YYYY').toDate())}
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
  FieldCalendarName: React.PropTypes.string,
  valueDefault: React.PropTypes.string,
  validate: React.PropTypes.bool,
  selectFunc: React.PropTypes.func,
  changeFunc: React.PropTypes.func,
};

export default FieldCalendar;
