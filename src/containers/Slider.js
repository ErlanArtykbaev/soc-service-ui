import React, {useContext, useState} from 'react'
import Carusel from 'nuka-carousel'
import {ServiceContext} from '../store/ServicesContext'
import Slide from '../components/Slides/Slide'
import TrustedCompanies from '../components/Slides/TrustedCompanies'

const Slider = () => {
  const [config, setConfig] = useState({
    slideIndex: 0,
    length: 5,
    wrapAround: false,
    slidesToShow: 1.0,
    transitionMode: 'scroll',
    heightMode: 'max',
    withoutControls: true,
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
      <TrustedCompanies current={currentSlide} config={config} />
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
