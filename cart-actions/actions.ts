import { Product } from "../types/products";


//additems in a cart
export const addToCart = (product: Product) => {
    const cart:Product[] = JSON.parse(localStorage.getItem('cart') || '[]');//items to be added to cart are stored in local storage
    const existingProductIndex=cart.findIndex((item)=>item._id===product._id);
    if(existingProductIndex>-1){
        cart[existingProductIndex].inventory+=1;
}
else {
    cart.push({...product,inventory:1});
}
localStorage.setItem('cart',JSON.stringify(cart));
}

//remove from cart
export const removeFromCart = (productId:number)=>{
    let cart:Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    cart=cart.filter(item => item._id!==productId);
    localStorage.setItem('cart',JSON.stringify(cart));
}

//update cart
export const updateCart = (productId:number,quantity:number)=>{
    const cart:Product[]=JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex=cart.findIndex((item)=>item._id===productId);
if(productIndex>-1){
    cart[productIndex].inventory=quantity;
    localStorage.setItem('cart',JSON.stringify(cart));
    
}
}

export const getCartItems=():Product[]=>{
    return JSON.parse(localStorage.getItem('cart') || '[]');
}