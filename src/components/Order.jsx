import React from 'react';
import { Container } from 'semantic-ui-react';
import ShopGrid from './ShopGrid';

class Order extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: null
    };
  }

  render() {
    return (
      <Container>
        <ShopGrid />
      </Container>
    );
  }
}

export default Order;
