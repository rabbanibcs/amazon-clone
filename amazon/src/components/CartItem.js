import '../css/CartItem.css';
import React,{useState,useEffect} from 'react'
import { useContextValue } from '../ContextProvider';
import {Link} from "react-router-dom";
import {getProductsFromSessionStorage,calculateTotalPrice,calculateTotalCartItems,setPorductsSession} from '../helpers';

export default function CartItem({image, title, price,qty,stock,size,color,setCart,proId}) {
    const {setCartTotal,setTotalPrice}=useContextValue()
    const [quantity,setQuantity]=useState(qty)

    const handleChange=(e)=>{
        setQuantity(e.target.value);
    }
    const handleDelete=()=>{
        var products =getProductsFromSessionStorage()
        products=products.filter((product)=>(
            product.id !== proId
        ))
        products && setCartTotal(calculateTotalCartItems(products))
        products && setTotalPrice(calculateTotalPrice(products))
        setPorductsSession(products)
        setCart(products)
    }

    useEffect(() => {
        var products =getProductsFromSessionStorage()
        products= products.map((item)=>{
            if(item.id==proId){
                item.quantity=quantity
                return item
            }else{
                return item
            }})
            setPorductsSession(products)
            products && setCartTotal(calculateTotalCartItems(products))
            products && setTotalPrice(calculateTotalPrice(products))

    }, [quantity])

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
                        <select 
                        className='quantity' 
                        name="quantity" 
                        onChange={(e)=>{setQuantity(e.target.value)}}
                        value={quantity}
                        onChange={handleChange}>
                        {Array(30).fill().map((_,i)=>(
                            <option key={i} value={i+1}>{i+1}</option>
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
