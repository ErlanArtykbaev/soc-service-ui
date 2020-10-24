import React, {createContext, useState} from 'react'

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
      img:
        'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg',
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
      img:
        'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg',
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
      img:
        'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg',
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
      img:
        'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg',
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
      img:
        'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg',
    },
  ])
  return (
    <ServiceContext.Provider value={[services, setServices]}>
      {props.children}
    </ServiceContext.Provider>
  )
}
