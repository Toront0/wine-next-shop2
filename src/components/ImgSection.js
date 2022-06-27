import React from 'react'
import styles from './ImgSection.module.css'
import Image from 'next/image'
import SecondaryButton from './SecondaryButton'
import { motion } from 'framer-motion'

const textAnimation = {
  animate: {
    x: 0,
    opacity: 1
  }
}

const imgAnimation = {
  animate: {
    x: 0,
    opacity: 1
  }
}


const ImgSection = ({ className, href, title, description, img, btn, textOrder }) => {
  return (
    <section className={`${styles.section} ${className}`}> 
     <div className={`${styles.wrapper} container`}>
      <motion.div className={`${styles['text-block']} ${textOrder}`}
      variants={textAnimation}
      initial={{ x: textOrder ? '100' : '-100', opacity: 0 }}
      whileInView='animate'
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 1, ease: 'circOut' }}
      >
       <h2 className='title'>{title}</h2>
       {description}
       {href && <SecondaryButton href={href}>{btn}</SecondaryButton>}
      </motion.div>
      <motion.div className={styles['img-block']}
      variants={imgAnimation}
      initial={{ x: textOrder ? '-100' : '100', opacity: 0 }}
      whileInView='animate'
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 1, ease: 'circOut' }}
      >
       <Image src={img} alt='our-sotry img' layout='fill' objectFit='cover' placeholder='blur' />
      </motion.div>
     </div>
    </section> 
  )
}

export default ImgSection