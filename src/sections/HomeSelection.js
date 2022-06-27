import React, { useState } from 'react'
import styles from './HomeSelection.module.css'
import Image from 'next/image'
import SecondaryButton from '../components/SecondaryButton'

import {  selectionData } from '../utils/constants'
import Carousel from '../components/Carousel'
import { motion } from 'framer-motion'

const HomeSelection = () => {
  const [value, setValue] = useState(0)




  const { title, price, slug } = selectionData[value]  
  return (
    <section className={styles.section}>
     <div className={`${styles.wrapper} container`}>
      <div className={styles['text-block']}>
       <h2 className='title'>We have a huge selection</h2>
       <p className="description">You can buy more than 2000 bottles of luxury wine from us. We sell the best bottles created from the purest grapes harvested in the fertile fields of Italy, France, Spain, Portugal and even South America. </p>
       <p className="description">The average aging time for one bottle of our wine is 5 years.</p>
       <p className="description">We produce more than 70% of the existing types of wine. Among them are dry, semi-dry, semi-sweet, sweet, strong, dessert, liqueur, flavored. To sweeten and enhance the taste, according to technology, we add honey and sugar.</p>
       <SecondaryButton href='shop'>view all</SecondaryButton>
      </div>
      <div className={styles['img-block']}>
        <Carousel setValue={setValue}>
          {selectionData.map(slide => {
          return <div className={styles.img}>
              <Image src={slide.img} alt='wine' width={300} height={450} objectFit='contain' />
            </div>
          })}
        </Carousel>
       <div className={styles.info}>
        <div className={styles.head}>
          <div className={styles['title-box']}>
          {selectionData.map((title, i) => {
          return <motion.h3
          initial={{ y:  0  }}
          animate={{ y: -(value * 34)  }}
          transition={{ duration: .45, ease: [.785,.135,.15,.86] }}
          >{title.title}</motion.h3>
          })}
          </div>
        </div>
        <div className={styles['price-box']}>
          {selectionData.map(price => {
          return <motion.span
          initial={{ y:  0  }}
          animate={{ y: -(value * 33.3)  }}
          transition={{ duration: .45, ease: [.785,.135,.15,.86] }}
            >€{price.price.toFixed(2)}</motion.span>
          })}
        </div>
        <SecondaryButton href={`products/${slug}`}>view details</SecondaryButton>
       </div>
      </div>
     </div>
    </section>
  )
}

export default HomeSelection