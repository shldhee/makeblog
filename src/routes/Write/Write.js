import React, { Component } from "react";
import { Header } from "../../components";

class Write extends Component {
  state = {
    isOpenMenu: false
  };

  handleMenuClick = () => {
    let { isOpenMenu } = this.state;

    this.setState({
      isOpenMenu: !isOpenMenu
    });
  };

  render() {
    const { isOpenMenu } = this.state;
    const { handleMenuClick } = this;
    
    return [
      <Header isToggleMenu={isOpenMenu} handleMenuClick={handleMenuClick} />,
      <div>Write</div>
    ];
  }
}

export default Write;
