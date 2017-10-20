/**
*
* ItemList
*
*/

import React from 'react';
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
  id: React.PropTypes.string,
  idEmisor: React.PropTypes.string,
  idReceptor: React.PropTypes.string,
  cantidad: React.PropTypes.string,
  type: React.PropTypes.string,
  date: React.PropTypes.string,
};

export default ItemList;
