import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
  state = {
    isOpenMenu: false
  }

  handleClick = () => {
    let {isOpenMenu} = this.state;
    
    this.setState({
      isOpenMenu: !isOpenMenu
    });
  }

  render() {
    let {isOpenMenu} = this.state;

    return (
      <div className="header">
        <div className="header__sns">
          <Sns />
        </div>
        <div className="header__menu">
          <div className="menu__btn" onClick={this.handleClick}>
            Menu
            <div className={`nav__btn ${isOpenMenu ? 'nav__btn-on' : ''}`}>
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