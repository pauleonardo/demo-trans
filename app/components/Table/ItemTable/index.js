/**
*
* ItemTable
*
*/

import React from 'react';
import uuid from 'uuid';
import moment from 'moment-with-locales-es6';
import PropTypes from 'prop-types';


import Button from 'components/Button';
import {
 styles,
} from '../StyledComponents';

function ItemTable({
    id,
    country,
    deports,
    date,
    name,
    eraseAction,
    editAction,
    transAction,
}) {
  const relativeTime = (time) => {
    let tiempo = moment(time, 'DD/MM/YYYY').locale('es');
    tiempo = tiempo.fromNow(true);
    tiempo = tiempo.trim();
    return `${tiempo}`;
  };
  return (
    <tr key={uuid.v4()}>
      <td style={styles.items}>{id}</td>
      <td style={styles.items}>
        <span className={`flag-icon flag-icon-${country.toLowerCase()}`}></span>
      </td>
      <td style={styles.items}>{name}</td>
      <td style={styles.items}>{deports.join(',')}</td>
      <td style={styles.items}>{relativeTime(date)}</td>
      <td style={styles.items}>
        <Button
          color={'danger'}
          text={'Borrar'}
          action={() => eraseAction(id)}
        />
      </td>
      <td style={styles.items}>
        <Button
          color={'warning'}
          text={'Editar'}
          action={() => editAction({ id, country, deports, date, name, eraseAction, editAction, transAction })}
        />
      </td>
      <td style={styles.items}>
        <Button
          color={'info'}
          text={'Transacciones'}
          action={() => transAction(id)}
        />
      </td>
    </tr>
  );
}

ItemTable.propTypes = {
  id: PropTypes.string,
  country: PropTypes.string,
  deports: PropTypes.array,
  date: PropTypes.string,
  name: PropTypes.string,
  eraseAction: PropTypes.func,
  editAction: PropTypes.func,
  transAction: PropTypes.func,
};

export default ItemTable;
