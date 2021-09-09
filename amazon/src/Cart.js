import './css/Cart.css';
import React,{useLayoutEffect,useState} from 'react'
import CartItem from './CartItem';
import { useContextValue } from './ContextProvider';

export default function Cart() {
    const [cart, setCart] = useState()
    const {totalPrice,cartTotal}=useContextValue()
    
    useLayoutEffect(()=>{    
        const products =JSON.parse(window.sessionStorage.getItem('products'))
        setCart(products)
    
      },[setCart])

    return ( 
        <div className='cart'>
            <div className="cart__left">
                <h3>Shopping Cart</h3>
                <h6>Price</h6>
                {cart && cart.map((product)=>(
                    <CartItem setCart={setCart}
                    proId={product.id}
                    image={product.image_url} 
                    price={product.price} size="3" color="white" title={product.title}/>
                ))}
                <h2>Subtotal({cartTotal} {cartTotal>1 ?'items' : 'item'}): $<b>{totalPrice?.toFixed(2)}</b></h2>
            </div>
            <div className="cart__right">
                <h2>Subtotal({cartTotal} {cartTotal>1 ?'items' : 'item'}): <b>${totalPrice?.toFixed(2)}</b></h2>
                <button type='button'>Procced to checkout</button>
            </div>
        </div>
    )
}
