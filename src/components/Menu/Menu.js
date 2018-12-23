import React, { Component } from 'react';
import './Menu.scss';

const menuList = [
  'HOME',
  'FEATURES',
  'TRAVEL',
  'LIFESTYLE',
  'FOOD',
  'ABOUT',
  'CONTACT',
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
      </nav>
    );
  }
}

export default Menu;
