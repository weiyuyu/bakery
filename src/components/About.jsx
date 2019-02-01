import React from 'react';
import { Container, Header, Image, Icon, List, Divider } from 'semantic-ui-react';
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
    'textAlign': 'left',
    'display': 'flex'
  }
};

const About = () => {
  const { containerStyle, mapStyle, headerStyle } = styles;
  return (
    <Container style={{'marginTop': 40, 'marginBottom': 100}}>
      <Zoom>
        <Header style={{'fontSize': 25, 'marginTop': 40, 'marginBottom': 20, 'fontFamily': 'cwTexMing', 'textAlign': 'left', 'marginLeft': 15}}>
          商品取貨方式
        </Header>
        <Divider />
      </Zoom>
      <Container style={containerStyle}>
        <Zoom style={{'textAlign': 'left'}}>
          <Header style={headerStyle}> <span style={{'fontFamily': 'Cormorant', 'fontSize': 25}}> 1.</span> 宅配：配送至全台 </Header>
          <Header style={headerStyle}> <Icon name='shipping' size='small'/>  運費計算（不限品項） </Header>
          <List style={{'margin': 30, 'textAlign': 'left'}}  bulleted>
            <List.Item style={{'fontFamily': 'cwTexMing', 'fontSize': '1.28571429em'}} id="test">
              <List.Icon name='box' />
              <List.Content> 一盒 <span style={{'fontFamily': 'Cormorant'}}> $150 </span> </List.Content>
            </List.Item>
            <List.Item style={{'fontFamily': 'cwTexMing', 'fontSize': '1.28571429em'}}>
              <List.Icon name='boxes' />
              <List.Content> 二盒~六盒 <span style={{'fontFamily': 'Cormorant'}}> $220 </span> (具體數量如下) </List.Content>
              <List.List>
                <List.Item> <span style={{'fontFamily': 'Cormorant'}}>6</span>入*<span style={{'fontFamily': 'Cormorant'}}>4</span>盒 </List.Item>
                <List.Item>
                  <span style={{'fontFamily': 'Cormorant'}}>6</span>入*<span style={{'fontFamily': 'Cormorant'}}>3</span>盒 +<span style={{'fontFamily': 'Cormorant'}}>4</span>入*<span style={{'fontFamily': 'Cormorant'}}>1</span>盒
                </List.Item>
                <List.Item>
                  <span style={{'fontFamily': 'Cormorant'}}>6</span>入*<span style={{'fontFamily': 'Cormorant'}}>2</span>盒 + <span style={{'fontFamily': 'Cormorant'}}>4</span>入*<span style={{'fontFamily': 'Cormorant'}}>3</span>盒
                </List.Item>
                <List.Item>
                  <span style={{'fontFamily': 'Cormorant'}}>6</span>入*<span style={{'fontFamily': 'Cormorant'}}>1</span>盒 + <span style={{'fontFamily': 'Cormorant'}}>4</span>入*<span style={{'fontFamily': 'Cormorant'}}>4</span>盒
                </List.Item>
                <List.Item> <span style={{'fontFamily': 'Cormorant'}}>4</span>入*<span style={{'fontFamily': 'Cormorant'}}>6</span>盒 </List.Item>
                <List.Item> 超過上述組合者，運費將重新起算！ </List.Item>
              </List.List>
            </List.Item>
          </List>
        </Zoom>
      </Container>
      <Container style={containerStyle}>
        <Zoom>
          <Header style={headerStyle}> <span style={{'fontFamily': 'Cormorant', 'fontSize': 25}}> 2. </span> 自取：僅限台南市 </Header>
          <Header style={headerStyle}> <Icon name='time' size='small'/> 時間：會安排在週六上午 <span style={{'fontFamily': 'Cormorant', 'fontSize': 20}}> 11:00 - 11:05 </span> </Header>
          <Header style={headerStyle}> <Icon name='map pin' /> 取貨地點 : </Header>
        </Zoom>
        <Zoom>
          <Header style={{'marginBottom': 20, 'fontFamily': 'cwTexMing', 'textAlign': 'left', 'display': 'flex', 'marginLeft': 10, 'fontSize': 16}}>
            台南市永華路二段及南榕大道交叉口<br/>
            (臺邦商旅、安麗公司大樓正對面，鐵鳥雕塑前)
          </Header>
          <Image src={pickupLocation} style={mapStyle} rounded bordered/>
          <Image src={pickupLocationStreetView} style={mapStyle} rounded bordered/>
        </Zoom>
      </Container>
      <div id='tr-footer'></div>
    </Container>
  )
};

export default About;
