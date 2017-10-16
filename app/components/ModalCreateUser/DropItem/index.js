/**
*
* DropItem
*
*/

import React from 'react';


function DropItem({ item }) {
  return (
    <span>
      <span className={`flag-icon flag-icon-${item.alpha2Code.toLowerCase()}`}></span>
      <strong>{item.translations.es}</strong>
    </span>
  );
}

DropItem.propTypes = {
  item: React.PropTypes.obj,
};

export default DropItem;
