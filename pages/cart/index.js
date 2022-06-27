import React from 'react'
import NavBar from '../../src/components/NavBar'
import Items from '../../src/sections/Cart/Items'


const CartPage = () => {
  return (
    <>
     <NavBar />
     <main>
      <Items />
     </main>
    </>
  )
}

export default CartPage