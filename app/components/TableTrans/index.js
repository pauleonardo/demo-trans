/**
*
* TableTrans
*
*/

import React from 'react';
import { map } from 'lodash/collection';
import {
  Table,
} from 'bloomer';
import Item from './ItemList';
import {
  Container,
} from './StyledComponents';

function TableTrans({
  registros,
  headerClick,
  headers,
  reverse,
}) {
  return (
    <Container>
      <Table isStriped>
        <thead role={'presentation'} onClick={headerClick} >
          <tr>
            {
              map(headers, (item, index) => (
                <th
                  key={`header-list-${index}`}
                  style={{ flexGrow: 1, order: item.order }}
                >
                  {(!reverse) ?
                    <i className="fa fa-arrow-up" style={{ marginRight: 4 }} ></i> :
                    <i className="fa fa-arrow-down" style={{ marginRight: 4 }} ></i>
                  }
                  {item.name}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {map(registros, (item, index) => (
            <Item
              key={`list-registros-${index}`}
              id={item.id}
              idEmisor={item.idEmisor}
              idReceptor={item.idReceptor}
              cantidad={item.cantidad}
              type={item.type}
              date={item.date}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

TableTrans.propTypes = {
  registros: React.PropTypes.array,
  headerClick: React.PropTypes.func,
  headers: React.PropTypes.array,
  reverse: React.PropTypes.bool,
};

export default TableTrans;
