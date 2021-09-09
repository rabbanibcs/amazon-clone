import './css/Category.css'
import React from 'react'
import shirt1 from './images/category/shirts/shirt1.jpg'
import shirt2 from './images/category/shirts/shirt2.jpg'
import shirt3 from './images/category/shirts/shirt3.jpg'
import shirt4 from './images/category/shirts/shirt4.jpg'
import shirt5 from './images/category/shirts/shirt5.jpg'
import shirt6 from './images/category/shirts/shirt6.jpg'
import shirt7 from './images/category/shirts/shirt7.jpg'
import shirt8 from './images/category/shirts/shirt8.jpg'
import shirt9 from './images/category/shirts/shirt9.jpg'
import shirt10 from './images/category/shirts/shirt10.jpg'
import shirt12 from './images/category/shirts/shirt12.jpg'
import shirt13 from './images/category/shirts/shirt13.jpg'
import shirt11 from './images/category/shirts/shirt11.jpg'

export default function Category() {
    return (
        <div className='category'>
            <h4>Men's Dress Shirts under $30 <span className='category__span'>Shop now</span> </h4>
            <div className='category__photos'>
            <img src={shirt1} alt='opps!'/>
            <img src={shirt2} alt='opps!'/>
            <img src={shirt3} alt='opps!'/>
            <img src={shirt4} alt='opps!'/>
            <img src={shirt5} alt='opps!'/>
            <img src={shirt6} alt='opps!'/>
            <img src={shirt7} alt='opps!'/>
            <img src={shirt8} alt='opps!'/>
            <img src={shirt9} alt='opps!'/>
            <img src={shirt10} alt='opps!'/>
            <img src={shirt11} alt='opps!'/>
            <img src={shirt12} alt='opps!'/>
            <img src={shirt13} alt='opps!'/>

            </div>
            
        </div>
    )
}
