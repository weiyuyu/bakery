import React from "react";
import {
  Card,
  Button,
  Image,
  Modal,
  Divider,
  Dropdown,
  TransitionablePortal,
  Form,
  Popup,
  Header,
} from "semantic-ui-react";
import ItemCarousel from "./ItemCarousel";
import { Animated } from "react-animated-css";

import cinnamon1 from "./../img/肉桂捲/1 封面.JPG";
import cinnamon2 from "./../img/肉桂捲/2.JPG";
import cinnamon3 from "./../img/肉桂捲/3.JPG";

import cream1 from "./../img/奶油乳酪抹醬/1 封面.JPG";

import standard_scone1 from "./../img/原味司康/1 封面.JPG";
import standard_scone2 from "./../img/原味司康/2.JPG";
import standard_scone3 from "./../img/原味司康/3.JPG";

import tea_scone1 from "./../img/伯爵茶司康/1 封面.JPG";

import mixed_scone1 from "./../img/綜合司康/A9DDCFC7-5CBE-476D-91CE-A6CE4B6785D0.JPG";

import lemon_yogurt_cake1 from "./../img/檸檬馬鞭草生乳酪蛋糕/1.JPG";
import lemon_yogurt_cake2 from "./../img/檸檬馬鞭草生乳酪蛋糕/3.JPG";

import devon_cream1 from "./../img/德文郡奶油/1 封面.JPG";

import lemon_yogurt_cake_cup1 from "./../img/檸檬馬鞭草生乳酪蛋糕4杯裝/2.JPG";

import banana_pound_cake1 from "./../img/香蕉磅蛋糕/封面.JPG";
import banana_pound_cake2 from "./../img/香蕉磅蛋糕/圖1.JPG";
import banana_pound_cake3 from "./../img/香蕉磅蛋糕/圖2.JPG";
import banana_pound_cake4 from "./../img/香蕉磅蛋糕/圖3.JPG";

import original_souffle1 from "./../img/原味奶酥醬/1 封面.JPG";

import vienna_cream1 from "./../img/維也納奶油抹醬/1 封面.JPG";
import vienna_cream2 from "./../img/維也納奶油抹醬/2.JPG";
import vienna_cream3 from "./../img/維也納奶油抹醬/3.JPG";

import organic_coconut1 from "./../img/有機椰子糖奶酥醬/1 封面.JPG";
import organic_coconut2 from "./../img/有機椰子糖奶酥醬/2.JPG";

import cranberry_souffle1 from "./../img/蔓越莓奶酥醬/1 封面.JPG";
import cranberry_souffle2 from "./../img/蔓越莓奶酥醬/2.JPG";

import macha_souffle1 from "./../img/有機純抹茶奶酥醬/1 封面.JPG";
import macha_souffle2 from "./../img/有機純抹茶奶酥醬/2.JPG";

const styles = {
  cardStyle: {
    margin: 30,
    borderRadius: 0,
  },
  textStyle: {
    margin: 10,
    fontFamily: "cwTexMing",
    fontWeight: 400,
    fontSize: 20,
  },
  thumbnailStyle: {
    marginBottom: 20,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 0,
  },
  modalContentStyle: {
    textAlign: "center",
  },
};

const cinnamon = [
  {
    id: 0,
    file: cinnamon1,
    legend: "有機椰子糖肉桂捲",
  },
  {
    id: 1,
    file: cinnamon2,
    legend: "有機椰子糖肉桂捲",
  },
  {
    id: 2,
    file: cinnamon3,
    legend: "有機椰子糖肉桂捲",
  },
];

const standard_scone = [
  {
    id: 3,
    file: standard_scone1,
    legend: "原味司康",
  },
  {
    id: 4,
    file: standard_scone2,
    legend: "原味司康",
  },
  {
    id: 5,
    file: standard_scone3,
    legend: "原味司康",
  },
];

const devon_cream = [
  {
    id: 6,
    file: devon_cream1,
    legend: "德文郡奶油",
  },
];

const organic_coconut = [
  {
    id: 7,
    file: organic_coconut1,
    legend: "有機椰子糖奶酥醬",
  },
  {
    id: 8,
    file: organic_coconut2,
    legend: "有機椰子糖奶酥醬",
  },
];

const macha_souffle = [
  {
    id: 9,
    file: macha_souffle1,
    legend: "有機純抹茶奶酥醬",
  },
  {
    id: 10,
    file: macha_souffle2,
    legend: "有機純抹茶奶酥醬",
  },
];

const cranberry_souffle = [
  {
    id: 11,
    file: cranberry_souffle1,
    legend: "蔓越莓奶酥醬",
  },
  {
    id: 12,
    file: cranberry_souffle2,
    legend: "蔓越莓奶酥醬",
  },
];

const original_souffle = [
  {
    id: 13,
    file: original_souffle1,
    legend: "原味奶酥醬",
  },
];

const cream = [
  {
    id: 14,
    file: cream1,
    legend: "奶油乳酪抹醬",
  },
];

const tea_scone = [
  {
    id: 7,
    file: tea_scone1,
    legend: "伯爵茶司康",
  },
];

const mixed_scone = [
  {
    id: 10,
    file: mixed_scone1,
    legend: "綜合司康",
  },
];

const lemon_yogurt_cake = [
  {
    id: 11,
    file: lemon_yogurt_cake1,
    legend: "檸檬馬鞭草生乳酪蛋糕",
  },
  {
    id: 12,
    file: lemon_yogurt_cake2,
    legend: "檸檬馬鞭草生乳酪蛋糕",
  },
];

const lemon_yogurt_cake_cup = [
  {
    id: 14,
    file: lemon_yogurt_cake_cup1,
    legend: "檸檬馬鞭草生乳酪蛋糕4杯裝",
  },
];

const banana_pound_cake = [
  {
    id: 15,
    file: banana_pound_cake1,
    legend: "香蕉磅蛋糕",
  },
  {
    id: 16,
    file: banana_pound_cake2,
    legend: "香蕉磅蛋糕",
  },
  {
    id: 17,
    file: banana_pound_cake3,
    legend: "香蕉磅蛋糕",
  },
  {
    id: 18,
    file: banana_pound_cake4,
    legend: "香蕉磅蛋糕",
  },
];

const vienna_cream = [
  {
    id: 22,
    file: vienna_cream1,
    legend: "維也納奶油抹醬",
  },
  {
    id: 23,
    file: vienna_cream2,
    legend: "維也納奶油抹醬",
  },
  {
    id: 24,
    file: vienna_cream3,
    legend: "維也納奶油抹醬",
  },
];

const images = [
  cinnamon,
  standard_scone,
  devon_cream,
  organic_coconut,
  macha_souffle,
  cranberry_souffle,
  original_souffle,
  cream,
  tea_scone,
  mixed_scone,
  banana_pound_cake,
  lemon_yogurt_cake,
  lemon_yogurt_cake_cup,
  vienna_cream,
];

export default class ShopItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      options: this.props.options,
      bundle: null,
      quantity: 0,
      popUpIsOpen: false,
    };
    // console.log(this.props.cinnamonEnabled);
    // console.log(this.props.standardSconeEnabled);
    // console.log(this.props.devonEnabled);
  }

  handleAdd = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };

  handleRemove = () => {
    this.setState({
      quantity: this.state.quantity - 1,
    });
  };

  addToCart = () => {
    let item = this.props.itemName;
    let bundle = this.state.bundle;
    let quantity = this.state.quantity;
    this.props.addItemToCart(item, bundle, quantity);
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false, bundle: null, quantity: 0 });
  };

  handleDropdownChange = (e, data) => {
    console.log(data.value);
    this.setState({ bundle: data.value, quantity: 0 });
  };

  handlePopUpOpen = () => {
    this.setState({ popUpIsOpen: true });

    this.timeout = setTimeout(() => {
      this.setState({ popUpIsOpen: false });
    }, 1000);
  };

  handlePopUpClose = () => {
    this.setState({ isOpen: false });
    clearTimeout(this.timeout);
  };

  render() {
    let removeDisabled = true;
    if (this.state.bundle) {
      if (this.state.quantity > 0) {
        removeDisabled = false;
      }
    }
    const { cardStyle, thumbnailStyle, modalContentStyle, textStyle } = styles;
    const { options, modalOpen, bundle, quantity } = this.state;
    return (
      <Animated animationIn="bounceInUp" isVisible={true}>
        <Card style={cardStyle} onClick={this.openModal}>
          <Card.Content>
            <Image
              src={images[this.props.id - 1][0]["file"]}
              alt="Placeholder"
              rounded
              style={thumbnailStyle}
            />
            {this.props.soldOut && (
              <Card.Description
                style={{
                  fontFamily: "Cormorant",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                SOLD OUT
              </Card.Description>
            )}
            <Card.Header style={textStyle}> {this.props.itemName} </Card.Header>
            <Card.Description
              style={{ fontFamily: "Cormorant", fontWeight: 600, fontSize: 18 }}
            >
              {" "}
              {this.props.itemNameEnglish}{" "}
            </Card.Description>
            <Card.Description style={{ fontFamily: "Cormorant", fontSize: 16 }}>
              {" "}
              {this.props.itemPrice}{" "}
            </Card.Description>
            {/* <Card.Description style={textStyle}>

            </Card.Description> */}
          </Card.Content>
        </Card>
        <TransitionablePortal
          open={modalOpen}
          transition={{ animation: "scale", duration: 300 }}
        >
          <Modal onClose={this.closeModal} open={true} dimmer={true}>
            <Modal.Header>
              <span
                style={{
                  margin: 3,
                  fontFamily: "cwTexMing",
                  fontWeight: 400,
                  fontSize: 20,
                }}
              >
                {" "}
                {this.props.itemName}{" "}
              </span>{" "}
              <br />
              <span
                style={{
                  margin: 3,
                  fontFamily: "Cormorant",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                {" "}
                {this.props.itemNameEnglish}{" "}
              </span>
            </Modal.Header>
            <Modal.Content style={modalContentStyle}>
              {/* <Image wrapped rounded size='medium' src={thumbnails[this.props.id-1]} style={thumbnailStyle}/> */}
              <ItemCarousel items={images[this.props.id - 1]} />
              {this.props.itemName === "有機椰子糖肉桂捲" && (
                <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                  {" "}
                  每個捲捲都會附上一份自製奶油乳酪抹醬{" "}
                </Header>
              )}
              {!this.props.cinnamonEnabled &&
                this.props.itemName === "有機椰子糖肉桂捲" && (
                  <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                    有機椰子糖肉桂捲採每月初開放「下個月收貨名額」的方式訂購。{" "}
                    <br />
                    目前名額已滿， 下次有機椰子糖肉桂捲開放訂購時間請至 <br />
                    <span style={{ fontFamily: "Cormorant" }}>
                      @janetsbakery
                    </span>{" "}
                    資訊欄或每篇文章底下公告查閱。
                  </Header>
                )}
              {!this.props.standardSconeEnabled &&
                this.props.itemName === "原味司康" && (
                  <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                    目前名額已滿， 下次開放訂購時間請至 <br />
                    <span style={{ fontFamily: "Cormorant" }}>
                      @janetsbakery
                    </span>{" "}
                    資訊欄或每篇文章底下公告查閱。
                  </Header>
                )}
              {!this.props.devonEnabled &&
                this.props.itemName === "德文郡奶油" && (
                  <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                    {" "}
                    欲訂購請私訊{" "}
                    <span style={{ fontFamily: "Cormorant" }}>
                      @janetsbakery
                    </span>{" "}
                    詢問{" "}
                  </Header>
                )}
              {this.props.itemName !== "有機椰子糖肉桂捲" &&
                this.props.soldOut && (
                  <Header size="small" style={{ fontFamily: "Cormorant" }}>
                    SOLD OUT
                  </Header>
                )}
              {this.props.itemName === "奶油乳酪抹醬" && (
                <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                  {" "}
                  搭配捲捲專用。也很適合搭配bagel食用！{" "}
                </Header>
              )}
              {this.props.itemName === "綜合司康" && (
                <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                  {" "}
                  每個組合都是一半原味司康、一半伯爵茶司康{" "}
                </Header>
              )}
              {this.props.itemName === "檸檬馬鞭草生乳酪蛋糕" && (
                <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                  {" "}
                  6吋 (約4-6人食用){" "}
                </Header>
              )}
              {this.props.itemName === "德文郡奶油" && (
                <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                  {" "}
                  一罐的份量
                  <span style={{ fontFamily: "Cormorant" }}>170g</span>，
                  約可搭配6個司康{" "}
                </Header>
              )}
              {this.props.itemName === "檸檬馬鞭草生乳酪蛋糕4杯裝" && (
                <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                  {" "}
                  份量與盒裝的蛋糕相同{" "}
                </Header>
              )}
              {this.props.itemName === "香蕉磅蛋糕" && (
                <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                  {" "}
                  一整條(約{" "}
                  <span style={{ fontFamily: "Cormorant" }}>710g</span>)切成
                  <span style={{ fontFamily: "Cormorant" }}>
                    8
                  </span>片，盒裝{" "}
                </Header>
              )}
              {this.props.itemName === "原味奶酥醬" && (
                <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                  {" "}
                  約可塗抹{" "}
                  <span style={{ fontFamily: "Cormorant" }}> 12-15 </span>
                  份厚片吐司{" "}
                </Header>
              )}
              {this.props.itemName === "維也納奶油抹醬" && (
                <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                  {" "}
                  約可塗抹{" "}
                  <span style={{ fontFamily: "Cormorant" }}> 12-15 </span>
                  份厚片吐司{" "}
                </Header>
              )}
              {this.props.itemName === "有機椰子糖奶酥醬" && (
                <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                  {" "}
                  約可塗抹{" "}
                  <span style={{ fontFamily: "Cormorant" }}> 12-15 </span>
                  份厚片吐司{" "}
                </Header>
              )}
              {this.props.itemName === "蔓越莓奶酥醬" && (
                <Header size="small" style={{ fontFamily: "cwTexMing" }}>
                  {" "}
                  約可塗抹{" "}
                  <span style={{ fontFamily: "Cormorant" }}> 12-15 </span>
                  份厚片吐司{" "}
                </Header>
              )}
              {this.props.itemName !== "有機椰子糖肉桂捲" &&
                this.props.itemName !== "原味司康" &&
                this.props.itemName !== "德文郡奶油" &&
                !this.props.soldOut && (
                  <Dropdown
                    placeholder="Select Bundle"
                    selection
                    options={options}
                    onChange={this.handleDropdownChange}
                    style={{ fontFamily: "cwTexMing, Cormorant" }}
                  />
                )}
              {this.props.itemName === "有機椰子糖肉桂捲" &&
                this.props.cinnamonEnabled && (
                  <Dropdown
                    placeholder="Select Bundle"
                    selection
                    options={options}
                    onChange={this.handleDropdownChange}
                    style={{ fontFamily: "cwTexMing, Cormorant" }}
                  />
                )}
              {this.props.itemName === "原味司康" &&
                this.props.standardSconeEnabled && (
                  <Dropdown
                    placeholder="Select Bundle"
                    selection
                    options={options}
                    onChange={this.handleDropdownChange}
                    style={{ fontFamily: "cwTexMing, Cormorant" }}
                  />
                )}
              {this.props.itemName === "德文郡奶油" &&
                this.props.devonEnabled && (
                  <Dropdown
                    placeholder="Select Bundle"
                    selection
                    options={options}
                    onChange={this.handleDropdownChange}
                    style={{ fontFamily: "cwTexMing, Cormorant" }}
                  />
                )}
              <br />
              {this.props.itemName !== "有機椰子糖肉桂捲" &&
                this.props.itemName !== "原味司康" &&
                this.props.itemName !== "德文郡奶油" &&
                !this.props.soldOut && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 20,
                    }}
                  >
                    <Button
                      disabled={removeDisabled}
                      icon="minus"
                      onClick={this.handleRemove}
                    />
                    <Form.Input
                      placeholder="數量"
                      readOnly
                      value={this.state.quantity}
                      style={{
                        marginLeft: 5,
                        marginRight: 8,
                        width: 196,
                        fontFamily: "Cormorant",
                      }}
                    />
                    <Button
                      icon="plus"
                      disabled={bundle === null}
                      onClick={this.handleAdd}
                    />
                  </div>
                )}
              {this.props.itemName === "有機椰子糖肉桂捲" &&
                this.props.cinnamonEnabled && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 20,
                    }}
                  >
                    <Button
                      disabled={removeDisabled}
                      icon="minus"
                      onClick={this.handleRemove}
                    />
                    <Form.Input
                      placeholder="數量"
                      readOnly
                      value={this.state.quantity}
                      style={{
                        marginLeft: 5,
                        marginRight: 8,
                        width: 196,
                        fontFamily: "Cormorant",
                      }}
                    />
                    <Button
                      icon="plus"
                      disabled={bundle === null}
                      onClick={this.handleAdd}
                    />
                  </div>
                )}
              {this.props.itemName === "原味司康" &&
                this.props.standardSconeEnabled && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 20,
                    }}
                  >
                    <Button
                      disabled={removeDisabled}
                      icon="minus"
                      onClick={this.handleRemove}
                    />
                    <Form.Input
                      placeholder="數量"
                      readOnly
                      value={this.state.quantity}
                      style={{
                        marginLeft: 5,
                        marginRight: 8,
                        width: 196,
                        fontFamily: "Cormorant",
                      }}
                    />
                    <Button
                      icon="plus"
                      disabled={bundle === null}
                      onClick={this.handleAdd}
                    />
                  </div>
                )}
              {this.props.itemName === "德文郡奶油" && this.props.devonEnabled && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Button
                    disabled={removeDisabled}
                    icon="minus"
                    onClick={this.handleRemove}
                  />
                  <Form.Input
                    placeholder="數量"
                    readOnly
                    value={this.state.quantity}
                    style={{
                      marginLeft: 5,
                      marginRight: 8,
                      width: 196,
                      fontFamily: "Cormorant",
                    }}
                  />
                  <Button
                    icon="plus"
                    disabled={true}
                    onClick={this.handleAdd}
                  />
                </div>
              )}
              <Divider />
              <Button.Group>
                <Popup
                  trigger={
                    <Button
                      onClick={this.addToCart}
                      disabled={true}
                      style={{ margin: 5, fontFamily: "cwTexMing" }}
                    >
                      {" "}
                      放入購物車{" "}
                    </Button>
                  }
                  content={`成功放入購物車！`}
                  on="click"
                  open={this.state.popUpIsOpen}
                  onClose={this.handlePopUpClose}
                  onOpen={this.handlePopUpOpen}
                  position="top right"
                />
                <Button
                  onClick={this.closeModal}
                  style={{ margin: 5, fontFamily: "cwTexMing" }}
                >
                  {" "}
                  關閉{" "}
                </Button>
              </Button.Group>
            </Modal.Content>
          </Modal>
        </TransitionablePortal>
      </Animated>
    );
  }
}
