import React from 'react';
import { Image, Container, Table, Header, List, Icon, Button } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';
import Moment from 'react-moment';
import uniqid from 'uniqid';
import axios from 'axios';

import cinnamon from './../img/肉桂捲/93A298D7-1277-40F0-AD89-AD6065E186C4.JPG';
import cream from './../img/奶油乳酪抹醬/6919182F-0F7A-4FE9-9D91-16AF36DAE911.JPG';
import standard_scone from './../img/原味司康/AEAE7506-FD0F-446B-97CE-DD872557FDFD.JPG';
import tea_scone from './../img/伯爵茶司康/953ED3DF-56B2-4EBC-9E0D-C948BD94D1DE.JPG';
import mixed_scone from './../img/綜合司康/A9DDCFC7-5CBE-476D-91CE-A6CE4B6785D0.JPG';
import lemon_yogurt_cake from './../img/檸檬優格生乳酪蛋糕/1.JPG';
import devon_cream from './../img/德文郡奶油/Devon English Clotted Cream.JPG';

const thumbnails = {
  "肉桂捲": cinnamon,
  "奶油乳酪抹醬": cream,
  "原味司康": standard_scone,
  "伯爵茶司康": tea_scone,
  "綜合司康": mixed_scone,
  "檸檬優格生乳酪蛋糕": lemon_yogurt_cake,
  "德文郡奶油": devon_cream
};

const styles = {
  containerStyle: {
    'justifyContent': 'center',
    'padding': 20,
    'paddingBottom': 5,
    'marginTop': 20,
    'marginBottom': 50,
    'fontFamily': 'cwTexMing'
  },
  headerStyle: {
    'fontFamily': 'cwTexMing',
    'textAlign': 'left',
    'marginTop': 10
  },
  listItemStyle: {
    'paddingTop': 15,
    'paddingBottom': 15
  },
  buttonStyle: {
    'margin': 40
  },
};

const nameEnglish = {
  '肉桂捲': 'Cinnamon Roll',
  '奶油乳酪抹醬': 'Cream Cheese Spread',
  '原味司康': 'Original Scone',
  '伯爵茶司康': 'Earl Grey Scone',
  '綜合司康': 'Assorted Scone',
  "檸檬優格生乳酪蛋糕": "Lemon Yogurt Cheesecake",
  "德文郡奶油": "Devon English Luxury Clotted Cream"
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
    },
    "德文郡奶油": {
      "one": 350
    }
};

const shippingTimes = {
  'morning': '早上 (13:00前)',
  'afternoon': '下午 (14:00 - 18:00)',
  'nopreference': '不指定'
};

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isComplete: false,
      isFailed: false
    };

    this.sendEmail = this.sendEmail.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({loading: true});
    this.sendEmail('confirmation_email', this.props.email, this.props.details, this.props.comments, this.props.name, this.props.costString, this.props.shippingCost, this.props.totalCost);
  };

  getSpreadsheetValue = (item, bundle) => {
    if(!this.props.cart[item]) {
      return 0;
    } else if(!this.props.cart[item][bundle]) {
      return 0;
    } else {
      return this.props.cart[item][bundle];
    }
  };

  getShippingTime = (time) => {
    let timeString = '';
    switch(time) {
      case 'morning':
        timeString = '下午13:00前';
        break;
      case 'afternoon':
        timeString = '14:00-18:00';
        break;
      case 'nopreference':
        timeString = '不指定';
        break;
      default:
        timeString = '';
        break;
    }

    return timeString;
  };

  sendEmail(templateId, email, details, comments, customerName, costString, shippingCost, totalCost) {
    let paymentDate = this.refs.paymentDate.state.content;
    let id = uniqid().slice(0,5);
    window.emailjs.send(
      'default_service',
      templateId,
      {
        email,
        id,
        details,
        comments,
        customerName,
        costString,
        shippingCost,
        totalCost,
        paymentDate
      })
      .then(res => {
        this.setState({loading: false});
        this.setState({isComplete: true});
        console.log('Email sent');
      })
      .then(() => {
        axios.post('https://janetsbakeryapi.herokuapp.com/', {
          id: id || '',
          name: this.props.name || '',
          phone: this.props.phone || '',
          email: this.props.email || '',
          instagram: this.props.instagram || '',
          cinnamonRollFour: this.getSpreadsheetValue("肉桂捲","boxOfFour"),
          cinnamonRollSix: this.getSpreadsheetValue("肉桂捲","boxOfSix"),
          creamCheese: this.getSpreadsheetValue("奶油乳酪抹醬","one"),
          originalSconeFour: this.getSpreadsheetValue("原味司康","boxOfFour"),
          originalSconeSix: this.getSpreadsheetValue("原味司康","boxOfSix"),
          teaSconeFour: this.getSpreadsheetValue("伯爵茶司康","boxOfFour"),
          teaSconeSix: this.getSpreadsheetValue("伯爵茶司康","boxOfSix"),
          mixedSconeFour: this.getSpreadsheetValue("綜合司康","boxOfFour"),
          mixedSconeSix: this.getSpreadsheetValue("綜合司康","boxOfSix"),
          lemonYogurtCake: this.getSpreadsheetValue("檸檬優格生乳酪蛋糕","one"),
          devonCream: this.getSpreadsheetValue("德文郡奶油","one"),
          pickupOption: this.props.pickupOption || '',
          shippingAddress: this.props.shippingAddress || '',
          shippingTime: this.getShippingTime(this.props.shippingTime) || '',
          recipientName: this.props.recipientName || '',
          recipientPhone: this.props.recipientPhone || '',
          shippingCost: this.props.shippingCost || 0,
          totalCost: this.props.totalCost || 0,
          comments: this.props.comments || ''
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      })
      // Handle errors here
      .catch(err => {
        this.setState({loading: false});
        this.setState({isFailed: true});
        console.error('Failed to send email. Error: ', err)
      });
  }

  render() {
    const { containerStyle, headerStyle, listItemStyle, buttonStyle } = styles;
    const { loading, isComplete, isFailed } = this.state;
    const date = new Date();

    let totalPrice = 0;
    let cart = this.props.cart;
    let cartItems = Object.keys(cart).map(function(key) {
      return [key, Object(cart[key])];
    });

    if(isComplete) {
      return (
        <Fade style={{'justifyContent': 'center', 'padding': 20, 'paddingBottom': 5}}>
          <h2 style={{'margin': 10, 'fontFamily': 'cwTexMing', 'fontSize': '1.3rem'}}>
            訂購成功！<br/>
            請至您的信箱中收取確認信件及匯款資訊！
          </h2>
        </Fade>
      );
    } else if(isFailed) {
      return (
        <Fade style={{'justifyContent': 'center', 'padding': 20, 'paddingBottom': 5}}>
          <h2 style={{'margin': 10, 'fontFamily': 'cwTexMing', 'fontSize': '1.3rem'}}>
            訂購失敗！<br/>
            請確認各欄位是否填寫正確並重試！
          </h2>
        </Fade>
      );
    } else {
      return (
        <Container id="confirmContainer" style={containerStyle} fluid>
          {/*Cart Table*/}
          <Fade bottom>
            <Header style={headerStyle}> 購物車 </Header>
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
                              <p style={{'flex': 5}}>4<span style={{'fontFamily': 'cwTexMing'}}>入組</span> <span style={{'fontFamily': 'Cormorant'}}>{`($${prices[item[0]]["boxOfFour"]})`}</span>： {`${item[1]["boxOfFour"]}`}</p>
                            </div>
                          }
                          {
                            (item[1]["boxOfSix"]>0) &&
                            <div style={{'display': 'flex'}}>
                              <p style={{'flex': 5}}>6<span style={{'fontFamily': 'cwTexMing'}}>入組</span> <span style={{'fontFamily': 'Cormorant'}}>{`($${prices[item[0]]["boxOfSix"]})`}</span> ： {`${item[1]["boxOfSix"]}`}</p>
                            </div>
                          }
                          {
                            (item[1]["one"]>0) &&
                            <div style={{'display': 'flex'}}>
                              <p style={{'flex': 5}}><span style={{'fontFamily': 'cwTexMing'}}>份數</span> <span style={{'fontFamily': 'Cormorant'}}>{`($${prices[item[0]]["one"]})`}</span> ： {`${item[1]["one"]}`}</p>
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
                  <Table.Cell style={{'fontFamily': 'Cormorant', 'textAlign': 'right'}}>
                    <p>
                      <span style={{'fontFamily': 'cwTexMing'}}>商品總計： </span> <span style={{'textAlign': 'right'}}> {`$${totalPrice}`} </span> <br/>
                      <span style={{'fontFamily': 'cwTexMing'}}>運費： </span> <span style={{'textAlign': 'right'}}> {`$${this.props.shippingCost}`} </span> <br/>
                      <span style={{'fontFamily': 'cwTexMing'}}>總額： </span> <span style={{'textAlign': 'right'}}> {`$${this.props.totalCost}`} </span> <br/>
                    </p>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Fade>

          {/*Customer Info*/}
          <Fade bottom>
            <div style={{'marginTop': 50, 'borderBottom': '2px solid rgba(34,36,38,.15)'}}>
              <Header style={headerStyle}> 購物人資訊 </Header>
              <List divided verticalAlign='middle'>
                <List.Item style={listItemStyle}>
                  <Icon size='big' name='user circle'/>
                  <List.Content>
                    {this.props.name}
                  </List.Content>
                </List.Item>
                <List.Item style={listItemStyle}>
                  <Icon size='big' name='mail'/>
                  <List.Content style={{'fontFamily': 'Cormorant'}}>
                    {this.props.email}
                  </List.Content>
                </List.Item>
                <List.Item style={listItemStyle}>
                  <Icon size='big' name='call'/>
                  <List.Content style={{'fontFamily': 'Cormorant', 'fontSize': 16}}>
                    {this.props.phone}
                  </List.Content>
                </List.Item>
              </List>
            </div>
          </Fade>

          {/*Shipping Info*/}
          {
            (this.props.shippingSelected) &&
            <Fade bottom>
              <div style={{'marginTop': 50, 'borderBottom': '2px solid rgba(34,36,38,.15)'}}>
                <Header style={headerStyle}> 收件資訊 </Header>
                <List divided verticalAlign='middle'>
                  <List.Item style={listItemStyle}>
                    <Icon size='big' name='user circle'/>
                    <List.Content>
                      {this.props.recipientName}
                    </List.Content>
                  </List.Item>
                  <List.Item style={listItemStyle}>
                    <Icon size='big' name='call'/>
                    <List.Content style={{'fontFamily': 'Cormorant', 'fontSize': 16}}>
                      {this.props.recipientPhone}
                    </List.Content>
                  </List.Item>
                  <List.Item style={listItemStyle}>
                    <Icon size='big' name='time'/>
                    <List.Content>
                      {shippingTimes[this.props.shippingTime]}
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </Fade>
          }

          {/*Pickup Info*/}
          {
            (this.props.pickupSelected) &&
            <Fade bottom>
              <div style={{'marginTop': 50, 'borderBottom': '2px solid rgba(34,36,38,.15)'}}>
                <Header style={headerStyle}> 取件資訊 </Header>
                <List divided verticalAlign='middle'>
                  <List.Item style={listItemStyle}>
                    <Icon size='big' name='map pin'/>
                    <List.Content style={{'textAlign': 'left'}}>
                      台南市永華路二段及南榕大道交叉口<br/>
                      (臺邦商旅、安麗公司大樓正對面，鐵鳥雕塑前)
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </Fade>
          }

          {/*Comments Section*/}
          <Fade bottom>
            <div style={{'marginTop': 50, 'borderBottom': '2px solid rgba(34,36,38,.15)'}}>
              <Header style={headerStyle}> 備註 </Header>
              <List divided verticalAlign='middle'>
                <List.Item style={listItemStyle}>
                  <Icon size='big' name='sticky note'/>
                  <List.Content>
                    {this.props.comments}
                  </List.Content>
                </List.Item>
              </List>
            </div>
          </Fade>

          <Fade bottom>
            <Button style={buttonStyle} onClick={this.handleSubmit} loading={loading}> 訂購 </Button>
          </Fade>
          <Moment ref="paymentDate" format="YYYY/MM/DD" add={{ days: 5 }} style={{'display': 'block', 'color': 'transparent'}}>{date}</Moment>
        </Container>
      );
    }
  }
}

export default Confirm;
