/**
*
* ItemList
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import {
  ItemTd,
} from './styles';

function ItemList({
  id,
  idEmisor,
  idReceptor,
  cantidad,
  type,
  date,
}) {
  return (
    <tr>
      <td style={ItemTd}>{id}</td>
      <td style={ItemTd}>{idEmisor}</td>
      <td style={ItemTd}>{idReceptor}</td>
      <td style={ItemTd}>{cantidad}</td>
      <td style={ItemTd}>{type}</td>
      <td style={ItemTd}>{date}</td>
    </tr>
  );
}

ItemList.propTypes = {
  id: PropTypes.string,
  idEmisor: PropTypes.string,
  idReceptor: PropTypes.string,
  cantidad: PropTypes.number,
  type: PropTypes.string,
  date: PropTypes.string,
};

export default ItemList;
