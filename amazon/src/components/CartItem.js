import '../css/CartItem.css';
import React from 'react'
import { useContextValue } from '../ContextProvider';
import {useParams,Link} from "react-router-dom";

export default function CartItem({image, title, price,stock,size,color,setCart,proId}) {
    const {setCartTotal}=useContextValue()

    const handleDelete=()=>{
        var products =JSON.parse(window.sessionStorage.getItem('products'))
        products=products.filter((product)=>(
            product.title !== title
        ))
        // window.sessionStorage.clear()
        // sessionStorage.removeItem("key");
        window.sessionStorage.setItem('products',JSON.stringify(products))
        setCart(products)
        setCartTotal(products.length)
        // alert('Are you sure to remove the product?')
    }
    return (
        <div className='cart_item'>
            <Link to={`/product/${proId}`}><img src={image} alt="" /></Link>
            
            <div className="cart_item__detail">
            <Link to={`/product/${proId}`} className='cart_item__detail__title link'><p >{title}</p></Link>

                
                <p className='cart_item__detail__stock'>Only 1 item in stock-order soon</p>
                <p><b>size:</b> {size} Feet</p>
                <p><b>color:</b> {color}</p>
                <div className="cart_item__options">
                        <div className='detail__right__select option'>
                            <p>Qty:</p>
                        <select className='quantity' name="quantity" value='Qun:'>
                        {Array(30).fill().map((_,i)=>(
                            <option value={i+1}>{i+1}</option>
                        ))}
                        </select>
                        </div>    
                    <div onClick={handleDelete} className="cart_item__option">Delete</div>    
                    <div className="cart_item__option">Save for later</div>    
                    <div className="cart_item__option">Compare with similar item</div>    
                </div> 
            </div>
            <div className="cart_item__price">
                <b>${price}</b>
            </div>
        </div>
    )
}
