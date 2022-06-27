import React, { useContext } from 'react'
import styles from './Items.module.css'
import Image from 'next/image'
import PrimaryButton from '../../components/PrimaryButton'
import { MdClose } from 'react-icons/md'
import { CartContext } from '../../utils/cart-context'

import { motion, AnimatePresence } from 'framer-motion'

const Items = () => {
  const {items, removeItemFromCart} = useContext(CartContext)

  const totalAmountInCart = items.reduce((acc, i) => {
    return acc + i.price
  }, 0 )


  if (items.length < 1) {
    return <section className={styles.section}>
      <div className={styles.box}>
        <h2>Your cart is empty</h2>
        <PrimaryButton href='products'>fill it</PrimaryButton>
      </div>
    </section>
  }



  return (
    <section className={styles.section}>
      <div className={`${styles.wrapper} container`}>
        <h3 className="title">Your cart</h3>
        <div className={styles.types}>
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
        </div>
        <div className={styles.info}>
          <div className={styles.items}>
            <AnimatePresence>
          {items.map((item, i) => {
            return <Item key={i} removeItemFromCart={removeItemFromCart} id={item.id} img={item.img} title={item.title} quantity={item.amount} price={item.price} />
          })}
          </AnimatePresence>
        </div>
        <div className={styles['info-head']}>
          <h3>total payment</h3>
          <span>€{totalAmountInCart.toFixed(2)}</span>
        </div>
        <div className={styles.button}>
          <button>Checkout</button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Items

const Item = ({ img, title, quantity, price, id, removeItemFromCart }) => {
  return  <motion.div className={styles.item}
  initial={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: .2, ease: 'easeOut' }}
  >
    <div className={styles['img-block']}>
      <div className={styles.img}>
        <Image src={img} alt={title} objectFit='contain' width={57} height={100} />
      </div>
       <h3 className={styles['item-title']}>{title}</h3>
    </div>
      <span className={styles.quantity}>{quantity}</span>
      <span className={styles.price}>€{price.toFixed(2)}</span>
      <button onClick={() => removeItemFromCart(id)} className={styles['item-button']}>
        <MdClose />
      </button>
  </motion.div>
}