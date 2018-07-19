import React from 'react';
import { Card } from 'semantic-ui-react';
import ShopItem from './ShopItem';

const styles = {
  containerStyle: {
    'margin': 'auto',
    'justifyContent': 'center'
  }
};

const items = [
  {
    "id": 1,
    "name": "肉桂捲",
    "price": {
      "boxOfFour": 800,
      "boxOfSix": 1200
    }
  },
  {
    "id": 2,
    "name": "奶油乳酪抹醬 (一份)",
    "price": 40
  },
  {
    "id": 3,
    "name": "原味司康",
    "price": {
      "boxOfFour": 340,
      "boxOfSix": 480
    }
  },
  {
    "id": 4,
    "name": "伯爵茶司康",
    "price": {
      "boxOfFour": 360,
      "boxOfSix": 510
    }
  },
  {
    "id": 5,
    "name": "綜合司康",
    "price": {
      "boxOfFour": 350,
      "boxOfSix": 510
    }
  }
];

export default class ShopGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    };
  }

  render() {
    const { containerStyle } = styles;
    return (
      <Card.Group style={containerStyle}>
        {
          items.map(item => {
            if(item["price"]["boxOfFour"]) {
              return (
                <ShopItem
                  itemName={item["name"]}
                  itemPrice={`$${item["price"]["boxOfFour"]}/4入 | $${item["price"]["boxOfSix"]}/6入`}
                  itemType="multi"
                  itemDescription="itemDescription"
                  addItemToCart={this.props.addItemToCart}
                  removeItemFromCart={this.props.removeItemFromCart}
                  cart={this.props.cart}
                  id={item["id"]}
                  options={[{text: '4入組', value: 'boxOfFour'},{text: '6入組', value: 'boxOfSix'}]}
                  key={item["id"]}
                />
              );
            } else return (
              <ShopItem
                itemName={item["name"]}
                itemPrice={`$${item["price"]}/1份`}
                itemType="single"
                itemDescription="itemDescription"
                addItemToCart={this.props.addItemToCart}
                removeItemFromCart={this.props.removeItemFromCart}
                cart={this.props.cart}
                id={item["id"]}
                options={[{text: '1份', value: 'one'}]}
                key={item["id"]}
              />
            );
          })
        }
      </Card.Group>
    );
  }
}
