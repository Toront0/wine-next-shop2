import React from 'react'
import styles from './ProductDescription.module.css'

const ProductDescription = ({ item }) => {
  return (
    <section className={styles.section}>
     <div className="container">
      <h3 className="title">Description</h3>
      <p className="description">{item.description}</p>
     </div>
    </section>
  )
}

export default ProductDescription