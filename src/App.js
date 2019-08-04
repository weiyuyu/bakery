import React from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import "./App.css";
import axios from "axios";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartTotal: 0,
      cinnamonEnabled: false,
      standardSconeEnabled: true,
      devonEnabled: true
    };

    this.addCartTotal = this.addCartTotal.bind(this);
    this.removeCartTotal = this.removeCartTotal.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://janetsbakeryapi.herokuapp.com/")
      .then(res => res.data)
      .then(data => {
        // handle success
        console.log(data);
        this.setState({ 
          cinnamonEnabled: data.cinnamonEnabled,
          standardSconeEnabled: data.standardSconeEnabled,
          devonEnabled: data.devonEnabled
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  addCartTotal = quantity => {
    this.setState({ cartTotal: this.state.cartTotal + quantity });
  };

  removeCartTotal = quantity => {
    this.setState({ cartTotal: this.state.cartTotal - quantity });
  };

  render() {
    return (
      <div className="App">
        <Navigation cartTotal={this.state.cartTotal} />
        <Main
          addCartTotal={this.addCartTotal}
          removeCartTotal={this.removeCartTotal}
          cartTotal={this.state.cartTotal}
          cinnamonEnabled={this.state.cinnamonEnabled}
          standardSconeEnabled={this.state.standardSconeEnabled}
          devonEnabled={this.state.devonEnabled}
        />
      </div>
    );
  }
}
