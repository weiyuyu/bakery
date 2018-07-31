import React from 'react';
import { Image, Container, Table, Header, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import cinnamon from './../img/肉桂捲/93A298D7-1277-40F0-AD89-AD6065E186C4.JPG';
import cream from './../img/奶油乳酪抹醬/6919182F-0F7A-4FE9-9D91-16AF36DAE911.JPG';
import standard_scone from './../img/原味司康/AEAE7506-FD0F-446B-97CE-DD872557FDFD.JPG';
import tea_scone from './../img/伯爵茶司康/953ED3DF-56B2-4EBC-9E0D-C948BD94D1DE.JPG';
import mixed_scone from './../img/綜合司康/A9DDCFC7-5CBE-476D-91CE-A6CE4B6785D0.JPG';
import lemon_yogurt_cake from './../img/檸檬優格生乳酪蛋糕/1.JPG';

const thumbnails = {
  "肉桂捲": cinnamon,
  "奶油乳酪抹醬": cream,
  "原味司康": standard_scone,
  "伯爵茶司康": tea_scone,
  "綜合司康": mixed_scone,
  "檸檬優格生乳酪蛋糕": lemon_yogurt_cake
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
  '原味司康': 'Original Scone',
  '伯爵茶司康': 'Earl Grey Scone',
  '綜合司康': 'Assorted Scone',
  "檸檬優格生乳酪蛋糕": "Lemon Yogurt Cheesecake"
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
    "檸檬優格生乳酪蛋糕": {
      "one": 700
    }
};


export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false
    };
  }

  handleRemoveClick = (name, bundle) => {
    console.log('[Removing]');
    console.log(name);
    console.log(bundle);
    this.props.removeItemFromCart(name, bundle);
    this.setState(this.state);
  }

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
          <h2 style={{'margin': 10, 'fontFamily': 'Cormorant', 'fontSize': '1.5rem'}}>
            <span>Your cart is empty! Time for some </span>
            <Link to='/order' style={{'color': 'black'}}>
              <span style={{'textDecoration': 'underline'}}>cinnamon rolls and scones</span>
            </Link>
            !
          </h2>
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
                            (item[1]["boxOfFour"]>0) &&
                            <div style={{'display': 'flex'}}>
                              <p style={{'flex': 5}}>
                                4
                                <span style={{'fontFamily': 'cwTexMing'}}>入組</span>
                                <span style={{'fontFamily': 'Cormorant'}}>{` ($${prices[item[0]]["boxOfFour"]})`}</span>
                                ： {`${item[1]["boxOfFour"]}`}
                              </p>
                              <Icon className="cartRemoveIcon" name='minus' style={{'flex': 1}} onClick={() => this.handleRemoveClick(item[0], "boxOfFour")}/>
                            </div>
                          }
                          {
                            (item[1]["boxOfSix"]>0) &&
                            <div style={{'display': 'flex'}}>
                              <p style={{'flex': 5}}>
                                6
                                <span style={{'fontFamily': 'cwTexMing'}}>入組</span>
                                <span style={{'fontFamily': 'Cormorant'}}>{` ($${prices[item[0]]["boxOfSix"]})`}</span>
                                ： {`${item[1]["boxOfSix"]}`}
                              </p>
                              <Icon className="cartRemoveIcon" name='minus' style={{'flex': 1}} onClick={() => this.handleRemoveClick(item[0], "boxOfSix")}/>
                            </div>
                          }
                          {
                            (item[1]["one"]>0 && item[0] === "奶油乳酪抹醬") &&
                            <div style={{'display': 'flex'}}>
                              <p style={{'flex': 5}}>
                                <span style={{'fontFamily': 'cwTexMing'}}>份數</span>
                                <span style={{'fontFamily': 'Cormorant'}}>{` ($${prices[item[0]]["one"]})`}</span>
                                ： {`${item[1]["one"]}`}
                              </p>
                              <Icon className="cartRemoveIcon" name='minus' style={{'flex': 1}} onClick={() => this.handleRemoveClick(item[0], "one")}/>
                            </div>
                          }
                          {
                            (item[1]["one"]>0 && item[0] === "檸檬優格生乳酪蛋糕") &&
                            <div style={{'display': 'flex'}}>
                              <p style={{'flex': 5}}>
                                6
                                <span style={{'fontFamily': 'cwTexMing'}}>吋</span>
                                <span style={{'fontFamily': 'Cormorant'}}>{` ($${prices[item[0]]["one"]})`}</span>
                                ： {`${item[1]["one"]}`}
                              </p>
                              <Icon className="cartRemoveIcon" name='minus' style={{'flex': 1}} onClick={() => this.handleRemoveClick(item[0], "one")}/>
                            </div>
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
              style={{'margin': 50, 'fontFamily': 'Cormorant'}}
            >
              Checkout
            </Button>
          </Fade>
        </Container>
      );
    }
  }
}
