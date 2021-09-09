import './css/Menu.css'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
export default function Menu({controlDrawer}) {
    return (
        <div className='menu'>           
          <h6 onClick={controlDrawer} className='nemu__all'> <MenuIcon/>All</h6> 
          <h6 className='menu__option'>Today's Deals</h6>
          <h6 className='menu__option'>Customer Service</h6>
          <h6 className='menu__option'>Gift cards</h6>
          <h6 className='menu__option'>Registry</h6>
          <h6 className='menu__option'>Sell</h6>
        </div>
    )
}
