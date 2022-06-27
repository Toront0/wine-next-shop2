import React from 'react'
import styles from './HomeHero.module.css'
import PrimaryButton from '../components/PrimaryButton'
import icon from '/public/alcohol.png'
import icon2 from '/public/grape.png'
import icon3 from '/public/pickup-truck.png'

import img from '/public/images/wine.png'
import Image from 'next/image'
import Link from 'next/link'
import heroBg from '/public/images/hero-flowers.png'


const HomeHero = () => {




  return (
    <section className={styles.section}>
     <div className={`${styles.wrapper} container`}>
      <div className={styles['text-block']}>
        <div className={styles.subtitle}>
          <span className={styles.line}></span> 
          <h2> exelent wine </h2>
          <span className={styles.line}></span> 
        </div>
       <h1 className={styles.title}>“Music is the wine that fills the cup of silence.”</h1>
       <div className={styles.buttons}>
        <PrimaryButton href='products'>Explore</PrimaryButton>
        <Link href='our-story' passHref>
          <button className={styles.button}>our story</button>
        </Link>
       </div>
       <div className={styles.advantages}>
        <div className={styles.item}>
          <Image src={icon2} alt='grape icon' width={100} height={80} objectFit='contain' priority />
          <h4>Only natural ingredients</h4>
        </div>
        <div className={styles.item}>
          <Image src={icon} alt='grape icon' width={100} height={70} objectFit='contain' priority />
          <h4>Big choice</h4>
        </div>
        <div className={styles.item}>
          <Image src={icon3} alt='grape icon' width={100} height={80} objectFit='contain' priority />
          <h4>Worldwide shipping</h4>
        </div>
       </div>
      </div>
      <div className={styles['img-block']}>
        <Image src={img} alt="wine photo" width={500} height={700} objectFit='cover' priority />
        <div className={styles.flowers}>
          <Image src={heroBg} alt="wine photo" width={450} height={450} />
        </div>
      </div>
      <h4 className={styles.scroll}>Scroll down for more</h4>
     </div>
    </section>
  )
}

export default HomeHero