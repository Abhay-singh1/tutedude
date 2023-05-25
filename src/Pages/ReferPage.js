import React from 'react'
import '../Styles/Refer.css'
import Cards from '../Components/Cards'
import {Link} from 'react-router-dom'
import img from '../Icons/LeftArrow.png'

export const ReferPage = () => {
  return (
    <div className='main-div'>

      <div className='routing'>
        UI/UX {`>`}<Link to='/' style={{textDecoration:'none', color:'black'}}> Refer & Earn </Link> {`>`} <Link to='/refer' style={{textDecoration:'none', color:'black'}}> Friends Referred </Link>
      </div>

      <div className='back-arrow'>
        <Link to='/'> <img src={img} /></Link> <p>   go back </p>
      </div>
      <div className='wallet-section'>
          <div className='ref'>
            <p className='refer-code'>Your Referral Code</p>
            <div className='r-code'>
              <p >EDCH54</p>
            </div>
          </div>

          <div className='wallet-div'>
            <p className='wallet'>Wallet Balance</p>
            <p className='amnt' style={{color:'black'}}>&#8377;500</p>
          </div>
      </div>  

      <div className='lists'>
        <p className='header'>Friends who enrolled <span className='header subheader'>(3)</span>  </p> 
        <div className='div-cards'>
          <Cards name ='Dhiraj Saxsena'
                 date='14 Sep, 2022'
                 courses={['UI/UX', 'PhotoShop','Illustrator','Python', 'MERN', 'Java' ]}
                 amount='185' />
          
          <Cards name ='Subash Mishra'
                 date='15 Sep, 2022'
                 courses={['UI/UX', 'PhotoShop','Illustrator','Python', 'MERN', 'Java','C++', 'UI/UX','Illustrator','Python', 'MERN', 'Java', 'UI/UX', 'PhotoShop','Illustrator','Python', 'MERN', 'Java', 'UI/UX', 'PhotoShop','Illustrator','Python', 'MERN']}
                 amount='485' />
          
          <Cards name ='Prafull Kumar'
                 date='16 Sep, 2022'
                 courses={['UI/UX', 'PhotoShop','Illustrator','Python', 'MERN', 'Java', 'UI/UX', 'PhotoShop','Illustrator','Python', 'MERN', 'Java', 'UI/UX', 'PhotoShop','Illustrator','Python', 'MERN', 'Java', 'UI/UX', 'PhotoShop','Illustrator','Python', 'MERN']}
                 amount='485' style={{'backgroundImage': 'linear-gradient(270deg, #6D6D6D 0%, rgba(61, 49, 49, 0) 42.79%);'}} />
          <div className='rect'></div>
        </div>
      
      </div>

      <p className='foot'>Terms & Condition</p>
    </div>
  )
}
