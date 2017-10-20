/**
*
* Button
*
*/

import React from 'react';
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
  color: React.PropTypes.string,
  text: React.PropTypes.string,
  action: React.PropTypes.func,
  loading: React.PropTypes.bool,
  typeButton: React.PropTypes.string,
};

export default ButtonCustom;
