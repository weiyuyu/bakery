import React, { Component } from 'react';
import { Menu, Image, Container, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from './../img/logo/logo_black_sm.png';

const styles = {
  logoStyle: {
    'height': 40,
    'width': 'auto'
  },
  menuItemStyle: {
    'justifyContent': 'center',
    'flex': 1,
    'border': 'none',
  },
  brandStyle: {
    'justifyContent': 'center',
    'flex': 10
  },
  menuStyle: {
    margin: 0,
    'borderTop': 'none',
  },
  brandMenuStyle: {
     'marginBottom': 50
  },
  containerStyle: {
    'position': 'sticky',
    'top': 0,
    'zIndex': 100,
    'background': '#FFF'
  }
};

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state
    const { logoStyle, menuItemStyle, brandStyle, menuStyle, brandMenuStyle, containerStyle } = styles;
    return (
      <Container fluid style={containerStyle}>
        <Menu secondary style={brandMenuStyle}>
          <Menu.Item style={menuItemStyle}></Menu.Item>
          <Menu.Item
            header
            as={Link}
            to='/'
            name="home"
            active={activeItem === 'gome'}
            onClick={this.handleItemClick}
            style={brandStyle}
          >
            <Image src={logo} style={logoStyle}/>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to='/cart'
            name='cart'
            active={activeItem === 'cart'}
            onClick={this.handleItemClick}
            style={menuItemStyle}
          >
            <Icon name='shopping cart'/>
            {this.props.cartTotal}
          </Menu.Item>
        </Menu>
        <Menu secondary pointing style={menuStyle}>
          <Menu.Item
            as={Link}
            to='/about'
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
            style={menuItemStyle}
          />

          <Menu.Item
            as={Link}
            to='/order'
            name='order'
            active={activeItem === 'order'}
            onClick={this.handleItemClick}
            style={menuItemStyle}
          />
          <Menu.Item
            href='https://www.instagram.com/janetsbakery/?hl=en'
            name='instagram'
            active={activeItem === 'instagram'}
            onClick={this.handleItemClick}
            style={menuItemStyle}
          />
        </Menu>
      </Container>
    )
  }
};
