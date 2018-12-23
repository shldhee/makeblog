import React, { Component } from "react";
import "./Header.scss";
import Sns from "../HeaderSns";

class Header extends Component {
  handleClick = () => {
    this.props.handleMenuClick();
  };

  render() {
    let { isToggleMenu } = this.props;

    return (
      <div className={`header ${isToggleMenu ? "header-on" : ""}`}>
        <div className="header__sns">
          <Sns />
        </div>
        <div className="header__menu">
          <div className="menu__btn" onClick={this.handleClick}>
            Menu
            <div
              className={`nav__btn ${
                isToggleMenu ? "nav__btn nav__btn-on" : ""
              }`}
            >
              <span className="nav__btn-bar" />
              <span className="nav__btn-bar" />
              <span className="nav__btn-bar" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
