import '../css/OnePro.css'
import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { Link} from "react-router-dom";

export default function OnePro({src,title,rating,price,proId}) {
    return (
        <Link className='link'  to={`/product/${proId}`}>
        <div className='oneproduct'>
            <img src={src} alt="" />
                <p className='oneproduct_title'>{title.substring(0,100)+'...'}</p>
                <p>
                    {Array(Math.floor(rating)).fill().map((_,i)=>(
                        <StarIcon key={i}/>
                    ))}
                
                </p>
                <p className='price'><small>$</small><strong >{price}</strong></p>
        </div>
        </Link>

    )
}
