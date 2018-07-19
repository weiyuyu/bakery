import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

const Home = () => {
  const { containerStyle, gridStyle } = styles;
  return (
    <Container style={containerStyle}>
      <Grid columns={2} divided style={gridStyle}>
        <Grid.Row>
          <Grid.Column>
            <ReactPlaceholder showLoadingAnimation color='#ffaeae' type='media' rows={7} ready={false} />
          </Grid.Column>
          <Grid.Column>
            <ReactPlaceholder showLoadingAnimation color='#ffaeae' type='media' rows={7} ready={false} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

const styles = {
  containerStyle: {
    'padding': 20
  },
  gridStyle: {
    marginTop: 50
  }
}

export default Home;
