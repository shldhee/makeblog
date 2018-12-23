import React, { Component } from "react";
import "./ContentBox.scss";

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

class ContentBox extends Component {
  render() {
    return (
      <>
        {boxList.map(boxObj => (
          <div className="box" key={boxObj.title}>
            <a className="box__link" href="#">
              <img className="box__img" src={boxObj.img} alt="" />
            </a>
            <div className="box__content">
              <a href="#" className="box__category">
                {boxObj.category}
              </a>
              <a className="box__link" href="#">
                <h3 className="box__title">{boxObj.title}</h3>
              </a>
              <div className="box__status">
                <span className="box__like">{boxObj.like}</span>
                <span className="box__comment">{boxObj.comment}</span>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default ContentBox;
