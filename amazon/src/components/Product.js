import '../css/Product.css'
import React from 'react'

export default function Product({src,title}) {
    return (
        <div className='product'>
            <h4>{title}</h4>
            <img src={src} alt="" />
            <small>See more</small>
            
        </div>
    )
}
