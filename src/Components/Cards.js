import React from 'react'
import '../Styles/Card.css'


const Cards = (props) => {
    
  return (
    <div className='card'>
        <div className='head'>
            <p className='name'>{props.name}</p>
            <p className='date'>{props.date}</p>
        </div>

        <div className='course'>
            <p className='heading'>Courses Enrolled({props.courses.length})</p>
            <div className='courses-div'>
                
                {
                    props.courses.map((d,i) =>{
                        
                        return <p key={i}>{d}</p>
                    })
                }
            </div>
        </div>

        <p className='ref'>Referral Amount <span className='amnt'>&#8377;{props.amount}</span></p>
    </div>
  )
}

export default Cards