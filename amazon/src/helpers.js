
export const getProductsFromSessionStorage=()=>{
    var products =JSON.parse(window.sessionStorage.getItem('products'))
    return products

}
export const setPorductsSession=(products)=>{
    window.sessionStorage.setItem('products' , JSON.stringify(products))
}
export const calculateTotalCartItems=(products)=>{
    var itemsArray = products?.map((product)=>parseFloat(product.quantity))
    var total=itemsArray.reduce((a,b)=>a+b,0)
    return total
}
export const calculateTotalPrice=(products)=>{
    var priceArray = products?.map((product)=>parseFloat(product.price*product.quantity))
    var total=priceArray.reduce((a,b)=>a+b,0)
    return total
}


























