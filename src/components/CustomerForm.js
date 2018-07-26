import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

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

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phone: null,
      comments: null,
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
      this.sendEmail('confirmation_email', this.state.email, this.state.name, '$800*1 + $350*1', 220, 1370);
    } else {
      this.setState({error: true});
    }
  };

  sendEmail(templateId, email, customerName, costString, shippingCost, totalCost) {
    window.emailjs.send(
      'default_service',
      templateId,
      {
        email,
        customerName,
        costString,
        shippingCost,
        totalCost
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
