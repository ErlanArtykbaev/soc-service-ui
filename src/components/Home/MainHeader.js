import React from 'react'
import obj from '../../assets/img/Objects.png'

const MainHeader = () => {
  return (
    <div className="MainHeader">
      <div className="header-content">
        <div className="first-impression">
          <div className="texts">
            <h1>
							Гос. Предприятие "Соцсервис"
            </h1>
            <p>
							При государственном комитете информационных технологий и связи кыргызской республики.
            </p>
            <div className="btn-journey-start">Узнать о нас БОЛЬШЕ</div>
          </div>
          <div className="gif-box">
            <img className="gif" src={obj} alt="like" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
