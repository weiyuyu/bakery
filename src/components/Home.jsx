import React from 'react';
import { Container, Button, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import logo from './../img/肉桂捲/774AD308-AAF4-41B3-B707-81315258E4D1.JPG';
import uniqid from 'uniqid';

const styles = {
  containerStyle: {
    margin: 50
  },
  imageStyle: {
    'display': 'block',
    'margin': 'auto',
    'width': '80%',
    'height': 'auto'
  },
  buttonStyle: {
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'marginTop': 50,
    'fontFamily': 'Cormorant'
  }
}

export default class Home extends React.Component {
  render() {
    let id = uniqid().slice(0,5);
    console.log('[ID]:' + id);
    const { containerStyle, imageStyle, buttonStyle } = styles;
    return (
      <Container fluid>
        <Container id="imageContainer" style={containerStyle}>
          <Fade left>
            <Image id="landingImage" src={logo} style={imageStyle} size='large' />
            <Button
              style={buttonStyle}
              size='large'
              as={Link}
              to='/order'
            >
              Order Now
            </Button>
          </Fade>
        </Container>
        <Container text>
          <div style={{'marginLeft': 'auto', 'marginRight': 'auto'}}>
            <Fade right>
              <div style={{'textAlign': 'center'}}>
                <div style={{'display': 'inline-block', 'textAlign': 'left'}}>
                  <h2 style={{'fontFamily': 'cwTexMing', 'fontSize': 20}}>
                    <span style={{'fontFamily': 'Cormorant', 'fontSize': 25}}> Janet’s Bakery </span>  <br/> 成立於<span style={{'fontFamily': 'Cormorant'}}>2018</span>年
                  </h2>
                  <p style={{'fontSize': 15}}> － </p>
                  <h3 style={{'fontWeight': 400, 'fontFamily': 'cwTexMing'}}>
                    用為女兒烘焙的雙手<br/>
                    秉持著初衷與熱情<br/>
                    嚴選最天然、頂級的素材<br/>
                    呈現出最健康的美味
                  </h3>
                </div>
              </div>
            </Fade>
          </div>
        </Container>
        <Container text style={{'marginTop': 100, 'marginBottom': 100}}>
          <Header size='medium' as='a' href='mailto:janetsbakerytw@gmail.com' style={{'fontWeight': 400, 'fontFamily': 'Cormorant', 'fontSize': 15}}> Contact Us </Header>
          <p style={{'fontSize': 15}} />
          <Header size='medium' as={Link} to='/about' style={{'fontWeight': 400, 'fontFamily': 'Cormorant', 'fontSize': 15, 'marginBottom': 30}}> Shipping </Header>
        </Container>
        <div id='tr-footer'></div>
      </Container>
    );
  }
};
