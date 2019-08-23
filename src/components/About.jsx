import React from "react";
import { Container, Header, Icon, List, Divider } from "semantic-ui-react";
import Zoom from "react-reveal/Zoom";

const styles = {
  containerStyle: {
    marginTop: 40
  },
  headerStyle: {
    marginBottom: 20,
    fontFamily: "cwTexMing",
    textAlign: "left",
    display: "flex"
  }
};

const About = () => {
  const { containerStyle, headerStyle } = styles;
  return (
    <Container style={{ marginTop: 40, marginBottom: 100 }}>
      <Zoom>
        <Header
          style={{
            fontSize: 25,
            marginTop: 40,
            marginBottom: 20,
            fontFamily: "cwTexMing",
            textAlign: "left",
            marginLeft: 15
          }}
        >
          商品取貨方式
        </Header>
        <Divider />
      </Zoom>
      <Container style={containerStyle}>
        <Zoom style={{ textAlign: "left" }}>
          <Header style={headerStyle}>
            {" "}
            <span style={{ fontFamily: "Cormorant", fontSize: 25 }}>
              {" "}
              1.
            </span>{" "}
            宅配：配送至全台{" "}
          </Header>
          <Header style={headerStyle}>
            {" "}
            <Icon name="shipping" size="small" /> 運費計算（不限品項）{" "}
          </Header>
          <List style={{ margin: 30, textAlign: "left" }} bulleted>
            <List.Item
              style={{ fontFamily: "cwTexMing", fontSize: "1.28571429em" }}
              id="test"
            >
              <List.Icon name="box" />
              <List.Content>
                {" "}
                一盒 <span style={{ fontFamily: "Cormorant" }}>
                  {" "}
                  $160{" "}
                </span>{" "}
              </List.Content>
            </List.Item>
            <List.Item
              style={{ fontFamily: "cwTexMing", fontSize: "1.28571429em" }}
            >
              <List.Icon name="boxes" />
              <List.Content>
                {" "}
                二盒~六盒{" "}
                <span style={{ fontFamily: "Cormorant" }}> $225 </span>{" "}
                (具體數量如下){" "}
              </List.Content>
              <List.List>
                <List.Item>
                  {" "}
                  <span style={{ fontFamily: "Cormorant" }}>6</span>入*
                  <span style={{ fontFamily: "Cormorant" }}>4</span>盒{" "}
                </List.Item>
                <List.Item>
                  <span style={{ fontFamily: "Cormorant" }}>6</span>入*
                  <span style={{ fontFamily: "Cormorant" }}>3</span>盒 +
                  <span style={{ fontFamily: "Cormorant" }}>4</span>入*
                  <span style={{ fontFamily: "Cormorant" }}>1</span>盒
                </List.Item>
                <List.Item>
                  <span style={{ fontFamily: "Cormorant" }}>6</span>入*
                  <span style={{ fontFamily: "Cormorant" }}>2</span>盒 +{" "}
                  <span style={{ fontFamily: "Cormorant" }}>4</span>入*
                  <span style={{ fontFamily: "Cormorant" }}>3</span>盒
                </List.Item>
                <List.Item>
                  <span style={{ fontFamily: "Cormorant" }}>6</span>入*
                  <span style={{ fontFamily: "Cormorant" }}>1</span>盒 +{" "}
                  <span style={{ fontFamily: "Cormorant" }}>4</span>入*
                  <span style={{ fontFamily: "Cormorant" }}>4</span>盒
                </List.Item>
                <List.Item>
                  {" "}
                  <span style={{ fontFamily: "Cormorant" }}>4</span>入*
                  <span style={{ fontFamily: "Cormorant" }}>6</span>盒{" "}
                </List.Item>
                <List.Item> 超過上述組合者，運費將重新起算！ </List.Item>
              </List.List>
            </List.Item>
          </List>
        </Zoom>
      </Container>
      <div id="tr-footer" />
    </Container>
  );
};

export default About;
