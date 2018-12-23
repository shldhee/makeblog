import React, { Component } from "react";
import ContentMain from "../ContentMain";
import "./Content.scss";

class Content extends Component {
  render() {
    let { isToggleMenu } = this.props;

    return (
      <div
        className={`content__wrap ${isToggleMenu ? "content__wrap-on" : ""}`}
      >
        <div className="content">
          <h1 className="content__title">doki's blog</h1>
          <ContentMain />
        </div>
      </div>
    );
  }
}

export default Content;
