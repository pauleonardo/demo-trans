/**
*
* DropItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';

function DropItem({ item }) {
  return (
    <span>
      <span className={`flag-icon flag-icon-${item.alpha2Code.toLowerCase()}`}></span>
      <strong>{item.translations.es}</strong>
    </span>
  );
}

DropItem.propTypes = {
  item: PropTypes.object,
};

export default DropItem;
