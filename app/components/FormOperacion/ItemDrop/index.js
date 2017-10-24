/**
*
* ItemDrop
*
*/

import React from 'react';

function ItemDrop({ item }) {
  return (
    <div>
      { item[1].name }
    </div>
  );
}

ItemDrop.propTypes = {
  item: React.PropTypes.obj,
};

export default ItemDrop;
