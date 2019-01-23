import React from "react";
import "./ContentBox.scss";

const ContentBox = ({ img, category, title, like, comment }) => {
  return (
    <div className="box" key={title}>
      <a className="box__link" href="#">
        <img className="box__img" src={img} alt="" />
      </a>
      <div className="box__content">
        <a href="#" className="box__category">
          {category}
        </a>
        <a className="box__link" href="#">
          <h3 className="box__title">{title}</h3>
        </a>
        <div className="box__status">
          <span className="box__like">{like}</span>
          <span className="box__comment">{comment}</span>
        </div>
      </div>
    </div>
  )
}


// class ContentBox extends Component {
//   render() {
//     return (
//       <>
//         {boxList.map(boxObj => (
//           <div className="box" key={boxObj.title}>
//             <a className="box__link" href="#">
//               <img className="box__img" src={boxObj.img} alt="" />
//             </a>
//             <div className="box__content">
//               <a href="#" className="box__category">
//                 {boxObj.category}
//               </a>
//               <a className="box__link" href="#">
//                 <h3 className="box__title">{boxObj.title}</h3>
//               </a>
//               <div className="box__status">
//                 <span className="box__like">{boxObj.like}</span>
//                 <span className="box__comment">{boxObj.comment}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </>
//     );
//   }
// }

export default ContentBox;
