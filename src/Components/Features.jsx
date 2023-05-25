import React from 'react'
import '../Styles/Features.css'


const Features = (props) => {
  return (
    <div className='feat-div'>
        <div className='img'>
            <img src={props.img} alt='img' />
        </div>
        
        <div className='typo'>
            <p className='title'>{props.title}</p>
            <p className='subtitle'>{props.subtitle}</p>
        </div>
    </div>
  )
}

export default Features