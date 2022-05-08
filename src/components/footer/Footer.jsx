import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer-div'>
                <div className="inner-footer-1">
                        <ul>
                            <li>Meta</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                            <li>Help</li>
                            <li>API</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Top Accounts</li>
                            <li>Hashtags</li>
                            <li>Locations</li>
                            <li>Instagram Lite</li>
                        </ul>
                </div>
                <div className="inner-footer-2">
                        <ul>
                            <li>Dance</li>
                            <li>Food & Drink</li>
                            <li>Home & Gardens</li>
                            <li>Music</li>
                            <li>Visual Arts</li>
                        </ul>
                </div>
                <div className="inner-footer-3">
                        <select name="" id="">
                            <option value="">English</option>
                        </select>
                        <ul>
                            <li> &copy; Instagram from Meta</li>
                        </ul>
                </div>
    </div>
  )
}
