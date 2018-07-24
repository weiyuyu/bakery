import React from 'react';
import { Container, Header, Image, Icon, List } from 'semantic-ui-react';
import ShippingTable from './ShippingTable';
import Zoom from 'react-reveal/Zoom';
import pickupLocation from './../img/pickup_location.png';
import pickupLocationStreetView from './../img/pickup_location_streetview.png';

const styles = {
  containerStyle: {
    'marginTop': 40,
  },
  mapStyle: {
    'width': '100%',
    'marginTop': 20,
    'marginBottom': 50
  },
  headerStyle: {
    'marginBottom': 20,
    'fontFamily': 'cwTexMing',
    'textAlign': 'left'
  }
};

const About = () => {
  const { containerStyle, mapStyle, headerStyle } = styles;
  return (
    <Container style={containerStyle}>
      <Zoom>
        <Header style={{'fontSize': 25, 'marginTop': 20, 'marginBottom': 20, 'fontFamily': 'cwTexMing', 'textAlign': 'left'}}>
          商品取貨方式
        </Header>
      </Zoom>
      <Container style={containerStyle}>
        <Zoom style={{'textAlign': 'left'}}>
          <Header style={headerStyle}> 1. 宅配：配送至全台 </Header>
          <Header style={headerStyle}> <Icon name='shipping' size='small'/>  運費計算（不限品項） </Header>
          <List style={{'margin': 30, 'textAlign': 'left'}}  bulleted>
            <List.Item>
              <List.Icon name='box' />
              <List.Content> 一盒 $150 </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='boxes' />
              <List.Content> 二盒~六盒 $220 (具體數量如下) </List.Content>
              <List.List>
                <List.Item> 6入*4盒｜6入*3盒+ 4入*1盒｜6入*2盒 + 4入*3盒｜6入*1盒 + 4入*4盒｜4入*6盒 </List.Item>
                <List.Item> 超過上述組合者，運費會另外重新起算！ </List.Item>
              </List.List>
            </List.Item>
          </List>
        </Zoom>
      </Container>
      <Container style={containerStyle}>
        <Zoom>
          <Header style={headerStyle}> 2. 自取：僅限臺南市 </Header>
          <Header style={headerStyle}> <Icon name='time' size='small'/> 時間：會安排在週六下午 1:00-1:05 </Header>
          <Header style={headerStyle}> <Icon name='map pin' /> 取貨地點 </Header>
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
