import React from 'react'
import './Header.css'
import instagram from '../images/instagram.png'
import home from '../images/home.png'
import message from '../images/message.png'
import plus from '../images/plus.png'
import compass from '../images/compass.png'
import heart from '../images/heart.png'
import me from '../images/me1.jpg'

export const Header = () => {
  return (
    <div className='main-header-div'>
            <img src={ instagram } alt="" />
            <input type="text" placeholder='Search' name="" id="" />
                    <div className="functions-div">
                                <img src={ home } alt="" />
                                <img src={ message } alt="" />
                                <img src={ plus } alt="" />
                                <img src={ compass } alt="" />
                                <img src={ heart } alt="" />
                                <img src={ me } alt="" className='profile-photo'/>
                    </div>
    </div>
  )
}
