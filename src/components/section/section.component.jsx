import React from "react";
import Card from "../card/card.component";

import "./section.styles.scss";

const Section = ({ cardData, sectionHeading }) => {
  return (
    <div className="section">
      <div className="sectionHeading">{sectionHeading}</div>
      <div className="cards">
        {cardData.map((carddata) => (
          <Card key={carddata.id} {...carddata} />
        ))}
      </div>
    </div>
  );
};

export default Section;
