import React, { Component } from 'react';
import './Header.scss';
import Sns from '../HeaderSns'

class Header extends Component {
  state = {
    isOpenMenu: false
  }

  render() {
    return (
      <div className="header">
        <div className="header__sns">
          <Sns />
        </div>
        <div className="header__menu">
          <div className="menu__btn">
            Menu
            <div className="nav__btn">
              <span className="nav__btn-bar"></span>
              <span className="nav__btn-bar"></span>
              <span className="nav__btn-bar"></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;