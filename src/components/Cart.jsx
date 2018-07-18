import React from 'react';

export default class Cart extends React.Component {
  render() {
    let cart = this.props.cart;
    let cartItems = Object.keys(cart).map(function(key) {
      return [key, Number(cart[key])];
    });

    return (
      <div>
        {
          cartItems
          .filter(item => item[1] > 0)
          .map((item) => {
              return <li key={item[0]}>{`Item Name: ${item[0]}, Quantity: ${item[1]}`}</li>
            }
          )
        }
      </div>
    );
  }
}
