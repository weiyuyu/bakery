import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import banner from './../img/logo/logo_pink_lg.png';

const Home = () => {
  const { bannerStyle } = styles;
  return (
    <Container>
      <Image src={banner} style={bannerStyle}/>
      <h1>Welcome to Janet's Bakery</h1>
    </Container>
  );
};

const styles = {
  bannerStyle: {
    'marginTop': 20,
    'marginBottom': 20
  }
};

export default Home;
