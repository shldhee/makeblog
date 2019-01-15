import React, { Component } from "react";
import "./Menu.scss";
import Sns from "../HeaderSns";

const menuList = [
  "home",
  "features",
  "travel",
  "lifestyle",
  "food",
  "about",
  "contact"
];
class Menu extends Component {
  render() {
    let { isToggleMenu, snsList } = this.props;

    return (
      <nav className={`navigation ${isToggleMenu ? "navigation-on" : ""}`}>
        <ul className="navigation__list">
          {menuList.map(menuObj => (
            <li className="navigation__item" key={menuObj}>
              <a className="navigation__link" href={`/${menuObj}`}>
                {menuObj}
              </a>
            </li>
          ))}
        </ul>
        <ul className="sns">
          {
            snsList.map(sns => <Sns key={sns.name} link={sns.link} name={sns.name} />)
          }
        </ul>
      </nav>
    );
  }
}

export default Menu;
