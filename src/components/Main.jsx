import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Order from './Order';
import Social from './Social';
import Cart from './Cart';

export default class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      cart: {}
    };

    this.addItemToCart = this.addItemToCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
  }

  addItemToCart(newItem) {
    let cart = this.state.cart;
    if(!cart[newItem]) {
      cart[newItem] = 0;
    }
    cart[newItem] += 1;
    this.setState({cart: cart});
  }

  removeItemFromCart(oldItem) {
    let cart = this.state.cart;
    if(cart[oldItem] && cart[oldItem] > 0) {
      cart[oldItem] -= 1;
    }
    this.setState({cart: cart})
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/order' render={(props) => <Order addItemToCart={this.addItemToCart} removeItemFromCart={this.removeItemFromCart} cart={this.state.cart}/>} />
          <Route exact path='/social' component={Social}/>
          <Route exact path='/cart' render={(props) => <Cart cart={this.state.cart}/>} />
        </Switch>
      </main>
    );
  }
};
