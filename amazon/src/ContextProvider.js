import React, {useState,createContext,useContext,useEffect} from 'react'
import {getProductsFromSessionStorage,calculateTotalPrice,calculateTotalCartItems} from './helpers';

export const Context= createContext()

export const ContextProvider=({children})=>{
    const [cartTotal, setCartTotal] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [currentUser,setCurrentUser]=useState({})
    
    useEffect(() => {
            const products = getProductsFromSessionStorage()
            products &&  setCartTotal(calculateTotalCartItems(products))
            products &&  setTotalPrice(calculateTotalPrice(products))
        },[])
    useEffect(() => {
        try{
            const user =JSON.parse(window.sessionStorage.getItem('user'))
            setCurrentUser(user)
        }catch{
            console.log('your are not signed in')
        }
    },[])
    const value={
        cartTotal,
        setCartTotal,
        totalPrice,
        setTotalPrice,
        currentUser,
        setCurrentUser,
    }
    
    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
  
}

export const useContextValue=()=>useContext(Context) // custom Hook