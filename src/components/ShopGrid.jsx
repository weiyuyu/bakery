import React from 'react';
import { Card } from 'semantic-ui-react';
import ShopItem from './ShopItem';

const styles = {
  containerStyle: {
    'margin': 'auto',
    'justifyContent': 'center'
  }
};

export default class ShopGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    };
  }

  render() {
    const { containerStyle } = styles;
    return (
      <Card.Group style={containerStyle}>
        <ShopItem itemName="itemName1" itemType="itemType1" itemDescription="itemDescription1"/>
        <ShopItem itemName="itemName2" itemType="itemType2" itemDescription="itemDescription2"/>
        <ShopItem itemName="itemName3" itemType="itemType3" itemDescription="itemDescription3"/>
      </Card.Group>
    );
  }
}
