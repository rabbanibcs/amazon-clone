import '../css/Products.css'
import React,{useEffect,useState} from 'react'
import OnePro from '../components/OnePro'
import {useParams,Link} from "react-router-dom";
import axios from 'axios';

export default function Products() {
    const [subcategories, setSubcategories] = useState([])
    const [categoryProducts, setCategoryProducts] = useState([])
    const [subcategoyProducts, setSubcategoyProducts] = useState([])
    var products=[];
    var n=0;

    const {catid} = useParams()
    const {subid} = useParams()
    
    useEffect(() => {
        catid && axios.get(`http://127.0.0.1:8000/api/subcategories/${catid}/`)
            .then(res=>setSubcategories(res.data))
            .catch((err)=>console.log(err));
        
        
    },[catid])
    useEffect(() => {
        catid && axios.get(`http://127.0.0.1:8000/api/products/${catid}/category/`)
            .then(res=>setCategoryProducts(res.data))
            .catch((err)=>console.log(err));
        
        
    },[catid])
    useEffect(() => {
        
        subid && axios.get(`http://127.0.0.1:8000/api/products/${subid}/subcategory/`)
            .then(res=>setSubcategoyProducts(res.data))
            .catch((err)=>console.log(err));
        
    },[subid])
    return (
        <div className='products'>
            <div className="products__sidebar">
                {subcategories.map((subcategory)=>(
                <Link className="products__sidebar__link" key={subcategory.id} to={`/products/${catid}/${subcategory.id}/`}>
                    <p  >{subcategory.title}</p>
                </Link>
                ))}
            </div>
            <div className="products__body">

                {
                    subcategoyProducts &&
                subcategoyProducts.map((product)=>{
                    products.push(product)
                    if(products.length%4===0){
                        n=products.length
                        return <div  className="products__row">
                            <OnePro key={products[n-4].id} proId={products[n-4].id} src={products[n-4].image_url} 
                            title={products[n-4].title}
                            price={products[n-4].price} rating={products[n-4].rating} />
                            <OnePro key={products[n-3].id} proId={products[n-3].id} src={products[n-3].image_url} 
                            title={products[n-3].title}
                            price={products[n-3].price} rating={products[n-3].rating} />
                            <OnePro key={products[n-2].id} proId={products[n-2].id} src={products[n-2].image_url} 
                            title={products[n-2].title}
                            price={products[n-2].price} rating={products[n-2].rating} />
                            <OnePro key={products[n-1].id} proId={products[n-1].id} src={products[n-1].image_url} 
                            title={products[n-1].title}
                            price={products[n-1].price} rating={products[n-1].rating} />
                        </div>
                    }else{
                        return <div>{}</div>
                    }
                })
                }
                {
                    !subid &&
                    categoryProducts.map((product)=>{
                    products.push(product)
                    if(products.length%4===0){
                        n=products.length
                        return <div key={n} className="products__row">
                            <OnePro key={n-4} proId={products[n-4].id} src={products[n-4].image_url} 
                            title={products[n-4].title.substring(0,60)+'...'}
                            price={products[n-4].price} rating={products[n-4].rating} />
                            <OnePro key={n-3} proId={products[n-3].id} src={products[n-3].image_url} 
                            title={products[n-3].title.substring(0,60)+'...'}
                            price={products[n-3].price} rating={products[n-3].rating} />
                            <OnePro key={n-2} proId={products[n-2].id} src={products[n-2].image_url} 
                            title={products[n-2].title.substring(0,60)+'...'}
                            price={products[n-2].price} rating={products[n-2].rating} />
                            <OnePro key={n-1} proId={products[n-1].id} src={products[n-1].image_url} 
                            title={products[n-1].title.substring(0,60)+'...'}
                            price={products[n-1].price} rating={products[n-1].rating} />
                        </div>
                    }else{
                        return <div></div>
                    }
                })
                }
                { !subid && <div className="products__row">{
                        categoryProducts.slice(-categoryProducts.length%4).map((product)=>(
                        <OnePro key={product.id} proId={product.id} src={product.image_url} 
                        title={product.title.substring(0,60)+'...'}
                        price={product.price} rating={product.rating} />
                ))
                
                }</div>}
                {subcategoyProducts && <div className="products__row">
                    {   subcategoyProducts.slice(-categoryProducts.length%4).map((product)=>(
                        <OnePro key={product.id} proId={product.id} src={product.image_url} 
                        title={product.title.substring(0,60)+'...'}
                        price={product.price} rating={product.rating} />
                ))}
                </div>}
            </div>
        </div>
    )
}
