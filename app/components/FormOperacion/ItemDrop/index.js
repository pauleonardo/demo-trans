/**
*
* ItemDrop
*
*/

import React from 'react';
import PropTypes from 'prop-types';


function ItemDrop({ item }) {
  return (
    <div>
      { item[1].name }
    </div>
  );
}

ItemDrop.propTypes = {
  item: PropTypes.array,
};

export default ItemDrop;
