import React, { useReducer } from "react";




const initialState = {
 items: []
}

const reducer = (state, action) => {




 if (action.type === 'ADD') {
   const existingItemIndex = state.items.findIndex(i => i.id === action.payload.id)
 const existingItem = state.items[existingItemIndex]
  let tempProducts = []

  if (!existingItem) {
    const updatedItems = state.items.concat(action.payload)
    return {
     items: updatedItems
    }
  }

  if (existingItem) {
  const updatedItems = state.items.filter(item => item.id !== action.payload.id)
  return {
   items: updatedItems
  }
  }


 }

 if (action.type === 'REMOVE') {
  const updatedItems = state.items.filter(item => item.id !== action.payload)
  return {
   items: updatedItems
  }
 }

 return initialState
}

export const WishlistContext = React.createContext({
 items: [],
 addItemToWishlist: (item) => {},
 removeItemFromWishList: (id) => {}
})



const WishListProvider = ({ children }) => { 
 const [state, dispatch] = useReducer(reducer, initialState)

 const addItemToWishlist = (item) => {

  dispatch({ type: 'ADD', payload: item })
 }

 const removeItemFromWishList = (id) => {
  dispatch({ type: 'REMOVE', payload: id })
 }


 const contextValue = {
  items: state.items,
  addItemToWishlist: addItemToWishlist,
  removeItemFromWishList: removeItemFromWishList
 }


 return <WishlistContext.Provider value={contextValue}>{children}</WishlistContext.Provider>
}

export default WishListProvider
