import React, { Component } from "react";
import { Header, Menu, Content } from "../../components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class Home extends Component {
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
        {/* <Menu snsList={snsList} isToggleMenu={isOpenMenu} /> */}
        <Content isToggleMenu={isOpenMenu} />
      </div>
    );
  }
}

export default Home;
