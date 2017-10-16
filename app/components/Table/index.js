/**
*
* Table
*
*/

import React from 'react';
import uuid from 'uuid';
import { map } from 'lodash/collection';

import {
  Table,
} from 'bloomer';

import {
  styles,
} from './StyledComponents';
import Item from './ItemTable';


function TableCustom({
  headerClick,
  itemElements,
  headersTable,
  reverse,
  erase,
  edit,
  trans,
}) {
  return (
    <Table isStriped>
      <thead role={'presentation'} onClick={headerClick}>
        <tr>
          {
            map(headersTable, (header) => (
              <th key={uuid.v4()} style={{ flexGrow: 1, order: header.order }}>
                {
                  (!reverse) ?
                    <i className={'fa fa-arrow-up'} style={styles.margin} ></i> :
                    <i className={'fa fa-arrow-down'} style={styles.margin} ></i>
                }
                {header.name}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          (reverse) ?
            map(itemElements, (item, index) => (
              <Item
                key={`lista-item-table-${index}`}
                {...item}
                eraseAction={erase}
                editAction={edit}
                transAction={trans}
              />
            )).invert()
            :
            map(itemElements, (item, index) => (
              <Item
                key={`lista-item-table-${index}`}
                {...item}
                eraseAction={erase}
                editAction={edit}
                transAction={trans}
              />
            ))
        }
      </tbody>
    </Table>
  );
}

TableCustom.propTypes = {
  headerClick: React.PropTypes.func,
  itemElements: React.PropTypes.func,
  headersTable: React.PropTypes.obj,
  reverse: React.PropTypes.bool,
  erase: React.PropTypes.func,
  edit: React.PropTypes.func,
  trans: React.PropTypes.func,
};

export default TableCustom;
