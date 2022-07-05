import React from 'react'
import dynamic from 'next/dynamic'
import NavBar from '../../src/components/NavBar'
import styles from '../../styles/pages/Wishlist.module.css'

const ListItems = dynamic(() => import('../../src/sections/Wishlist/ListItems'), { ssr: false })

const index = () => {
  return (
    <>
     <NavBar />
     <main className={styles.wishlist}>
      <ListItems />
     </main>
    </>
  )
}

export default index