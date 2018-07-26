import React from 'react';
import CustomerForm from './CustomerForm';
import Zoom from 'react-reveal/Zoom';

const Checkout = (props) => (
  <Zoom>
    <CustomerForm cart={props.cart}/>
  </Zoom>
);

export default Checkout;
