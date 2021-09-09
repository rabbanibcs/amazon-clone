import './css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Link} from "react-router-dom";
import { useContextValue } from './ContextProvider';

export default function Header() {
    const {cartTotal,setCartTotal,currentUser}=useContextValue()
    const signOut=()=>{
        window.sessionStorage.clear()
        setCartTotal(0)
    }
    return (
        <div className='header'>  
            
<Link className='header__logo__link' to="/"><img className='header__logo' src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" alt="" /></Link>
            <div className="header__option__start">
                <LocationOnOutlinedIcon style={{ color: 'white',marginBottom: 5 }}/>
                <div className='header__option'>
                    <p>Deliver to</p>
                    <h4>Bangladesh</h4>
                </div>
            </div>
            <div className="header__search">
                <input type="text" />
                <SearchIcon fontSize="large" className='header__search__icon'/>
            </div>
            {currentUser?
            <div onClick={signOut} className="header__option">
                <p>Hello,{currentUser.name?.split(' ').slice(-1)[0] }</p>
                <h4>Sign Out</h4>
            </div>:
            <Link className="header__option" to='/signin/'>
                <p>Hello,Sign In</p>
                <h4>Account & Lists</h4>
            </Link>}
            
            <div className="header__option">
                <p>Returns</p>
                <h4>& Orders</h4>
            </div>
            <Link to='/cart' className="header__option__end">
                <ShoppingBasketIcon fontSize="large" />  
                <div className="header__option__cart">
                <p>{cartTotal}</p>
                <h4>Cart</h4>
                </div>       
            </Link>
             
        </div>
    )
}
