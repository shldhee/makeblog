import React, { Component } from "react";
import "./Header.scss";
import Sns from "../HeaderSns";
import Menu from "../Menu";
import { Link } from "react-router-dom";

const snsList = [
  {
    name: "facebook",
    link: "http://www.facebook.com"
  },
  {
    name: "github",
    link: "http://www.github.com"
  },
  {
    name: "instagram",
    link: "http://www.instagram.com"
  }
];

class Header extends Component {
  handleClick = () => {
    this.props.handleMenuClick();
  };

  render() {
    let { isToggleMenu } = this.props;

    return [
      <div className={`header ${isToggleMenu ? "header-on" : ""}`}>
        <div className="header__sns">
            <ul className="sns">
              {
                snsList.map(sns => <Sns key={sns.name} link={sns.link} name={sns.name} />)
              }
            </ul>
        </div>
        <Link to="/write">Write</Link>
        <Link to="/home">Home</Link>
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
      </div>,
      <Menu isToggleMenu={isToggleMenu} snsList={snsList}/>
    ]
  }
}

export default Header;
