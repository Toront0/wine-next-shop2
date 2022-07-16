import React from 'react'
import dynamic from 'next/dynamic'
import NavBar from '../../src/components/NavBar'
import styles from '../../styles/pages/Cart.module.css'
import Head from 'next/head'

const Items = dynamic(() => import('../../src/sections/Cart/Items'), {
  ssr: false,
})

const CartPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Cart payment page' />
      </Head>
      <NavBar />
      <main className={styles.cart}>
        <Items />
      </main>
    </>
  )
}

export default CartPage
