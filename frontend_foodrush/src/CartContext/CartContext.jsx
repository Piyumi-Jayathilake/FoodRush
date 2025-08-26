import React, {createContext, useCallback, useContext, useEffect, useReducer} from 'react'

const CartContext = createContext();
//reducer handling cart action -> add,remove, update qantity and item
const cartReducer = (state,action) =>{
    switch (action.type){
        case 'ADD_ITEM':{
            const {item, quantity} = action.payload;
            const existingItem =state.find(i => i.id === item.id);
            if(existingItem){
                return state.map(i=> i.id === item.id ? {...i,quantity}:i)
            }
            return [...state, {...item, quantity}];
        }
        case 'REMOVE_ITEM': {
            return state.filter(i => i.id !== action.payload.itemId);
        }
        case 'UPDATE_QUANTITY': {
            const {itemId, newQuantity} = action.payload;
            return state.map(i => i.id === itemId ? {...i,quantity: Math.max(1, newQuantity)}:i)
        }
        default : return state;
    }
}
//Initiate cart from localstorage
const initializer = () =>{
    if (typeof window !== 'undefined'){
        const localcart = localStorage.getItem('cart');
        return localcart ? JSON.parse(localcart) : [];
    }
    return [];
}
export const CartProvider = ({children}) =>{
    const [cartItems,dispatch] = useReducer(cartReducer,[],initializer);
    //Presist cart state to localstorage
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartItems));
    },[cartItems]);
    //calculate total cost and total item
    const cartTotal = cartItems.reduce((total,item) =>total + item.price * item.quantity , 0);
    const totalItemsCount = cartItems.reduce((sum,item) => sum + item.quantity,0);
    //Format total items in power form
    const formatTotalItems =(num) =>{
        if (num>= 1000){
            return (num/1000).toFixed(1)+'k'
        }
        return num;
    }
    //Dispatcher wrapper with useCallback for performance
    const addToCart = useCallback((item,quantity) =>{
        dispatch({type:'ADD_ITEM', payload:{item,quantity}})
    },[dispatch])
    const removeFromCart = useCallback((itemId)=>{
        dispatch({type:'REMOVE_ITEM',payload:{itemId}})
    },[dispatch])

    const updateQuantity = useCallback((itemId,newQuantity)=>{
        dispatch({type:'UPDATE_QUANTITY',payload:{itemId,newQuantity}})
    },[dispatch])


    return(
        <CartContext.Provider value={{
           cartItems,
           addToCart,
           removeFromCart,
           updateQuantity,
           cartTotal,
           totalItems:formatTotalItems(totalItemsCount),
        }}>
            {children}
            </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext);
