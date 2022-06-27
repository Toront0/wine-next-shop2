import React, { useContext, useState } from 'react'
import styles from './ListItems.module.css'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
import { WishlistContext } from '../../utils/wishlist-context'

import SecondaryButton from '../../components/SecondaryButton'
import PrimaryButton from '../../components/PrimaryButton'
import { motion } from 'framer-motion'
import SearchInput from '../../components/SearchInput'

const ListItems = () => {
  const {items, removeItemFromWishList} = useContext(WishlistContext)
  const [active, setActive] = useState(false)
  
  if (items.length === 0) {
    return <section className={styles.section}>
      <div className={`${styles.box} sm-container`}>
        <h2>You have no items in your wishlist</h2>
        <PrimaryButton href='products'>Fill it</PrimaryButton>
      </div>
    </section>
  }



  return (
    <section className={styles.section}>
     <div className={`${styles.wrapper} sm-container`}>
      <h2 className={styles.title}>Wishlist</h2>
       <SearchInput active={active} setActive={setActive}/> 
       <div className={styles.items}>
         {items.map(item => {
           return <Item key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} removeItemFromWishList={removeItemFromWishList} />
         })}
       </div>
     </div>
    </section>
  )
}

export default ListItems

const Item = ({ img, title, price, id, removeItemFromWishList }) => {
 return (
  <div className={styles.item}>
   <div className={styles.img}>
    <Image src={img} alt={title} layout='fill' objectFit='contain' />
   </div>
   <div className={styles.info}>
    <div className={styles.head}>
     <h4>{title}</h4>
     {/* <ProductRating /> */}
     <span className={styles.price}>€{price.toFixed(2)}</span>
    </div>
    <div className={styles.buttons}>
     <SecondaryButton hasArrow href='products'>details</SecondaryButton>
     <button className={styles.heart} onClick={() => removeItemFromWishList(id)}>
      <FaHeart />
      <span>Remove</span>
     </button>
    </div>
   </div>
  </div>
 )
}