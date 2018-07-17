import React from 'react';

export default class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  }

  handleAdd = () => {
    let cart = this.state.items;
    cart.push(this.props.itemName);
    this.setState({ items: cart });
  };

  handleRemove = () => {
    this.setState({ items: this.state.items.slice(0, -1) });
  }

  render() {
    return (
      <h1> Shopping Cart </h1>
    );
  }
}
