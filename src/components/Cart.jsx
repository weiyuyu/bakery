import React from 'react';
import { Image, Container, Table, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

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
    'justifyContent': 'center',
    'padding': 20,
    'paddingBottom': 5
  },
};

const nameEnglish = {
  '肉桂捲': 'Cinnamon Roll',
  '奶油乳酪抹醬': 'Cream Cheese Spread',
  '原味司康': 'Standard Scone',
  '伯爵茶司康': 'Earl Grey Scone',
  '綜合司康': 'Assorted Scone',
};

const prices = {
    "肉桂捲": {
      "boxOfFour": 800,
      "boxOfSix": 1200
    },
    "奶油乳酪抹醬": {
      "one": 40
    },
    "原味司康": {
      "boxOfFour": 340,
      "boxOfSix": 480
    },
    "伯爵茶司康": {
      "boxOfFour": 360,
      "boxOfSix": 510
    },
    "綜合司康": {
      "boxOfFour": 350,
      "boxOfSix": 510
    },
}


export default class Cart extends React.Component {
  render() {
    const { containerStyle } = styles;

    let totalPrice = 0;
    let cart = this.props.cart;
    let cartItems = Object.keys(cart).map(function(key) {
      return [key, Object(cart[key])];
    });
    console.log(cartItems.length);

    if(this.props.cartTotal === 0) {
      return (
        <Container style={containerStyle}>
          <h2 style={{'margin': 10, 'fontFamily': 'Cormorant'}}> Your cart is empty! Time to pick up some baked goods!</h2>
        </Container>
      );
    } else {
      return (
        <Container style={containerStyle} fluid>
          <Fade bottom>
            <Table basic='very' celled collapsing style={{'fontFamily': 'cwTexMing', 'fontSize': 16, 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '100%'}}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>商品</Table.HeaderCell>
                  <Table.HeaderCell>數量</Table.HeaderCell>
                  <Table.HeaderCell>總額</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {
                  cartItems
                  .filter(item => {
                    let willRender = false;
                    let quantities = item[1];
                    if(quantities["boxOfFour"] > 0 || quantities["boxOfSix"] || quantities["one"] > 0) {
                      willRender = true;
                    }
                    return willRender;
                  }).map((item) => {
                    let itemTotal = 0;
                    if(item[1]["boxOfFour"]) {
                      itemTotal += prices[item[0]]["boxOfFour"]*item[1]["boxOfFour"];
                      totalPrice += prices[item[0]]["boxOfFour"]*item[1]["boxOfFour"];
                    }
                    if(item[1]["boxOfSix"]) {
                      itemTotal += prices[item[0]]["boxOfSix"]*item[1]["boxOfSix"];
                      totalPrice += prices[item[0]]["boxOfSix"]*item[1]["boxOfSix"];
                    }
                    if(item[1]["one"]) {
                      itemTotal += prices[item[0]]["one"]*item[1]["one"];
                      totalPrice += prices[item[0]]["one"]*item[1]["one"];
                    }
                    return (
                      <Table.Row key={item[0]}>
                        <Table.Cell>
                          <Header as='h2' image>
                            <Image src={thumbnails[item[0]]} size='medium' />
                            <Header.Content style={{'fontFamily': 'cwTexMing', 'fontSize': 16}}>
                              {`${item[0]}`}
                              <Header.Subheader style={{'fontFamily': 'Cormorant', 'fontSize': 16}}>{nameEnglish[item[0]]}</Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell style={{'fontFamily': 'Cormorant'}}>
                          {
                            (item[1]["boxOfFour"]) && <p>4<span style={{'fontFamily': 'cwTexMing'}}>入組</span>： {`${item[1]["boxOfFour"]}`}</p>
                          }
                          {
                            (item[1]["boxOfSix"]) && <p>6<span style={{'fontFamily': 'cwTexMing'}}>入組</span>： {`${item[1]["boxOfSix"]}`}</p>
                          }
                          {
                            (item[1]["one"]) && <p><span style={{'fontFamily': 'cwTexMing'}}>份數</span>： {`${item[1]["one"]}`}</p>
                          }
                        </Table.Cell>
                        <Table.Cell style={{'textAlign': 'right', 'fontFamily': 'Cormorant'}}>
                          <span style={{'marginRight': 3}}>$</span>{itemTotal}
                        </Table.Cell>
                      </Table.Row>
                    );
                    }
                  )
                }
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{'fontFamily': 'Cormorant', 'textAlign': 'right'}}><span style={{'fontFamily': 'cwTexMing'}}>總計： </span>{`$${totalPrice}`}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Button
              as={Link}
              to='/checkout'
              style={{'margin': 50}}
            >
              Checkout
            </Button>
          </Fade>
        </Container>
      );
    }
  }
}
