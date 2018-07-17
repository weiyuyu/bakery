import React from 'react';
import { Card, Image, Button, Modal, Header } from 'semantic-ui-react';
import { Animated } from 'react-animated-css';
import logo from './../img/banner_lg.png';

const styles = {
  cardStyle: {
    'margin': 30,
  },
  thumbnailStyle: {
    'marginBottom': 20,
    'display': 'block',
    'marginLeft': 'auto',
    'marginRight': 'auto'
  },
  modalContentStyle: {
    'textAlign': 'center'
  }
};

export default class ShopItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.cart[this.props.itemName] || 0
    };
  }

  handleAdd = () => {
    this.setState({ quantity: this.state.quantity+1 });
    this.props.addItemToCart(this.props.itemName);
  };

  handleRemove = () => {
    this.setState({ quantity: this.state.quantity-1 });
    this.props.removeItemFromCart(this.props.itemName);
  };

  render() {
    const { cardStyle, thumbnailStyle, modalContentStyle } = styles;
    const { quantity } = this.state;
    return (
      <Animated animationIn="bounceInUp" isVisible={true}>
        <Card style={cardStyle}>
          <Card.Content>
            <Image src={logo} alt="Placeholder" rounded style={thumbnailStyle}/>
            <Card.Header> {this.props.itemName} </Card.Header>
            <Card.Meta> {this.props.itemType} </Card.Meta>
            <Card.Description>
              {this.props.itemDescription}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Modal
              trigger={
                <div className='ui two buttons'>
                  <Button color='pink'>
                    View
                  </Button>
                </div>
              }
            >
              <Modal.Header>Item Details</Modal.Header>
              <Modal.Content style={modalContentStyle}>
                <Image wrapped rounded size='medium' src={logo} style={thumbnailStyle}/>
                <Button.Group>
                  <Button disabled={quantity === 0} icon='minus' onClick={this.handleRemove} />
                  <Button icon='plus' onClick={this.handleAdd} />
                </Button.Group>
                <Modal.Description>
                  <Header>{this.props.itemName}</Header>
                  <p>{`Quantity: ${quantity}`}</p>
                  <p>{this.props.itemDescription}</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Card.Content>
        </Card>
      </Animated>
    );
  }
}
