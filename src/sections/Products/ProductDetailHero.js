import React, { useState, useContext, useEffect } from 'react'
import styles from './ProductDetailHero.module.css'
import Image from 'next/image'
import ProductRating from '../../components/ProductRating'
import { Toaster } from 'react-hot-toast'
import { MdClose } from 'react-icons/md'

import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { CartContext } from '../../utils/cart-context'

const ProductDetailHero = ({ item }) => {
  const { addItemToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  const [current, setCurrent] = useState(0)
  const [showSlider, setShowSlider] = useState(false)

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity <= 1) {
      setQuantity(1)
      return 
    }

    setQuantity(quantity - 1)
  }

  const prevSlide = () => {
    if (current <= 0) {
      setCurrent(0)
      return
    }
    setCurrent(prev => prev - 1)
  }

  const nextSlide = () => {
    setCurrent(prev => prev + 1)
  }

  const addItemToCartHandler = amount => {
    addItemToCart({
      img: item.imgs[0],
      amount: amount,
      price: item.price,
      title: item.title,
      id: item.id
    })
  }



  
  return (
    <section className={styles.section}>
      <div><Toaster position='top right'/></div>
     <div className={`${styles.wrapper} container`}>
      <div className={styles['img-block']} onClick={() => setShowSlider(true)}>
       <Image src={item.imgs[0]} alt='Wine' layout='fill' objectFit='contain'  />
      </div>
      <div className={styles['text-block']}>
       <h2 className={styles.title}>{item.title || 'Some title'}</h2>
        <ProductRating />
        <ul className={styles.types}>
         <li>Category: {item.type}</li>
         <li>Taste:	dry</li>
         <li>Vintage:	2020</li>
         <li>Country:	{item.country}</li>
         <li>Region:	Vinho Verde (PT)</li>
         <li>Bottle size in L:	0.75</li>
        </ul>
        <span className={styles.price}>€{item.price.toFixed(2)}</span>
        <div className={styles.buttons}>
         <div className={styles.quantity}>
          <div className={styles['quantity-buttons']}>
           <button className={styles.minus} type='button' onClick={decrement}>
           -
          </button>
          <span className={styles['quantity-title']}>{quantity}</span>
          <button className={styles.plus} type='button' onClick={increment}>
           +
          </button>
          </div>
         </div>
         <button className={styles.submit} onClick={() => addItemToCartHandler(quantity)}>add to cart</button>
        </div>
        
      </div>
      {showSlider && <div className={styles.slider}>
        <div className={styles.backdrop} onClick={() => setShowSlider(false)}></div>
          <div className={styles['count-slide']}>{current + 1} / {item.imgs.length}</div>
          <div className={styles.slide}>
            {item.imgs.map((img, i) => {
              return <div className={styles['slide-img']}>
                {current === i && <Image src={img} alt={item.title} layout='fill' objectFit='contain' />}
              </div>
            })}
          </div>
            <button className={styles['arrow-left']} onClick={prevSlide} disabled={current === 0}>
              <BsFillArrowLeftSquareFill />
            </button>
            <button className={styles['arrow-right']} onClick={nextSlide} disabled={current === item.imgs.length - 1}>
              <BsFillArrowRightSquareFill />
            </button>
            <button className={styles['close-btn']} onClick={() => setShowSlider(false)}>
              <MdClose />
            </button>
      </div>}
     </div>
    </section>
  )
}

export default ProductDetailHero