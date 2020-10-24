import React from 'react';

const TechnologiesCard = props => {
  return (
    <div className="col col-lg-6 p-5">
      <h3 className="d-block rubik-300">
        {props.title}
        <span className="d-block">{props.subtitle}</span>
      </h3>
      <p className="u-gap-bottom-medium@md-up u-gap-bottom@sm-down">
        {props.description}
      </p>
      {props.WeUse}
    </div>
  );
};

export default TechnologiesCard;
