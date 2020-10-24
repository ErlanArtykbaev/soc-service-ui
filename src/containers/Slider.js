import React, {useContext, useState} from 'react'
import Carusel from 'nuka-carousel'
import {ServiceContext} from "../store/ServicesContext";
import Slide from "../components/Slides/Slide";

const Slider = () => {
    const [config, setConfig] = useState({
        slideIndex: 0,
        length: 5,
        wrapAround: false,
        slidesToShow: 1.0,
        transitionMode: 'scroll',
        heightMode: 'max',
        withoutControls: true
    })
    const [services, setServices] = useContext(ServiceContext)

    const currentSlide = (id) => {
        setConfig({
            ...config,
            slideIndex: id
        })
    }

    return(
        <div className='slider'>
            <div className='trusted-companies-box'>
                <h4>Наши сервисы</h4>
                <div className='trusted-companies'>
                    <div
                        className={config.slideIndex === 0 ? 'company current' : 'company'}
                        onClick={() => currentSlide(0)}
                    >
                        Аналитика
                    </div>
                    <div
                        className={config.slideIndex === 1 ? 'company current' : 'company'}
                        onClick={() => currentSlide(1)}
                    >
                        Веб-разработка
                    </div>
                    <div
                        className={config.slideIndex === 2 ? 'company current' : 'company'}
                        onClick={() => currentSlide(2)}
                    >
                        Мобильное приложение
                    </div>
                    <div
                        className={config.slideIndex === 3 ? 'company current' : 'company'}
                        onClick={() => currentSlide(3)}
                    >
                        Ux/ui Дизайн
                    </div>
                    <div
                        className={config.slideIndex === 4 ? 'company current' : 'company'}
                        onClick={() => currentSlide(4)}
                    >
                        Поддержка
                    </div>
                </div>
            </div>
            <div className='slides'>
                <Carusel
                    withoutControls={config.withoutControls}
                    wrapAround={config.wrapAround}
                    slideIndex={config.slideIndex}
                    transitionMode={config.transitionMode}
                    heightMode={config.heightMode}
                >
                    {
                        services.map(service => (
                            <Slide
                                title={service.title}
                                text={service.text}
                                subtitle={service.subtitle}
                                techs={service.techs}
                                img={service.img}
                            />
                        ))
                    }
                </Carusel>
            </div>
        </div>
    )
}

export default Slider