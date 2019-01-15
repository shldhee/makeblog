import React from "react";
import "./HeaderSns.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSns = ({link, name}) => {
  return (
    <li className="sns__item">
      <a className="sns__link" href={link}>
        <FontAwesomeIcon icon={["fab", `${name}`]} />
      </a>
    </li>
  );
};

export default HeaderSns;
