import React, { useState } from 'react'
import iphone from '../images/iphone.png'
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'
import apple from '../images/appleLogo.png'
import googlePlayStore from '../images/googlePlayStore.png'
import { useDispatch } from 'react-redux'
import { Footer } from '../footer/Footer'
import { Link } from 'react-router-dom'


export const Registration = () => {

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const register = () => {
        if(email && userName && fullName && password) {
            dispatch({
                type : 'REGISTER',
                payload :{
                    email, userName, fullName, password
                }
            })
            alert('Success..')            
            setEmail('')
            setFullName('')
            setPassword('')
            setUserName('')
        }else{
            alert("Please Fill all Fields.. ")
        }
    }
  return (
    <div  className='main-home-div'>
        <div className='img-div'>
                    <img src={ iphone } alt="" />
            </div>
            <div className="right-side-div">
                    <div className='form-div'>
                        <Link to='/'> <img src={ instagram } alt="" className='instagram-logo' /></Link>
                                    <div className="input-fields">
                                                <input type="text" placeholder='Mobile Number or email' value={ email } onChange={ e => setEmail(e.target.value)}/>
                                                <input type="text" placeholder='Full Name' value={ fullName } onChange={ e => setFullName(e.target.value)}/><br />
                                                <input type="text" placeholder='Username' value={ userName } onChange={ e => setUserName(e.target.value)}/><br />
                                                <input type="password" placeholder='Password' value={ password } onChange={ e => setPassword(e.target.value)}/><br />
                                                <button onClick={ register } >Sign up</button>
                                                <div className='stores-div'>
                                                    <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                                                </div>
                                    </div>
                            
                    </div>
                   
                    <div className="stores-div">
                                <div><p>Get the app</p></div>
                                <div className='stores-logo'>
                                            <img src={ apple } alt="" />
                                            <img src={ googlePlayStore } alt="" />
                                </div>
                    </div>
            </div>
    <Footer />
    </div>
  )
}
