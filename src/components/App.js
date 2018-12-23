import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class App extends Component {
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

    return (
      <div>
        <Header isToggleMenu={isOpenMenu} handleMenuClick={handleMenuClick} />
        <Menu isToggleMenu={isOpenMenu} />
        <Content />
      </div>
    );
  }
}

export default App;
