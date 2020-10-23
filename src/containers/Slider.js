import React, {useState} from 'react'
import Carusel from 'nuka-carousel'

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
                        className='company'
                        onClick={() => currentSlide(0)}
                    >
                        company1
                    </div>
                    <div
                        className='company'
                        onClick={() => currentSlide(1)}
                    >
                        company2
                    </div>
                    <div
                        className='company'
                        onClick={() => currentSlide(2)}
                    >
                        companies3
                    </div>
                    <div
                        className='company'
                        onClick={() => currentSlide(3)}
                    >
                        company4
                    </div>
                    <div
                        className='company'
                        onClick={() => currentSlide(4)}
                    >
                        company5
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
                    <div className='slides'>1</div>
                    <div className='slides'>2</div>
                    <div className='slides'>3</div>
                    <div className='slides'>4</div>
                    <div className='slides'>5</div>
                </Carusel>
            </div>
        </div>
    )
}

export default Slider