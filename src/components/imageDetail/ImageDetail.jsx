import React from 'react'
import './ImageDetail.css'
import me from '../images/me4.jpg'

export const ImageDetail = ({ close }) => {
    const closeImage = () => {
        close(false)
    }
  return (
    <div className='image-container'>
        <div className="image-div">
                <div className='img-div'>
                        <img src={ me } alt="" />
                </div>
                <div className='comment-div'>
                        <button onClick={ closeImage }>X</button>
                </div>
        </div>
    </div>
  )
}
