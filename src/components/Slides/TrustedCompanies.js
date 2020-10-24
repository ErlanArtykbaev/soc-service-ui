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
          Аналитика
        </div>
        <div
          className={
            props.config.slideIndex === 1 ? 'company current' : 'company'
          }
          onClick={() => props.current(1)}>
          Веб-разработка
        </div>
        <div
          className={
            props.config.slideIndex === 2 ? 'company current' : 'company'
          }
          onClick={() => props.current(2)}>
          Мобильное приложение
        </div>
        <div
          className={
            props.config.slideIndex === 3 ? 'company current' : 'company'
          }
          onClick={() => props.current(3)}>
          Ux/ui Дизайн
        </div>
        <div
          className={
            props.config.slideIndex === 4 ? 'company current' : 'company'
          }
          onClick={() => props.current(4)}>
          Поддержка
        </div>
      </div>
    </div>
  )
}

export default TrustedCompanies
