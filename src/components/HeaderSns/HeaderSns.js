import React from "react";
import "./HeaderSns.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const snsList = [
  {
    name: "facebook",
    link: "http://www.facebook.com"
  },
  {
    name: "github",
    link: "http://www.github.com"
  },
  {
    name: "instagram",
    link: "http://www.instagram.com"
  }
];

const HeasderSns = () => {
  return (
    <div>
      <ul className="sns">
        {snsList.map(sns => (
          <li key={sns.name} className="sns__item">
            <a className="sns__link" href={sns.link}>
              <FontAwesomeIcon icon={["fab", `${sns.name}`]} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeasderSns;
