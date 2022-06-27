import React from 'react'
import styles from './ProductRating.module.css'
import { AiFillStar } from 'react-icons/ai'

const ProductRating = () => {
  return (
  <div className={styles.rating}>
   <AiFillStar />
   <AiFillStar />
   <AiFillStar />
   <AiFillStar />
   <AiFillStar />
   <h4 className={styles.review}>1 reviews</h4>
   </div>
  )
}

export default ProductRating