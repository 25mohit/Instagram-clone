import React, { useState } from 'react'
import './Home.css'
import iphone from '../images/iphone.png'
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'
import apple from '../images/appleLogo.png'
import googlePlayStore from '../images/googlePlayStore.png'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Home = () => {
        const [userName, setUserName] = useState('')
        const [password, setPassword] = useState('')

        const users = useSelector(state => state.users)

        const nevigate = useNavigate()

        const login = () => {
                const payload = users.find(user => user.userName === userName && user.password === password)
                if(payload){
                        alert('success')
                        nevigate('/profile')
                }else{
                        alert('wrong username or password')
                }
        }
  return (
    <div className='main-home-div'>
            <div className='img-div'>
                    <img src={ iphone } alt="" />
            </div>
            <div className="right-side-div">
                    <div className='form-div'>
                            <img src={ instagram } alt="" className='instagram-logo' />
                                    <div className="input-fields">
                                                <input type="text" placeholder='Phone number, username, or email' value={ userName } onChange={ e => setUserName(e.target.value)}/>
                                                <input type="password" placeholder='Password' value={ password } onChange={ e => setPassword(e.target.value)}/><br />
                                                <button onClick={ login }>Log In</button>
                                    </div>
                            <p className='or-p-hr'>----------------------------------- <span>OR</span>-----------------------------------</p>
                            <div className="center-link-text">
                                <div className='facebook-link'>
                                    <img src={ facebook } alt="" />
                                    <p className="facebok">Log in with Facebook</p>
                                </div>
                                <p className="forget">Forgot pasword?</p>
                            </div>
                    </div>
                    <div className="signup-div">
                            <p className="signup-link">Don't have an account? <span><Link to='/registration'>Sign up</Link></span></p>
                    </div>
                    <div className="stores-div">
                                <div><p>Get the app</p></div>
                                <div className='stores-logo'>
                                            <img src={ apple } alt="" />
                                            <img src={ googlePlayStore } alt="" />
                                </div>
                    </div>
            </div>

    </div>
  )
}
