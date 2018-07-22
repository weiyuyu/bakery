import React from 'react';
import { Container, Grid, Image, Divider } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';
import logo from './../img/伯爵茶司康/CE8AFA52-06CB-403C-A8C9-07DCFBFD2FCC.JPG';

const styles = {
  containerStyle: {
    'padding': 0,
    'display': 'inlineFlex',
    'justifyContent': 'center'
  },
  gridStyle: {
    marginTop: 30
  },
  introStyle: {
    'margin': 'auto',
    'padding': 20,
    'textAlign' : 'left',
    'height': '50%',
    'width': 'auto'
  },
  paragraphStyle: {
    'fontWeight': 500,
  },
  imageStyle: {
    'display': 'block',
    'margin': 'auto',
    'border': '20px rgba(215,225,227,0.3) solid'
  }
}

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }

  render() {
    const { containerStyle, gridStyle, introStyle, paragraphStyle, imageStyle } = styles;
    return (
      <Container fluid>
        <Grid stackable columns={2} style={gridStyle}>
          <Grid.Row>
            <Grid.Column style={containerStyle}>
              <Container>
                <Fade left>
                  <Image src={logo} style={imageStyle} size='medium' />
                </Fade>
              </Container>
            </Grid.Column>
            <Divider />
            <Grid.Column style={containerStyle}>
              <Container text style={introStyle}>
                <Fade left>
                  <h1>
                    Janet’s Bakery <br/> 成立於2018年
                  </h1>
                  <p style={{'fontSize': 25}}> / </p>
                </Fade>
                <Fade right>
                  <div>
                    <h2 style={paragraphStyle}>
                      用為女兒烘焙的雙手<br/>
                      秉持著初衷與熱情<br/>
                      嚴選最天然、頂級的素材<br/>
                      呈現出最健康的美味
                    </h2>
                  </div>
                </Fade>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
};
