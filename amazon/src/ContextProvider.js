import React, {useState,createContext,useContext,useEffect} from 'react'

export const Context= createContext()

export const ContextProvider=({children})=>{
    const [cartTotal, setCartTotal] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [currentUser,setCurrentUser]=useState({})
    
    useEffect(() => {
        var priceArray=[]
            const products =JSON.parse(window.sessionStorage.getItem('products'))
            products &&  setCartTotal(products.length)
            priceArray = products?.map((product)=>parseFloat(product.price))
            setTotalPrice(priceArray?.reduce((a,b)=>a+b,0))
        })
    useEffect(() => {
        try{
            const user =JSON.parse(window.sessionStorage.getItem('user'))
            setCurrentUser(user)
        }catch{
            console.log('your are not signed in')
        }
    })
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