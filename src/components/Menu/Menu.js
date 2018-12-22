import React, { Component } from "react";
import "./Menu.scss";

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
      <div>
        <ul>
          {menuList.map(menuObj => (
            <li>{menuObj}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
