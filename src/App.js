import React from 'react';
import Navigation from './components/Navigation';
// import Header from './components/Header';
import Main from './components/Main';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartTotal: 0
    };

    this.addCartTotal = this.addCartTotal.bind(this);
    this.removeCartTotal = this.removeCartTotal.bind(this);
  }

  addCartTotal = (quantity) => {
    this.setState({cartTotal: this.state.cartTotal + quantity});
  }

  removeCartTotal = () => {
    this.setState({cartTotal: this.state.cartTotal-1});
  }

  render() {
    return(
      <div className="App">
        <Navigation cartTotal={this.state.cartTotal}/>
        <Main addCartTotal={this.addCartTotal} removeCartTotal={this.removeCartTotal} cartTotal={this.state.cartTotal}/>
      </div>
    );
  }
}
