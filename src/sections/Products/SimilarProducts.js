import React, { useState, useEffect } from 'react'
import styles from './SimilarProducts.module.css'
import Image from 'next/image'
import Link from 'next/link'

const SimilarProducts = ({ item, items }) => {


  return (
    <section className={styles.section}>
     <div className={`${styles.wrapper} container`}>
      <h2 className="title">You may also like</h2>
      <div className={styles.items}>
        {items?.filter(p => p.type === item.type && p.id !== item.id).slice([0], [3]).map(p => <Item key={p.id} title={p.title} img={p.imgs[0]} slug={p.slug} category={p.type}/>)}
      </div>
     </div>
    </section>
  )
}

export default SimilarProducts

export const Item = ({ img, title, slug, category }) => {
 return <Link href={`/products/${slug}`}>
  <div className={styles.item}>
    <div className={styles['img-block']}>
    <div className={styles.img}>
    <Image src={img} alt={title} layout='fill' objectFit='contain' />
    </div>
    </div>
      <div className={styles.info}>
        <h3 className={styles['item-title']}>{title}</h3>
        <div className={styles['item-types']}>
        <span>Type:	{category} wine</span>
        <span>Taste:	dry</span>
        </div>
      </div>
  </div>
 </Link>
}