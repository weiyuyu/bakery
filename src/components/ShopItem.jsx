import React from 'react';
import { Card, Button, Image, Modal, Header } from 'semantic-ui-react';
import ItemCarousel from './ItemCarousel';
import { Animated } from 'react-animated-css';

import cinnamon1 from './../img/肉桂捲/1 肉桂卷封面照.JPG';
import cinnamon2 from './../img/肉桂捲/1A07991F-9369-454A-90F6-097B04A59EFA.JPG';
import cinnamon3 from './../img/肉桂捲/2 四入組.JPG';
import cinnamon4 from './../img/肉桂捲/3 六入組.JPG';

import cream1 from './../img/奶油乳酪抹醬/6A92216A-EB85-4B97-9F53-BF1356EDE851.JPG';
import cream2 from './../img/奶油乳酪抹醬/A7DF2924-D347-4741-8F8E-B7D2B64F394F.JPG';

import standard_scone1 from './../img/原味司康/180B6A17-7FFD-4B02-8B4B-CF3D5B5F8AD8.JPG';
import standard_scone2 from './../img/原味司康/AEAE7506-FD0F-446B-97CE-DD872557FDFD.JPG';
import standard_scone3 from './../img/原味司康/D87EEEF1-22C9-470D-B1B8-5DCC1751F71E.JPG';
import standard_scone4 from './../img/原味司康/E63D53D4-CDBF-4B40-B2A5-6F5FDED455F8.JPG';

import tea_scone1 from './../img/伯爵茶司康/6173911E-419F-4847-B18E-FD7B93C62492.JPG';
import tea_scone2 from './../img/伯爵茶司康/CE8AFA52-06CB-403C-A8C9-07DCFBFD2FCC.JPG';

import mixed_scone1 from './../img/綜合司康/D3669B97-9551-40E1-82D1-AF420076F5E2.JPG';

const styles = {
  cardStyle: {
    'margin': 30,
  },
  textStyle: {
    'margin': 10,
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

const cinnamon = [
  {
    "id": 0,
    "file": cinnamon1,
    "legend": "肉桂捲"
  },
  {
    "id": 1,
    "file": cinnamon2,
    "legend": "肉桂捲"
  },
  {
    "id": 2,
    "file": cinnamon3,
    "legend": "肉桂捲"
  },
  {
    "id": 3,
    "file": cinnamon4,
    "legend": "肉桂捲"
  }
];

const cream = [
  {
    "id": 4,
    "file": cream1,
    "legend": "奶油乳酪抹醬"
  },
  {
    "id": 5,
    "file": cream2,
    "legend": "奶油乳酪抹醬"
  }
];

const standard_scone = [
  {
    "id": 6,
    "file": standard_scone1,
    "legend": "原味司康"
  },
  {
    "id": 7,
    "file": standard_scone2,
    "legend": "原味司康"
  },
  {
    "id": 8,
    "file": standard_scone3,
    "legend": "原味司康"
  },
  {
    "id": 9,
    "file": standard_scone4,
    "legend": "原味司康"
  }
];

const tea_scone = [
  {
    "id": 10,
    "file": tea_scone1,
    "legend": "伯爵茶司康"
  },
  {
    "id": 11,
    "file": tea_scone2,
    "legend": "伯爵茶司康"
  },
];

const mixed_scone = [
  {
    "id": 12,
    "file": mixed_scone1,
    "legend": "綜合司康"
  },
];

const images = [cinnamon, cream, standard_scone, tea_scone, mixed_scone];

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
    const { cardStyle, thumbnailStyle, modalContentStyle, textStyle } = styles;
    const { quantity } = this.state;
    return (
      <Animated animationIn="bounceInUp" isVisible={true}>
        <Card style={cardStyle}>
          <Card.Content>
            <Image src={images[this.props.id-1][0]["file"]} alt="Placeholder" rounded style={thumbnailStyle}/>
            <Card.Header style={textStyle}> {this.props.itemName} </Card.Header>
            <Card.Meta style={textStyle}> {this.props.itemType} </Card.Meta>
            <Card.Description style={textStyle}>
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
                {/* <Image wrapped rounded size='medium' src={thumbnails[this.props.id-1]} style={thumbnailStyle}/> */}
                <ItemCarousel items={images[this.props.id-1]}/>
                <Button.Group>
                  <Button disabled={quantity === 0} icon='minus' onClick={this.handleRemove} />
                  <Button icon='plus' onClick={this.handleAdd} />
                </Button.Group>
                <Modal.Description>
                  <Header style={textStyle}>{this.props.itemName}</Header>
                  <p style={textStyle}>{`Quantity: ${quantity}`}</p>
                  <p style={textStyle}>{this.props.itemDescription}</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Card.Content>
        </Card>
      </Animated>
    );
  }
}
