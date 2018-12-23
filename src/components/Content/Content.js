import React, { Component } from "react";
import ContentMain from "../ContentMain";
import "./Content.scss";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <h1 className="content__title">doki's blog</h1>
        <ContentMain />
      </div>
    );
  }
}

export default Content;
