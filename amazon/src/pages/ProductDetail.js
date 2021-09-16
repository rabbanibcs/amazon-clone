import '../css/Productdetail.css'
import React,{useEffect,useState} from 'react'
import StarIcon from '@material-ui/icons/Star';
import {useParams} from "react-router-dom";
import axios from 'axios';
import { useContextValue } from '../ContextProvider';

export default function ProductDetail() {
    const [product, setProduct] = useState({})
    const [rating, setRating] = useState(2)
    const {setCartTotal}=useContextValue()

    const {proid} = useParams()
    
    // const handleCart=()=>{
    //     var products =JSON.parse(window.sessionStorage.getItem('products'))
    //     // !products && window.sessionStorage.setItem('products' , JSON.stringify(product))
    //     var productExists= products?.filter((item)=>(item.id==proid))
    //     // productExists.length == 0 ? products?.push(product) :alert('This product already exists in your Cart.')
    //     !products? products.push(product) :alert('This product already exists in your Cart.')
    //     window.sessionStorage.setItem('products' , JSON.stringify(products))
    //     setCartTotal(products?.length);

    // }
    const handleCart=()=>{
        try{
            var products =JSON.parse(window.sessionStorage.getItem('products'))
            var productExists= products.filter((item)=>(item.id==proid))
            productExists.length == 0 ? products?.push(product) :alert('This product already exists in your Cart.')
            window.sessionStorage.setItem('products' , JSON.stringify(products))
            setCartTotal(products?.length);

        }catch {
            
            window.sessionStorage.setItem('products' , JSON.stringify([product]))
            setCartTotal(1);
        }
       
    }

    const handleBuy=()=>{

    }


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/product/${proid}/`)
            .then(res=>{setProduct(res.data)
                        setRating(res.data.rating)
            })
            .catch((err)=>console.log(err));
    }, [proid])

    return (
        <div className='detail'>
            
            <div className="detail__left">
                <img src={product.image_url} alt="sorry, Not available" />
            </div>
            <div className="detail__center">
                <h2>{product.title}</h2>
                <p className='detail__center__rating'>
                    {Array(Math.floor(rating)).fill('').map(()=>(
                        <StarIcon/>
                    ))}
                </p>
                <p>Price: ${product.price}</p>
                <p>Size: <strong>10 Feet</strong></p>

                <div className="sizes">
                <p>Size: <strong>3 Feet</strong></p>
                <p>Size: <strong>6 Feet</strong></p>
                <p>Size: <strong>10 Feet</strong></p>

                </div>
                <h6>About this Item</h6>
                <p>{product.product_description}</p>
            </div>
            <div className="detail__right">

            <p>Price: ${product.price}</p>
            <p>+ $20 Shipping & Import Fees</p>
            <h5>Temporarily out of stock.</h5>
            <p>We are working hard to be back in stock. 
                Place your order and we’ll email you when we
                 have an estimated delivery date. You won’t
                  be charged until the item ships.
                
            </p>
            <div className='detail__right__select'>
                <p>Qty:</p>
            <select className='quantity' name="quantity" value='Qun:'>
            {Array(30).fill().map((_,i)=>(
                <option value={i+1}>{i+1}</option>

            ))}
            </select>
            </div> 
            
            <div className="button">
                <input onClick={handleCart} value='Add to cart' type='button'/>
                <input onClick={handleBuy} value='Buy now' type='button'/>
            </div>
            </div>
        </div>
    )
}
