import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './SettingBT.css'

export const SettingBT = ({ show }) => {
    const closeModel = () => {
        show(false)
    }
    const nevigate = useNavigate()

    const dispatch = useDispatch()
    const logOut = () => {
      dispatch({
        type : 'LOGOUT'
      })
      nevigate('/')
    }
  return (
    <div className='container' >   
            <div className="card-div">
                    <p className="setting-name">Change Password</p>
                    <hr />
                    <p className="setting-name">QR Code</p>
                    <hr />
                    <p className="setting-name">Apps and Websites</p>
                    <hr />
                    <p className="setting-name">Notifications</p>
                    <hr />
                    <p className="setting-name">Privacy and Security</p>
                    <hr />
                    <p className="setting-name">Login Activity</p>
                    <hr />
                    <p className="setting-name">Emails from Instagram</p>
                    <hr />
                    <p className="setting-name">Report a Problem</p>
                    <hr />
                    <p className="setting-name" onClick={ logOut }>Log Out</p>
                    <hr />
                    <p className="setting-name"  onClick={ closeModel }>Cancel</p>
                {/* <button onClick={ closeModel }>X</button> */}
            </div>
    </div>
  )
}
