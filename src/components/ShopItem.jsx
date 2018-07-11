import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import logo from './../img/banner_lg.png';

const styles = {
  thumbnailStyle: {
    'marginBottom': 20
  }
};

export default class ShopItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  render() {
    const { thumbnailStyle } = styles;
    return (
      <Card>
        <Card.Content>
          <Image src={logo} alt="Placeholder" rounded style={thumbnailStyle}/>
          <Card.Header> {this.props.itemName} </Card.Header>
          <Card.Meta> {this.props.itemType} </Card.Meta>
          <Card.Description>
            {this.props.itemDescription}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button color='pink'>
              View
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
