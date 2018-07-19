import React from 'react';
import { Card, Image, Container } from 'semantic-ui-react';

import cinnamon from './../img/肉桂捲/1 肉桂卷封面照.JPG';
import cream from './../img/奶油乳酪抹醬/6A92216A-EB85-4B97-9F53-BF1356EDE851.JPG';
import standard_scone from './../img/原味司康/180B6A17-7FFD-4B02-8B4B-CF3D5B5F8AD8.JPG';
import tea_scone from './../img/伯爵茶司康/6173911E-419F-4847-B18E-FD7B93C62492.JPG';
import mixed_scone from './../img/綜合司康/D3669B97-9551-40E1-82D1-AF420076F5E2.JPG';

const thumbnails = {
  "肉桂捲": cinnamon,
  "奶油乳酪抹醬 (一份)": cream,
  "原味司康": standard_scone,
  "伯爵茶司康": tea_scone,
  "綜合司康": mixed_scone
};

const styles = {
  containerStyle: {
    'textAlign': 'center',
    'padding': 20,
    'paddingBottom': 5
  },
  cardStyle: {
    'display': 'block',
    'marginTop': 20,
    'marginBottom': 20,
    'marginLeft': 'auto',
    'marginRight': 'auto'
  },
  textStyle: {
    'margin': 10,
  },
  thumbnailStyle: {
    'display': 'block',
    'marginBottom': 20,
    'marginLeft': 'auto',
    'marginRight': 'auto'
  },
};

export default class Cart extends React.Component {
  render() {
    const { containerStyle, cardStyle, textStyle, thumbnailStyle } = styles;

    let cart = this.props.cart;
    let cartItems = Object.keys(cart).map(function(key) {
      return [key, Object(cart[key])];
    });
    console.log(cartItems.length);

    if(cartItems.length === 0) {
      return (
        <Container style={containerStyle}>
          <h2 style={textStyle}> Your cart is empty! Time to fill it with baked goods!</h2>
        </Container>
      );
    } else {
      return (
        <Container style={containerStyle}>
          {
            cartItems
            .filter(item => {
              let willRender = false;
              let quantities = item[1];
              if(quantities["boxOfFour"] > 0 || quantities["boxOfSix"] || quantities["one"] > 0) {
                willRender = true;
              }
              return willRender;
            }).map((item, index) => {
                return (
                  <Card style={cardStyle} key={index}>
                    <Card.Header style={containerStyle}>
                      <Image src={thumbnails[item[0]]} size='small' rounded style={thumbnailStyle}/>
                      <span> {`商品： ${item[0]}`} </span>
                    </Card.Header>
                    <Card.Meta style={textStyle}>
                      {
                        (item[1]["boxOfFour"]>0) && <p style={textStyle}> {`4入: ${item[1]["boxOfFour"]}`} </p>
                      }
                      {
                        (item[1]["boxOfSix"]>0) && <p style={textStyle}> {`6入: ${item[1]["boxOfSix"]}`} </p>
                      }
                      {
                        (item[1]["one"]>0) && <p style={textStyle}> {`1份: ${item[1]["one"]}`} </p>
                      }
                    </Card.Meta>
                  </Card>
                );
              }
            )
          }
        </Container>
      );
    }
  }
}
