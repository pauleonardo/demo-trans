/**
*
* Button
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
} from 'bloomer';

function ButtonCustom({
  color,
  text,
  action,
  loading,
  typeButton,
}) {
  return (
    <Button
      type={!typeButton ? '' : typeButton}
      isColor={color}
      isLoading={loading}
      onClick={action}
    >
      { text }
    </Button>
  );
}

ButtonCustom.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func,
  loading: PropTypes.bool,
  typeButton: PropTypes.string,
};

export default ButtonCustom;
