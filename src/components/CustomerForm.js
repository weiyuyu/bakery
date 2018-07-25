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
  }
};

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      success: false,
      error: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    this.setState({loading: true});
  };

  render() {
    const { loading, success, error } = this.state;
    const { formStyle, messageStyle, buttonStyle } = styles;
    return (
      <Form loading={loading} success={success} error={error} style={formStyle}>
        <Form.Group widths='equal'>
          <Form.Input label='姓名' placeholder='劉人語' />
          <Form.Input label='Email' placeholder='janetsbakery@gmail.com' />
        </Form.Group>
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
