import React, { Component } from "react";
import ContentBox from "../ContentBox";
import "./Content.scss";

const boxList = [
  {
    img: "http://placehold.it/364X243",
    category: "travel",
    title: "title1",
    date: "2018-03-01",
    like: "100",
    comment: "5"
  }
];

class Content extends Component {
  render() {
    let { isToggleMenu } = this.props;

    return (
      <div
        className={`content__wrap ${isToggleMenu ? "content__wrap-on" : ""}`}
      >
        <div className="content">
          <h1 className="content__title">doki's blog</h1>
          <ul>
            <li>
              {
                boxList.map(box => <ContentBox key={box.img} img={box.img} category={box.category} title={box.title} date={box.date} like={box.like} comment={box.comment} />)
              }
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Content;
