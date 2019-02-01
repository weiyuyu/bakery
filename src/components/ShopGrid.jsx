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
    "nameEnglish": "Cinnamon Roll",
    "price": {
      "boxOfFour": 800,
      "boxOfSix": 1200
    }
  },
  {
    "id": 2,
    "name": "奶油乳酪抹醬",
    "nameEnglish": "Cream Cheese Spread",
    "price": 40
  },
  {
    "id": 3,
    "name": "原味司康",
    "nameEnglish": "Original Scone",
    "price": {
      "boxOfFour": 340,
      "boxOfSix": 480
    }
  },
  {
    "id": 4,
    "name": "伯爵茶司康",
    "nameEnglish": "Earl Grey Scone",
    "price": {
      "boxOfFour": 360,
      "boxOfSix": 510
    }
  },
  {
    "id": 5,
    "name": "綜合司康",
    "nameEnglish": "Assorted Scone",
    "price": {
      "boxOfFour": 350,
      "boxOfSix": 510
    }
  },
  {
    "id": 6,
    "name": "德文郡奶油",
    "nameEnglish": "Devon English Luxury Clotted Cream",
    "price": 85
  },
  {
    "id": 7,
    "name": "檸檬優格生乳酪蛋糕",
    "nameEnglish": "Lemon Yogurt Cheesecake",
    "price": 700
  },
  {
    "id": 8,
    "name": "檸檬優格生乳酪蛋糕4杯裝",
    "nameEnglish": "Lemon Yogurt Cheesecake (4 cups)",
    "price": 700
  },
  {
    "id": 9,
    "name": "香蕉磅蛋糕",
    "nameEnglish": "Banana Pound Cake",
    "price": 700
  },
  {
    "id": 10,
    "name": "蔓越莓奶酥醬",
    "nameEnglish": "Cranberry Butter Biscuit Spread",
    "price": 500
  },
  {
    "id": 11,
    "name": "原味奶酥醬",
    "nameEnglish": "Original Butter Biscuit Spread",
    "price": 520
  },
  {
    "id": 12,
    "name": "有機椰子糖奶酥醬",
    "nameEnglish": "Organic Coconut Sugar Butter Biscuit Spread",
    "price": 650
  },
  {
    "id": 13,
    "name": "維也納奶油抹醬",
    "nameEnglish": "Vienna Butter Cream Spread",
    "price": 520
  },
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
                  itemNameEnglish={item["nameEnglish"]}
                  itemPrice={`$${item["price"]["boxOfFour"]}/4 pcs . $${item["price"]["boxOfSix"]}/6 pcs`}
                  itemType="multi"
                  itemDescription="itemDescription"
                  cinnamonEnabled={this.props.cinnamonEnabled}
                  addItemToCart={this.props.addItemToCart}
                  removeItemFromCart={this.props.removeItemFromCart}
                  cart={this.props.cart}
                  id={item["id"]}
                  options={[{text: `4入組 . $${item["price"]["boxOfFour"]}`, value: 'boxOfFour'},{text: `6入組 . $${item["price"]["boxOfSix"]}`, value: 'boxOfSix'}]}
                  key={item["id"]}
                />
              );
            } else if(item["id"] === 6 || item["id"] === 10 || item["id"] === 11 || item["id"] === 12 || item["id"] === 13) {
              return (
                <ShopItem
                  itemName={item["name"]}
                  itemNameEnglish={item["nameEnglish"]}
                  itemPrice={`$${item["price"]}/1 srv.`}
                  itemType="single"
                  itemDescription="itemDescription"
                  cinnamonEnabled={this.props.cinnamonEnabled}
                  addItemToCart={this.props.addItemToCart}
                  removeItemFromCart={this.props.removeItemFromCart}
                  cart={this.props.cart}
                  id={item["id"]}
                  options={[{text: `1罐 . $${item["price"]}`, value: 'one'}]}
                  key={item["id"]}
                />
              );
            } else if(item["id"] === 7) {
              return (
                <ShopItem
                  itemName={item["name"]}
                  itemNameEnglish={item["nameEnglish"]}
                  itemPrice={`$${item["price"]}/1 srv.`}
                  itemType="single"
                  itemDescription="itemDescription"
                  cinnamonEnabled={this.props.cinnamonEnabled}
                  addItemToCart={this.props.addItemToCart}
                  removeItemFromCart={this.props.removeItemFromCart}
                  cart={this.props.cart}
                  id={item["id"]}
                  options={[{text: `1盒/6吋 . $${item["price"]}`, value: 'one'}]}
                  key={item["id"]}
                />
              );
            } else return (
              <ShopItem
                itemName={item["name"]}
                itemNameEnglish={item["nameEnglish"]}
                itemPrice={`$${item["price"]}/1 srv.`}
                itemType="single"
                itemDescription="itemDescription"
                cinnamonEnabled={this.props.cinnamonEnabled}
                addItemToCart={this.props.addItemToCart}
                removeItemFromCart={this.props.removeItemFromCart}
                cart={this.props.cart}
                id={item["id"]}
                options={[{text: `1份 . $${item["price"]}`, value: 'one'}]}
                key={item["id"]}
              />
            );
          })
        }
      </Card.Group>
    );
  }
}
