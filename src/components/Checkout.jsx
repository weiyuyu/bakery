import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import Moment from 'react-moment';
import Fade from 'react-reveal/Fade';
import Confirm from './Confirm';

const styles = {
  formStyle: {
    'margin': 30,
    'textAlign': 'center'
  },
  messageStyle: {
    'margin': 50
  },
  buttonStyle: {
    'margin': 20
  },
  englishStyle: {
    'fontFamily': 'Cormorant'
  },
  chineseStyle: {
    'fontFamily': 'cwTexMing'
  },
  formGroupStyle: {
    'margin': 10,
    'paddingTop': 30,
    'paddingBottom': 30,
    'paddingLeft': 10,
    'paddingRight': 10,
    'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  }
};

const pickupOptions = [
  {
    text: '自取 (限台南)',
    value: 'pickup'
  },
  {
    text: '宅配',
    value: 'shipping'
  }
];

const shippingTimeOptions = [
  {
    text: '早上 (13:00前)',
    value: 'morning'
  },
  {
    text: '下午 (14:00 - 18:00)',
    value: 'afternoon'
  },
  {
    text: '不指定',
    value: 'nopreference'
  }
];

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
};


export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConfirm: false,
      name: null,
      email: null,
      phone: null,
      comments: '無',
      shippingTime: null,
      shippingAddress: null,
      pickupSelected: null,
      shippingSelected: null,
      recipientPhone: null,
      recipientName: null,
      loading: false,
      success: false,
      error: false
    }
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
  }

  handleConfirmClick = (e) => {
    e.preventDefault();
    let formCompleted = true;
    if(!this.state.name || !this.state.email || !this.state.phone) {
      formCompleted = false;
    }
    if(this.state.shippingSelected === null && this.state.pickupSelected === null) {
      formCompleted = false
    }

    if(this.state.shippingSelected === true ) {
      if(!this.state.shippingTime || !this.state.shippingAddress || !this.state.recipientName || !this.state.recipientPhone) {
        formCompleted = false;
      }
    }

    if(formCompleted){
      this.setState({loading: true});
      this.timeout = setTimeout(() => {
        this.setState({loading: false});
        this.setState({isConfirm: true});
      }, 1000);
    } else{
      this.setState({error: true});
      this.timeout = setTimeout(() => {
        this.setState({error: false});
      }, 3000);
    }
  };

  handleNameInput = (e) => {
    this.setState({name: e.target.value});
  };

  handleEmailInput = (e) => {
    this.setState({email: e.target.value});
  };

  handlePhoneInput = (e) => {
    this.setState({phone: e.target.value});
  };

  handleCommentsInput = (e) => {
    this.setState({comments: e.target.value});
  };

  handleShippingAddressChange = (e) => {
    this.setState({shippingAddress: e.target.value});
  };

  handleRecipientNameChange = (e) => {
    this.setState({recipientName: e.target.value});
  };

  handleRecipientPhoneChange = (e) => {
    this.setState({recipientPhone: e.target.value});
  };

  handlePickupDropdownChange = (e, selection) => {
    switch(selection.value) {
    case 'pickup':
      this.setState({shippingSelected: false});
      this.setState({pickupSelected: true});
      break;
    case 'shipping':
      this.setState({shippingSelected: true});
      this.setState({pickupSelected: false});
      break;
    default:
      break;
    }
  };

  handleShippingTimeDropdownChange = (e, selection) => {
    this.setState({shippingTime: selection.value});
  };

  getCostString() {
    let costString = '';
    let cart = this.props.cart;
    let cartItems = Object.keys(cart).map(function(key) {
      return [key, Object(cart[key])];
    });
    cartItems
    .filter(item => {
      let willCalculate = false;
      let quantities = item[1];
      if(quantities["boxOfFour"] > 0 || quantities["boxOfSix"] || quantities["one"] > 0) {
        willCalculate = true;
      }
      return willCalculate;
    }).forEach((item) => {
      if(item[1]["boxOfFour"]) {
        costString += `$${prices[item[0]]["boxOfFour"]}*${item[1]["boxOfFour"]} + `;
      }
      if(item[1]["boxOfSix"]) {
        costString += `$${prices[item[0]]["boxOfSix"]}*${item[1]["boxOfSix"]} + `;
      }
      if(item[1]["one"]) {
        costString += `$${prices[item[0]]["one"]}*${item[1]["one"]} + `;
      }
    });
    return costString;
  }

  getShippingCost() {
    let shippingCost = 0;
    if(this.state.pickupSelected) {
      return 0;
    }
    let boxesOfFour = 0;
    let boxesOfSix = 0;
    let count = 0;
    let cart = this.props.cart;
    let cartItems = Object.keys(cart).map(function(key) {
      return [key, Object(cart[key])];
    });
    cartItems
    .filter(item => {
      let willCalculate = false;
      let quantities = item[1];
      if(quantities["boxOfFour"] > 0 || quantities["boxOfSix"] || quantities["one"] > 0) {
        willCalculate = true;
      }
      return willCalculate;
    }).forEach((item) => {
      if(item[1]["boxOfFour"]) {
        boxesOfFour += item[1]["boxOfFour"];
      }
      if(item[1]["boxOfSix"]) {
        boxesOfSix += item[1]["boxOfSix"];
      }
    });

    if(boxesOfFour + boxesOfSix === 1) {
      shippingCost = 150;
    } else {
      while(boxesOfSix !== 0 || boxesOfFour !== 0) {
        if(boxesOfSix >= 4) {
          boxesOfSix -= 4;
          count += 1;
        } else if (boxesOfSix === 3) {
          boxesOfSix -= 3;
          if(boxesOfFour <= 1) {
            boxesOfFour = 0;
          } else {
            boxesOfFour -= 1;
          }
          count += 1;
        } else if(boxesOfSix === 2) {
          boxesOfSix -= 2;
          if(boxesOfFour <= 3) {
            boxesOfFour = 0;
          } else {
            boxesOfFour -= 3;
          }
          count += 1;
        } else if(boxesOfSix === 1) {
          boxesOfSix -= 1;
          if(boxesOfFour <= 4) {
            boxesOfFour = 0;
          } else {
            boxesOfFour -= 4;
          }
          count += 1;
        } else if(boxesOfSix === 0) {
          if(boxesOfFour <= 6) {
            boxesOfFour = 0;
          } else {
            boxesOfFour -= 6;
          }
          count += 1;
        }
      }
      shippingCost = count * 220;
    }

    return shippingCost;
  }

  getTotalCost() {
    let totalItemCost = 0;
    let cart = this.props.cart;
    let cartItems = Object.keys(cart).map(function(key) {
      return [key, Object(cart[key])];
    });
    cartItems
    .filter(item => {
      let willCalculate = false;
      let quantities = item[1];
      if(quantities["boxOfFour"] > 0 || quantities["boxOfSix"] || quantities["one"] > 0) {
        willCalculate = true;
      }
      return willCalculate;
    }).forEach((item) => {
      if(item[1]["boxOfFour"]) {
        totalItemCost += prices[item[0]]["boxOfFour"] * item[1]["boxOfFour"];
      }
      if(item[1]["boxOfSix"]) {
        totalItemCost += prices[item[0]]["boxOfSix"] * item[1]["boxOfSix"];
      }
      if(item[1]["one"]) {
        totalItemCost += prices[item[0]]["one"] * item[1]["one"];
      }
    });

    let totalCost = totalItemCost + this.getShippingCost();
    return totalCost;
  }

  getDetails() {
    let details = '';
    let cart = this.props.cart;
    let cartItems = Object.keys(cart).map(function(key) {
      return [key, Object(cart[key])];
    });
    cartItems
    .filter(item => {
      let willCalculate = false;
      let quantities = item[1];
      if(quantities["boxOfFour"] > 0 || quantities["boxOfSix"] || quantities["one"] > 0) {
        willCalculate = true;
      }
      return willCalculate;
    }).forEach((item) => {
      if(item[1]["boxOfFour"]) {
        details += `${item[0]}(4入組)： ${item[1]["boxOfFour"]}, `;
      }
      if(item[1]["boxOfSix"]) {
        details += `${item[0]}(6入組)： ${item[1]["boxOfSix"]}, `;
      }
      if(item[1]["one"]) {
        details += `${item[0]}： ${item[1]["one"]}, `;
      }
    });

    details = details.slice(0,-2);
    return details;
  }

  render() {
    console.log(this.getShippingCost());
    console.log(this.getTotalCost());
    const date = new Date();
    const { loading, success, error, shippingSelected, pickupSelected, isConfirm } = this.state;
    const { formStyle, messageStyle, buttonStyle, formGroupStyle } = styles;

    if(isConfirm) {
      return (
        <Confirm
          cart={this.props.cart}
          shippingCost={this.getShippingCost()}
          totalCost={this.getTotalCost()}
          shippingSelected={this.state.shippingSelected}
          pickupSelected={this.state.pickupSelected}
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
          shippingTime={this.state.shippingTime}
          recipientName={this.state.recipientName}
          recipientPhone={this.state.recipientPhone}
          comments={this.state.comments}
          handleSubmit={this.handleSubmit}
          success={this.state.success}
          costString={this.getCostString()}
          details={this.getDetails()}
        />
      );
    } else {
      return (
        <Fade bottom>
          <Form loading={loading} success={success} error={error} style={formStyle}>
            <Form.Group widths='equal' style={formGroupStyle}>
              <Form.Input required label='姓名' placeholder='劉人語' onChange={this.handleNameInput}/>
              <Form.Input required label='聯絡電話' placeholder='0912-345-678' onChange={this.handlePhoneInput}/>
              <Form.Input required label='Email' placeholder='janetsbakerytw@gmail.com' onChange={this.handleEmailInput}/>
              <Form.Dropdown id="pickupDropdown" required label='取貨方式' placeholder='取貨方式' options={pickupOptions} onChange={this.handlePickupDropdownChange}/>
            </Form.Group>
            <Form.Group widths='equal' style={formGroupStyle}>
              {
                (shippingSelected) && <Form.Input required label='收件地址' placeholder='臺北市大安區信義路5段999號10F' onChange={this.handleShippingAddressChange}/>
              }
              {
                (shippingSelected) && <Form.Input required label='收件人姓名' placeholder='劉人語' onChange={this.handleRecipientNameChange}/>
              }
              {
                (shippingSelected) && <Form.Input required label='收件人電話' placeholder='0912-345-678' onChange={this.handleRecipientPhoneChange}/>
              }
              {
                (shippingSelected) && <Form.Dropdown id="shippingTimeDropdown" required label='收件時間' placeholder='收件時間' options={shippingTimeOptions} onChange={this.handleShippingTimeDropdownChange}/>
              }
              {
                (pickupSelected) &&
                <div id="pickupLocationInstructions" style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%'}}>
                  <h5 style={{'marginLeft': 'auto', 'marginRight': 'auto', 'marginTop': 'auto', 'marginBottom': 'auto', 'flex': 1}}> 取貨地點請見「About」</h5>
                </div>
              }
              <Form.Input label='備註/其他' placeholder="想對Janet's Bakery說些什麼？" onChange={this.handleCommentsInput}/>
            </Form.Group>
            <Button style={buttonStyle} onClick={this.handleConfirmClick}> Confirm </Button>
            <Moment ref="paymentDate" format="YYYY/MM/DD" add={{ days: 5 }} style={{'display': 'block', 'color': 'transparent'}}>{date}</Moment>
            <Message
              error
              header='Fields Incomplete'
              content="Please fill in all required fields."
              style={messageStyle}
            />
          </Form>
        </Fade>
      );
    }
  }
};
