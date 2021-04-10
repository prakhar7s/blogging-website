import React from "react";

import "./card.styles.scss";
const Card = ({ imageSrc, title, about, redirectTo }) => {
  return (
    <a href={redirectTo} className="card">
      <div className="image">
        <img src={imageSrc} alt={redirectTo} />
      </div>
      <div className="title">{title}</div>
      <div className="about">{about}</div>
    </a>
  );
};

export default Card;
