import React from 'react';
import { Card, Image, Button, Modal, Header } from 'semantic-ui-react';
import logo from './../img/banner_lg.png';

const styles = {
  thumbnailStyle: {
    'marginBottom': 20
  }
};

export default class ShopItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      quantity: 0,
      items: []
    };
  }

  handleAdd = () => {
    let cart = this.state.items;
    cart.push(this.props.itemName);
    this.setState({ items: cart });
    this.setState({ quantity: this.state.quantity+1 });
  };

  handleRemove = () => {
    this.setState({ items: this.state.items.slice(0, -1) });
    this.setState({ quantity: this.state.quantity-1 });
  };

  render() {
    const { thumbnailStyle } = styles;
    const { selected, items, quantity } = this.state;
    return (
      <Card>
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
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
            <Button.Group>
              <Button disabled={items.length === 0} icon='minus' onClick={this.handleRemove} />
              <Button icon='plus' onClick={this.handleAdd} />
            </Button.Group>
            <Modal.Description>
              <Header>{this.props.itemName}</Header>
              <p>{this.props.itemType}</p>
              <p>{this.props.itemDescription}</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        </Card.Content>
      </Card>
    );
  }
}
