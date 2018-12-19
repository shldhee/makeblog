import React, { Component } from 'react';
import './Header.scss';
import Sns from '../HeaderSns'

class Header extends Component {
  state = {
    isOpenMenu: false
  }

  render() {
    return (
      <div>
      {/*
        <div className="sns">
          facebook : <FontAwesomeIcon icon={['fab', 'facebook-square']} />
          github : <FontAwesomeIcon icon={['fab', 'github-square']} />
          github : <FontAwesomeIcon icon={['fab', 'instagram']} />
        </div>
        <div className="navi">
          menu
        </div>
      */}
        <Sns />
      </div>
    )
  }
}

export default Header;