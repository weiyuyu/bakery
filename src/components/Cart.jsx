import React from 'react';
import { Card, Image, Container } from 'semantic-ui-react';

import cinnamon from './../img/肉桂捲/93A298D7-1277-40F0-AD89-AD6065E186C4.JPG';
import cream from './../img/奶油乳酪抹醬/A7DF2924-D347-4741-8F8E-B7D2B64F394F.JPG';
import standard_scone from './../img/原味司康/AEAE7506-FD0F-446B-97CE-DD872557FDFD.JPG';
import tea_scone from './../img/伯爵茶司康/953ED3DF-56B2-4EBC-9E0D-C948BD94D1DE.JPG';
import mixed_scone from './../img/綜合司康/A9DDCFC7-5CBE-476D-91CE-A6CE4B6785D0.JPG';

const thumbnails = {
  "肉桂捲": cinnamon,
  "奶油乳酪抹醬": cream,
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
