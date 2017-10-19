/**
*
* ItemTable
*
*/

import React from 'react';
import uuid from 'uuid';
import moment from 'moment';

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
    let sinFormato = moment(time, 'DD/MM/YYYY').fromNow(true);
    sinFormato = sinFormato.trim();
    const timeFormated = sinFormato.slice(0, sinFormato.indexOf('year'));
    return `${timeFormated} años `;
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
  id: React.PropTypes.num,
  country: React.PropTypes.string,
  deports: React.PropTypes.array,
  date: React.PropTypes.string,
  name: React.PropTypes.string,
  eraseAction: React.PropTypes.func,
  editAction: React.PropTypes.func,
  transAction: React.PropTypes.func,
};

export default ItemTable;
