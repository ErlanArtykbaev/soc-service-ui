import React from 'react'

const Project = (props) => {
  return(
    <div className='project'>
			{
				props.left ? <>
					<img src={props.img} alt='bisness' className='img' />
					<div className='info'>
						<div className='title'>{props.title}</div>
						<div className='subtitle'>{props.subtitle}</div>
						<div className='services-title'>{props.servicesTitle}</div>
						<div className='services'>{props.services}</div>
						<div className='btn-project'>Go to project</div>
					</div>
				</>
				: 
				<>
					<div className='info'>
						<div className='title'>{props.title}</div>
						<div className='subtitle'>{props.subtitle}</div>
						<div className='services-title'>{props.servicesTitle}</div>
						<div className='services'>{props.services}</div>
						<div className='btn-project'>Go to project</div>
					</div>
					<img src={props.img} alt='bisness' className='img' />
				</>
			}
    </div>
  )
}

export default Project
