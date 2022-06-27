import React, { useReducer } from "react";
import { toast } from "react-hot-toast";

export const CartContext = React.createContext({
 items: [],
 totalAmount: 0,
 addItemToCart: () => {},
 removeItemFromCart: () => {}
})

const initialState = {
 items: [],
 totalAmount: 0
}

const reducer = (state, action) => {
 if (action.type === 'ADD') {
  const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id)
  const existingItem = state.items[existingItemIndex]
  let updatedItems

  if (existingItem) {
   const updatedItem = {
    ...existingItem,
    amount: existingItem.amount + action.payload.amount
   }
   updatedItems = [...state.items]
   updatedItems[existingItemIndex] = updatedItem
   toast.error('Product already is in your cart, but quantity has changed', {
    style: {
      borderRadius: '4px',
      background: '#18181b',
      color: '#F0E7DB',
    },
   })
  } else {
   updatedItems = state.items.concat(action.payload)
   toast.success('Product added to your cart', {
    style: {
      borderRadius: '4px',
      background: '#18181b',
      color: '#F0E7DB',
    },
   })
  }


  const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
  return {
   items: updatedItems,
   totalAmount: updatedTotalAmount
  }
 }

 if (action.type === 'REMOVE') {
  const updatedItems = state.items.filter(item => item.id !== action.id)
  return {
   items: updatedItems
  }
 }

 return initialState
}

const CartContextProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initialState)


 const addItemToCart = (item) => {
  dispatch({ type: 'ADD', payload: item })
  console.log(item)
 }

 const removeItemFromCart = (id) => {
  dispatch({ type: 'REMOVE', id: id })
 }


 const cartContext = {
  items: state.items,
  totalAmount: state.totalAmount,
  addItemToCart: addItemToCart,
  removeItemFromCart: removeItemFromCart
 }


 return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContextProvider