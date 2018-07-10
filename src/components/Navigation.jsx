import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  state = {
    activeItem: null
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          header
          as={Link}
          to='/'
        >
          Janet's Bakery
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/about'
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          as={Link}
          to='/order'
          name='order'
          active={activeItem === 'order'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/social'
          name='social'
          active={activeItem === 'social'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
};
