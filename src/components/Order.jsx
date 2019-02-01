import React from 'react';
import { Container } from 'semantic-ui-react';
import ShopGrid from './ShopGrid';

class Order extends React.Component {

  render() {
    return (
      <Container>
        <ShopGrid cinnamonEnabled={this.props.cinnamonEnabled} addItemToCart={this.props.addItemToCart} removeItemFromCart={this.props.removeItemFromCart} cart={this.props.cart}/>
      </Container>
    );
  }
}

export default Order;
