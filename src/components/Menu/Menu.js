import React, { Component } from "react";
import "./Menu.scss";
import Sns from "../HeaderSns";

const menuList = [
  "HOME",
  "FEATURES",
  "TRAVEL",
  "LIFESTYLE",
  "FOOD",
  "ABOUT",
  "CONTACT"
];
class Menu extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul className="navigation__list">
          {menuList.map(menuObj => (
            <li className="navigation__item" key={menuObj}>
              <a className="navigation__link" href={`/${menuObj}`}>
                {menuObj}
              </a>
            </li>
          ))}
        </ul>
        <Sns />
      </nav>
    );
  }
}

export default Menu;
