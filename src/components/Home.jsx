import React from 'react';
import { Container, Button, Image, Header, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import logo from './../img/伯爵茶司康/CE8AFA52-06CB-403C-A8C9-07DCFBFD2FCC.JPG';

const styles = {
  containerStyle: {
    margin: 50
  },
  imageStyle: {
    'display': 'block',
    'margin': 'auto',
    'border': '20px rgba(215,225,227,0.3) solid'
  },
  buttonStyle: {
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'marginTop': 50
  }
}

export default class Home extends React.Component {

  render() {
    const { containerStyle, imageStyle, buttonStyle } = styles;
    return (
      <Container fluid>
        <Container style={containerStyle}>
          <Fade left>
            <Image src={logo} style={imageStyle} size='large' />
            <Button
              style={buttonStyle}
              as={Link}
              to='/order'
            >
              Order Now
            </Button>
          </Fade>
        </Container>
        <Container text>
          <div style={{'display': 'block', 'marginLeft': 'auto', 'marginRight': 'auto'}}>
            <Fade left>
              <h1>
                Janet’s Bakery <br/> 成立於2018年
              </h1>
              <p style={{'fontSize': 25}}> / </p>
            </Fade>
            <Fade right>
              <div>
                <h2 style={{'fontWeight': 400}}>
                  用為女兒烘焙的雙手<br/>
                  秉持著初衷與熱情<br/>
                  嚴選最天然、頂級的素材<br/>
                  呈現出最健康的美味
                </h2>
              </div>
            </Fade>
          </div>
        </Container>
        <Container text style={containerStyle}>
          <Header size='medium' as='a' href='mailto:janetsbakerytw@gmail.com' style={{'fontWeight': 400}}> Contact Us </Header>
          <Divider hidden />
          <Header size='medium' as={Link} to='/about' style={{'fontWeight': 400}}> Shipping </Header>
        </Container>
      </Container>
    );
  }
};
