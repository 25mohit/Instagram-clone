import React, { useState } from 'react'
import './PostSection.css'
import grid from '../images/grid.png'
import bookmark from '../images/bookmark.png'
import user from '../images/user.png'
import me2 from '../images/mohit.png'
import me3 from '../images/me3.jpg'
import me4 from '../images/me4.jpg'
import me5 from '../images/me5.jpg'
import me6 from '../images/me6.jpg'
import me7 from '../images/me7.png'
import me8 from '../images/me8.jpg'
import me9 from '../images/me9.jpg'
import me10 from '../images/me10.jpg'
import { ImageDetail } from '../imageDetail/ImageDetail'


export const PostSection = () => {
        const [showImage , setShowImage] = useState(false)
        const openImage = () => {
                setShowImage(true)
        }
  return (
    <div className='post-section-main-div'>
            <div className="toogle-bar">
                <div className="toofle-icons">
                    <img src={ grid } alt="" />
                        <p className="toogle-text">POSTS</p>
                </div>
                <div className="toofle-icons">
                <img src={ bookmark } alt="" />
                        <p className="toogle-text">SAVED</p>
                </div>
                <div className="toofle-icons">
                <img src={ user } alt="" />
                        <p className="toogle-text">TAGGED</p>
                </div>
            </div>
            <div className="user-photos-section-div">
                            <img src={ me2 } alt="" onClick={ openImage } className='img-class'/>
                            {
                                    showImage && <ImageDetail close = { setShowImage }/>
                            }                            
                            <img src={ me3 } alt="" onClick={ openImage }  className='img-class'/>
                            <img src={ me4 } alt="" onClick={ openImage }  className='img-class'/>
                            <img src={ me5 } alt="" onClick={ openImage }  className='img-class'/>
                            <img src={ me6 } alt="" onClick={ openImage }  className='img-class'/>
                            <img src={ me7 } alt="" onClick={ openImage }  className='img-class'/>
                            <img src={ me8 } alt="" onClick={ openImage }  className='img-class'/>
                            <img src={ me9 } alt="" onClick={ openImage }  className='img-class'/>
                            <img src={ me10 } alt="" onClick={ openImage }  className='img-class'/>
            </div>
    </div>
  )
}
