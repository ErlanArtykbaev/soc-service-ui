import React from 'react'

const TrustedCompanies = props => {
  return (
    <div className="trusted-companies-box">
      <h4>Наши сервисы</h4>
      <div className="trusted-companies">
        <div
          className={
            props.config.slideIndex === 0 ? 'company current' : 'company'
          }
          onClick={() => props.current(0)}>
          <img src={props.img[0]} alt="analitics" className="icons" />
          <span>Аналитика</span>
        </div>
        <div
          className={
            props.config.slideIndex === 1 ? 'company current' : 'company'
          }
          onClick={() => props.current(1)}>
          <img src={props.img[1]} alt="web app" className="icons" />
          <span>Веб-разработка</span>
        </div>
        <div
          className={
            props.config.slideIndex === 2 ? 'company current' : 'company'
          }
          onClick={() => props.current(2)}>
          <img src={props.img[2]} alt="mob app" className="icons" />
          <span>Мобильное приложение</span>
        </div>
        <div
          className={
            props.config.slideIndex === 3 ? 'company current' : 'company'
          }
          onClick={() => props.current(3)}>
          <img src={props.img[3]} alt="design" className="icons" />
          <span>Ux/ui Дизайн</span>
        </div>
        <div
          className={
            props.config.slideIndex === 4 ? 'company current' : 'company'
          }
          onClick={() => props.current(4)}>
          <img src={props.img[4]} alt="support" className="icons" />
          <span>Поддержка</span>
        </div>
      </div>
    </div>
  )
}

export default TrustedCompanies
