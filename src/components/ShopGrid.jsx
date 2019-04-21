import React from "react";
import { Card } from "semantic-ui-react";
import ShopItem from "./ShopItem";

const styles = {
  containerStyle: {
    margin: "auto",
    justifyContent: "center"
  }
};

const items = [
  {
    id: 1,
    name: "肉桂捲",
    nameEnglish: "Cinnamon Roll",
    price: {
      boxOfFour: 800,
      boxOfSix: 1200
    },
    soldOut: false
  },
  {
    id: 2,
    name: "奶油乳酪抹醬",
    nameEnglish: "Cream Cheese Spread",
    price: 40,
    soldOut: false
  },
  {
    id: 3,
    name: "檸檬馬鞭草生乳酪蛋糕",
    nameEnglish: "Lemon Verbena Yogurt Cheesecake",
    price: 700,
    soldOut: false
  },
  {
    id: 4,
    name: "檸檬馬鞭草生乳酪蛋糕4杯裝",
    nameEnglish: "Lemon Verbena Yogurt Cheesecake (4 cups)",
    price: 700,
    soldOut: false
  },
  {
    id: 5,
    name: "蔓越莓奶酥醬",
    nameEnglish: "Cranberry Butter Biscuit Spread",
    price: 500,
    soldOut: false
  },
  {
    id: 6,
    name: "原味奶酥醬",
    nameEnglish: "Original Butter Biscuit Spread",
    price: 520,
    soldOut: false
  },
  {
    id: 7,
    name: "有機椰子糖奶酥醬",
    nameEnglish: "Organic Coconut Sugar Butter Biscuit Spread",
    price: 650,
    soldOut: false
  },
  {
    id: 8,
    name: "原味司康",
    nameEnglish: "Original Scone",
    price: {
      boxOfFour: 340,
      boxOfSix: 480
    },
    soldOut: true
  },
  {
    id: 9,
    name: "伯爵茶司康",
    nameEnglish: "Earl Grey Scone",
    price: {
      boxOfFour: 360,
      boxOfSix: 510
    },
    soldOut: true
  },
  {
    id: 10,
    name: "綜合司康",
    nameEnglish: "Assorted Scone",
    price: {
      boxOfFour: 350,
      boxOfSix: 510
    },
    soldOut: true
  },
  {
    id: 11,
    name: "德文郡奶油",
    nameEnglish: "Devon English Luxury Clotted Cream",
    price: 320,
    soldOut: true
  },
  {
    id: 12,
    name: "香蕉磅蛋糕",
    nameEnglish: "Banana Pound Cake",
    price: 700,
    soldOut: true
  },
  {
    id: 13,
    name: "維也納奶油抹醬",
    nameEnglish: "Vienna Butter Cream Spread",
    price: 520,
    soldOut: true
  }
];

export default class ShopGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  render() {
    const { containerStyle } = styles;
    return (
      <Card.Group style={containerStyle}>
        {items.map(item => {
          if (item["price"]["boxOfFour"]) {
            return (
              <ShopItem
                itemName={item["name"]}
                itemNameEnglish={item["nameEnglish"]}
                itemPrice={`$${item["price"]["boxOfFour"]}/4 pcs . $${
                  item["price"]["boxOfSix"]
                }/6 pcs`}
                itemType="multi"
                itemDescription="itemDescription"
                cinnamonEnabled={this.props.cinnamonEnabled}
                addItemToCart={this.props.addItemToCart}
                removeItemFromCart={this.props.removeItemFromCart}
                cart={this.props.cart}
                id={item["id"]}
                options={[
                  {
                    text: `4入組 . $${item["price"]["boxOfFour"]}`,
                    value: "boxOfFour"
                  },
                  {
                    text: `6入組 . $${item["price"]["boxOfSix"]}`,
                    value: "boxOfSix"
                  }
                ]}
                key={item["id"]}
                soldOut={item["soldOut"]}
              />
            );
          } else if (
            item["id"] === 5 ||
            item["id"] === 6 ||
            item["id"] === 7 ||
            item["id"] === 11 ||
            item["id"] === 13
          ) {
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
                options={[{ text: `1罐 . $${item["price"]}`, value: "one" }]}
                key={item["id"]}
                soldOut={item["soldOut"]}
              />
            );
          } else if (item["id"] === 3) {
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
                options={[
                  { text: `1盒/6吋 . $${item["price"]}`, value: "one" }
                ]}
                key={item["id"]}
                soldOut={item["soldOut"]}
              />
            );
          } else
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
                options={[{ text: `1份 . $${item["price"]}`, value: "one" }]}
                key={item["id"]}
                soldOut={item["soldOut"]}
              />
            );
        })}
      </Card.Group>
    );
  }
}
