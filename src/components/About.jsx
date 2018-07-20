import React from 'react';
import { Container, Header, Image, Icon } from 'semantic-ui-react';
import ShippingTable from './ShippingTable';
import Zoom from 'react-reveal/Zoom';
import pickupLocation from './../img/pickup_location.png';
import pickupLocationStreetView from './../img/pickup_location_streetview.png';

const styles = {
  containerStyle: {
    'marginTop': 40
  },
  mapStyle: {
    'width': '100%',
    'marginTop': 20,
    'marginBottom': 50
  },
  headerStyle: {
    'marginTop': 20,
    'marginBottom': 20,
    'textAlign': 'center'
  }
};

const About = () => {
  const { containerStyle, mapStyle, headerStyle } = styles;
  return (
    <Container style={containerStyle}>
      <Container style={containerStyle}>
        <Zoom>
          <Header style={headerStyle}>
            <Icon name='shipping fast' />
            運費計算
          </Header>
        </Zoom>
        <Zoom>
          <ShippingTable/>
        </Zoom>
      </Container>
      <Container style={containerStyle}>
        <Zoom>
          <Header style={headerStyle}>
            <Icon name='shopping bag' />
            取貨地點
          </Header>
        </Zoom>
        <Zoom>
          <Header size='small' style={headerStyle}>
            臺南市永華路二段及南榕大道交叉口<br/>
            (臺邦商旅、安麗公司大樓正對面，鐵鳥雕塑前)
          </Header>
          <Image src={pickupLocation} style={mapStyle} rounded bordered/>
          <Image src={pickupLocationStreetView} style={mapStyle} rounded bordered/>
        </Zoom>
      </Container>
    </Container>
  )
};

export default About;
