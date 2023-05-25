import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import '../Styles/Home.css'
import Features from '../Components/Features'
import friends from  '../Icons/friends.png'
import rupee from '../Icons/rupee.png'
import vector from '../Icons/Vector.png'
import wallet from '../Icons/wallet.png'
import Discount from '../Icons/Discount.png'

export const Home = () => {
  return (
    <div >
      <div className='routing-div'>
        UI/UX{`>`}Refer & Earn
      </div>

      <div className='first-div'>
        
        <div className='card-div'>
          <div>
            <p className='head'>Referral Earning</p>
            <p className='numericals'>&#8377;2500</p>
          </div> 

          <div>
            <p className='head'>Total Rewards</p>
            <p className='numericals'>7</p>
          </div> 

          <div>
            <p className='head'>Wallet Balance</p>
            <p className='numericals'>&#8377;500</p>
          </div> 

          <button className='button' style={{cursor:'pointer'}}>Withdraw Balance</button>
        </div>

        <div className='referral'>
          <p className='ref-heading'>Your Referral Code</p>
          <div className='borderclr'>
            <div className='code'>
              <p>EDCH54</p>
            </div>
          </div>
        </div>

      </div>

      <div className='second-div'>
        <p className='header'>How does it work?</p>
        <div className='feature-div'>
          <Features img={friends} title='Invite your Friends' subtitle='Share the link tutedude.com with your friends.' />
          <Features img={vector} title='Friend purchases any courses' subtitle='Using REFERRAL CODE in the payement page.' />
          <Features img={rupee} title='You get &#8377;200 as referral money' subtitle='On total purchase  your friend makes, into your wallet.' />
          <Features img={Discount} title='Your friend get &#8377;200 Off' subtitle='On his overall fee on sucessful purchase  using your referral code.' />
          <Features img={wallet} title='Transfer money from your wallet' subtitle='When wallet balance reaches &#8377;200 or more, you can withdraw it.' />
        </div>
      </div>

      <Link to='/refer' className='footer'>Friends Who Enrolled</Link>
      <p className='footer term'>Terms & Condition</p>
    </div>
  )
}

