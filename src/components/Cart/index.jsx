import React from 'react';
import { Nav, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  return (
    <Nav>
      <Nav.Link href="#carrito">
        <FontAwesomeIcon icon={faShoppingCart} />{' '}
        <Badge pill variant="primary">
          3
        </Badge>
      </Nav.Link>
    </Nav>
  );
}

export default Cart;
