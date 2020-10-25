import React, {createContext, useState} from 'react'

import img from '../assets/img/Services/Group 115.png'

export const ServiceContext = createContext()

export const ServiceProvider = props => {
  const [services, setServices] = useState([
    {
      title: 'Анализируем рынок',
      text:
        'Создаем сайты и веб-проекты любой сложности и направленности, оказывая полный спектр сопутствующих услуг. Интернет-магазин или сложный многоцелевой коммерческий сайт? Превосходная работа без компромисов.',
      subtitle: 'Используемые технологии',
      techs: [
        'PHP',
        'React',
        'Nodejs',
        'Angular',
        'Vue',
        'Git',
        'Gulp',
        'RabbitMQ',
        'Linters',
        'Reids',
        'Yarn',
        'Formatters',
      ],
      img: img,
    },
    {
      title: 'Создаем веб-проекты с нуля',
      text:
        'Создаем сайты и веб-проекты любой сложности и направленности, оказывая полный спектр сопутствующих услуг. Интернет-магазин или сложный многоцелевой коммерческий сайт? Превосходная работа без компромисов.',
      subtitle: 'Используемые технологии',
      techs: [
        'PHP',
        'React',
        'Nodejs',
        'Angular',
        'Vue',
        'Git',
        'Gulp',
        'RabbitMQ',
        'Linters',
        'Reids',
        'Yarn',
        'Formatters',
      ],
      img: img,
    },
    {
      title: 'Создаем мобильные приложения с нуля',
      text:
        'Создаем сайты и веб-проекты любой сложности и направленности, оказывая полный спектр сопутствующих услуг. Интернет-магазин или сложный многоцелевой коммерческий сайт? Превосходная работа без компромисов.',
      subtitle: 'Используемые технологии',
      techs: [
        'PHP',
        'React',
        'Nodejs',
        'Angular',
        'Vue',
        'Git',
        'Gulp',
        'RabbitMQ',
        'Linters',
        'Reids',
        'Yarn',
        'Formatters',
      ],
      img: img,
    },
    {
      title: 'Создаем дизайны с нуля',
      text:
        'Создаем сайты и веб-проекты любой сложности и направленности, оказывая полный спектр сопутствующих услуг. Интернет-магазин или сложный многоцелевой коммерческий сайт? Превосходная работа без компромисов.',
      subtitle: 'Используемые технологии',
      techs: [
        'PHP',
        'React',
        'Nodejs',
        'Angular',
        'Vue',
        'Git',
        'Gulp',
        'RabbitMQ',
        'Linters',
        'Reids',
        'Yarn',
        'Formatters',
      ],
      img: img,
    },
    {
      title: 'Поддержка сервисов и оптимизация',
      text:
        'Создаем сайты и веб-проекты любой сложности и направленности, оказывая полный спектр сопутствующих услуг. Интернет-магазин или сложный многоцелевой коммерческий сайт? Превосходная работа без компромисов.',
      subtitle: 'Используемые технологии',
      techs: [
        'PHP',
        'React',
        'Nodejs',
        'Angular',
        'Vue',
        'Git',
        'Gulp',
        'RabbitMQ',
        'Linters',
        'Reids',
        'Yarn',
        'Formatters',
      ],
      img: img,
    },
  ])
  return (
    <ServiceContext.Provider value={[services, setServices]}>
      {props.children}
    </ServiceContext.Provider>
  )
}
