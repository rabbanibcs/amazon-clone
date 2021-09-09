import React from 'react'
import './css/EmptyCart.css'

export default function EmptyCart() {
    return (
        <div className='empty_cart'>
             <div className='empty_cart__left'>
                <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="" />
                <div className='empty_cart__left__right'>
                    <h3>Your Amazon Cart is empty</h3>
                    <a className='shop_deal'>Shop today's deal</a>
                    <div className='account_options'>
                    <a className='empty_cart__signin'>Sign in to your account</a>
                    <a className='empty_cart__signup'>Signup Now</a>
                    </div>
                </div>
            </div>
            <div className='empty_cart__right'>
            </div>
        </div>
    )
}
