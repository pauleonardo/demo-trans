/**
*
* Header
*
*/

import React from 'react';
import {
  Navbar,
  NavbarItem,
  NavbarStart,
  Image,
} from 'bloomer';
import {
  styles,
} from './StyledComponents';

function Header() {
  return (
    <Navbar style={styles.nav}>
      <NavbarStart>
        <NavbarItem>
          <Image
            isSize={'48x48'}
            src={'http://i.imgur.com/QPOc0Y1.png'}
            style={styles.img}
          />
        </NavbarItem>
      </NavbarStart>
    </Navbar>
  );
}

Header.propTypes = {

};

export default Header;
