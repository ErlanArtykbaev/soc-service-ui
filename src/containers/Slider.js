import React, {useContext, useState} from 'react'
import Carusel from 'nuka-carousel'
import {ServiceContext} from '../store/ServicesContext'
import Slide from '../components/Slides/Slide'
import TrustedCompanies from '../components/Slides/TrustedCompanies'

import analitics from '../assets/img/Services/Pie chart.png'
import web from '../assets/img/Services/Group 228.svg'
import mob from '../assets/img/Services/Smartphone.svg'
import design from '../assets/img/Services/Group 229.png'
import supp from '../assets/img/Services/Group 230.svg'

const Slider = () => {
  const [config, setConfig] = useState({
    slideIndex: 0,
    length: 5,
    wrapAround: false,
    slidesToShow: 1.0,
    transitionMode: 'scroll',
    heightMode: 'max',
    withoutControls: true,
    images: [analitics, web, mob, design, supp],
  })
  const [services, setServices] = useContext(ServiceContext)

  const currentSlide = id => {
    setConfig({
      ...config,
      slideIndex: id,
    })
  }

  return (
    <div className="slider">
      <TrustedCompanies
        img={config.images}
        current={currentSlide}
        config={config}
      />
      <div className="slides">
        <Carusel
          withoutControls={config.withoutControls}
          wrapAround={config.wrapAround}
          slideIndex={config.slideIndex}
          transitionMode={config.transitionMode}
          heightMode={config.heightMode}>
          {services.map(service => (
            <Slide
              title={service.title}
              text={service.text}
              subtitle={service.subtitle}
              techs={service.techs}
              img={service.img}
            />
          ))}
        </Carusel>
      </div>
    </div>
  )
}

export default Slider
