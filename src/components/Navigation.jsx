import React, { Component } from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from './../img/logo_black_sm.png';

const styles = {
  logoStyle: {
    'height': 40,
    'width': 'auto'
  },
  menuStyle: {
    'justifyContent': 'center'
  }
};

export default class Navigation extends Component {
  state = {
    activeItem: null
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state
    const { logoStyle, menuStyle } = styles;
    return (
      <Menu stackable>
        <Menu.Item
          header
          as={Link}
          to='/'
          name="home"
          active={activeItem === 'gome'}
          onClick={this.handleItemClick}
          style={menuStyle}
        >
          <Image src={logo} style={logoStyle}/>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/about'
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          style={menuStyle}
        />

        <Menu.Item
          as={Link}
          to='/order'
          name='order'
          active={activeItem === 'order'}
          onClick={this.handleItemClick}
          style={menuStyle}
        />
        <Menu.Item
          as={Link}
          to='/social'
          name='social'
          active={activeItem === 'social'}
          onClick={this.handleItemClick}
          style={menuStyle}
        />
        <Dropdown
          item
          icon='shopping cart'
          simple
          style={menuStyle}
        >
          <Dropdown.Menu>
            <Dropdown.Item>
              <span className='text'>New</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
};
