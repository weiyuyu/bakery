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

const pickupTimeOptions = [
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
      loading: false,
      success: false,
      pickupSelected: false,
      shippingSelected: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
  }

  handleNameInput = (e) => {
    this.setState({name: e.target.value});
  }

  handleEmailInput = (e) => {
    this.setState({email: e.target.value});
  }

  handlePickupDropdownChange = (e, selection) => {
    switch(selection.value) {
    case 'pickup':
      this.setState({pickupSelected: true});
      this.setState({shippingSelected: false});
      break;
    case 'shipping':
      this.setState({pickupSelected: false});
      this.setState({shippingSelected: true});
      break;
    default:
      break;
    }
  }

  handleSubmit = () => {
    if(this.state.name && this.state.email) {
      this.setState({loading: true});
    }
  };

  render() {
    const { loading, success, error, pickupSelected, shippingSelected } = this.state;
    const { formStyle, messageStyle, buttonStyle, formGroupStyle } = styles;
    return (
      <Form loading={loading} success={success} error={error} style={formStyle}>
        <Form.Group widths='equal' style={formGroupStyle}>
          <Form.Input required label='姓名' placeholder='劉人語' onChange={this.handleNameInput}/>
          <Form.Input required label='Email' placeholder='janetsbakery@gmail.com' onChange={this.handleEmailInput}/>
          <Form.Dropdown id="pickupDropdown" required label='取貨方式' placeholder='取貨方式' options={pickupOptions} onChange={this.handlePickupDropdownChange}/>
        </Form.Group>
        {
          (shippingSelected) &&
          <Form.Group widths='equal' style={formGroupStyle}>
            <Form.Input required label='聯絡電話' placeholder='0912-345-678' onChange={this.handlePhoneInput}/>
            <Form.Dropdown id="pickupTimeDropdown" required label='宅配時間' placeholder='宅配時間' options={pickupTimeOptions} onChange={this.handlePickupTimeDropdownChange}/>
          </Form.Group>
        }
        <Button style={buttonStyle} onClick={this.handleSubmit}>Submit</Button>
        <Message
          success
          header='Order Completed'
          content="We've placed your order! Check your inbox for a confirmation email."
          style={messageStyle}
        />
      </Form>
    );
  }
};
