import React from 'react'
import NavBar from '../../src/components/NavBar'
import ListItems from '../../src/sections/Wishlist/ListItems'

const index = () => {
  return (
    <>
     <NavBar />
     <main>
      <ListItems />
     </main>
    </>
  )
}

export default index