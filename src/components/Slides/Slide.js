import React from 'react'

const Slide = props => {
  return (
    <div className="slide">
      <div className="information">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <h6>{props.subtitle}</h6>
        <div className="techs">
          {props.techs.map(tech => (
            <div className="tech" key={tech}>{tech}</div>
          ))}
        </div>
      </div>
      <div className="photo">
        <img src={props.img} alt="best i" />
      </div>
    </div>
  )
}

export default Slide
