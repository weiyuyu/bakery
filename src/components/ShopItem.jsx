import React from 'react';
import { Card, Image, Button, Modal, Header } from 'semantic-ui-react';
import { Animated } from 'react-animated-css';
import thumbnail1 from './../img/肉桂捲/1 肉桂卷封面照.JPG';
import thumbnail2 from './../img/奶油乳酪抹醬/6A92216A-EB85-4B97-9F53-BF1356EDE851.JPG';
import thumbnail3 from './../img/原味司康/180B6A17-7FFD-4B02-8B4B-CF3D5B5F8AD8.JPG';
import thumbnail4 from './../img/伯爵茶司康/6173911E-419F-4847-B18E-FD7B93C62492.JPG';
import thumbnail5 from './../img/綜合司康/D3669B97-9551-40E1-82D1-AF420076F5E2.JPG';

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

const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5];

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
            <Image src={thumbnails[this.props.id-1]} alt="Placeholder" rounded style={thumbnailStyle}/>
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
                <Image wrapped rounded size='medium' src={thumbnails[this.props.id-1]} style={thumbnailStyle}/>
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
