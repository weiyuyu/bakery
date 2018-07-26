import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import Moment from 'react-moment';

const styles = {
  formStyle: {
    'margin': 50,
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
    text: '自取｜Pickup (限台南 / Tainan only)',
    value: 'pickup'
  },
  {
    text: '宅配｜Delivery',
    value: 'shipping'
  }
];

const shippingTimeOptions = [
  {
    text: '早上 (13:00前)｜Morning',
    value: 'morning'
  },
  {
    text: '下午 (14:00 — 18:00)｜Afternoon',
    value: 'afternoon'
  },
  {
    text: '不指定｜No Preference',
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


export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phone: null,
      comments: '無',
      shippingTime: null,
      loading: false,
      success: false,
      error: false,
      shippingSelected: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
  }

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

  handlePickupDropdownChange = (e, selection) => {
    switch(selection.value) {
    case 'pickup':
      this.setState({shippingSelected: false});
      break;
    case 'shipping':
      this.setState({shippingSelected: true});
      break;
    default:
      break;
    }
  };

  handleShippingTimeDropdownChange = (e, selection) => {
    this.setState({shippingTime: selection.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let formCompleted = true;
    if(!this.state.name || !this.state.email || !this.state.phone) {
      formCompleted = false;
    }
    if(this.state.shippingSelected === null && this.state.pickupSelected === null) {
      formCompleted = false
    }

    if(this.state.shippingSelected === true && this.state.shippingTime === null) {
      formCompleted = false;
    }

    if(formCompleted) {
      this.setState({error: false});
      this.setState({loading: true});
      this.sendEmail('confirmation_email', this.state.email, this.getDetails(), this.state.comments, this.state.phone, this.state.name, this.getCostString(), this.getShippingCost(), this.getTotalCost(this.getShippingCost()));
    } else {
      this.setState({error: true});
    }
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

  getTotalCost(shippingCost) {
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

    let totalCost = totalItemCost + shippingCost;
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

  sendEmail(templateId, email, details, comments, phone, customerName, costString, shippingCost, totalCost) {
    let paymentDate = this.refs.paymentDate.state.content;
    window.emailjs.send(
      'default_service',
      templateId,
      {
        email,
        details,
        comments,
        phone,
        customerName,
        costString,
        shippingCost,
        totalCost,
        paymentDate
      })
      .then(res => {
        this.setState({loading: false});
        this.setState({success: true});
        console.log('Email sent');
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send email. Error: ', err))
  }

  render() {
    const date = new Date();
    const { loading, success, error, shippingSelected } = this.state;
    const { formStyle, messageStyle, buttonStyle, formGroupStyle } = styles;
    return (
      <Form loading={loading} success={success} error={error} style={formStyle}>
        <Form.Group widths='equal' style={formGroupStyle}>
          <Form.Input required label='姓名' placeholder='劉人語' onChange={this.handleNameInput}/>
          <Form.Input required label='Email' placeholder='janetsbakery@gmail.com' onChange={this.handleEmailInput}/>
          <Form.Dropdown id="pickupDropdown" required label='取貨方式' placeholder='取貨方式' options={pickupOptions} onChange={this.handlePickupDropdownChange}/>
        </Form.Group>
        <Form.Group widths='equal' style={formGroupStyle}>
          <Form.Input required label='聯絡電話' placeholder='0912-345-678' onChange={this.handlePhoneInput}/>
          {
            (shippingSelected) && <Form.Dropdown id="shippingTimeDropdown" required label='宅配時間' placeholder='宅配時間' options={shippingTimeOptions} onChange={this.handleShippingTimeDropdownChange}/>
          }
          <Form.Input label='備註/其他' placeholder="想對Janet's Bakery說些什麼？" onChange={this.handleCommentsInput}/>
        </Form.Group>
        <Button style={buttonStyle} onClick={this.handleSubmit}>Submit</Button>
        <Moment ref="paymentDate" format="YYYY/MM/DD" add={{ days: 5 }} style={{'display': 'block', 'color': 'transparent'}}>{date}</Moment>
        <Message
          success
          header='Order Completed'
          content="We've placed your order! Check your inbox for a confirmation email."
          style={messageStyle}
        />
        <Message
          error
          header='Fields Incomplete'
          content="Please fill in all required fields."
          style={messageStyle}
        />
      </Form>
    );
  }
};
