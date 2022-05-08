import React, { useState } from 'react'
import './UserProfile.css'
import me from '../images/me1.jpg'
import setting from '../images/setting.png'

import { Link } from 'react-router-dom'
import { SettingBT } from '../settingBT/SettingBT'

export const UserProfile = () => {
        const [model, setModel] = useState(false)
        const showModel = () => {
                setModel(true)
        }
  return (
    <div className='user-profile-main-div'>
            <div className='left-side-div'>
                    <img src={ me } alt="" />
            </div>
            <div className='right-side-div'>
                    <div className="rightside-row-first">
                                <p className="user-name">im_hit_</p>
                                <Link to='/'>Edit Profile</Link>
                                <img src={ setting } alt="" onClick={ showModel }/>
                                {
                                        model && <SettingBT show = { setModel }/>
                                }                                
                    </div>
                    <div className="rightside-row-second">
                                <p className="stats-text">58  <span>posts</span></p>
                                <p className="stats-text">452  <span>followers</span></p>
                                <p className="stats-text">204  <span>following</span></p>
                    </div>
                    <div className="rightside-row-third">
                                <p className="user-full-name">Mohit Agarwal</p>
                                <p className="user-detail-text">🏠JAIPUR</p>
                                <p className="user-detail-text">🖤PHOTOGRAPHER</p>
                                <p className="user-detail-text">👨🏻‍🤝‍👨🏿SINGLE</p>
                                <p className="user-detail-text">💙BIKING 🏍️</p>
                                <p className="user-detail-text">🎂ONLINE---SINCE---1995</p>
                                <p className="user-detail-text">👄OK 😺ENOUGH 🤚BYE</p>
                    </div>
            </div>
    </div>
  )
}
