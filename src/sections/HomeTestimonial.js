import React, { useState } from 'react'
import styles from './HomeTestimonial.module.css'
import Image from 'next/image'

import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import { testimonialData } from '../utils/constants'


const HomeTestimonial = () => {
  const [active, setActive] = useState(0)

  const prevSlide = () => {
    setActive(active === 0 ? testimonialData.length - 1 : active - 1)
  }

  const nextSlide = () => {
    setActive(active === testimonialData.length - 1 ? 0 : active + 1)
  }

  const { name, testimonial, city, img } = testimonialData[active]

  return (
    <section className={styles.section}>
     <div className={`${styles.wrapper} container`}>
      <div className={styles['text-block']}>
       <h2 className="title">what people say about us</h2>
       <p className="description">You can buy more than 2000 bottles of luxury wine from us. We sell the best bottles created from the purest grapes harvested in the fertile fields of Italy, France, Spain, Portugal and even South America.</p>
       <p className="description">The average aging time for one bottle of our wine is 5 years.</p>
       <p className="description">We produce more than 70% of the existing types of wine. Among them are dry, semi-dry, semi-sweet, sweet, strong, dessert, liqueur, flavored. To sweeten and enhance the taste, according to technology, we add honey and sugar.</p>
      </div>
      <div className={styles['testimonial-block']}>
       <div className={styles.slider}>
         <div className={styles.head}>
          <button onClick={prevSlide}><IoIosArrowBack /></button>
          <Image src={img} alt='man' objectFit='contain' width={160} height={160} />
          <button onClick={nextSlide}><IoIosArrowForward /></button>
         </div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.testimonial}>{testimonial}</p>
          <p className={styles.city}>{city}</p>
       </div>
      </div>
     </div>
    </section>
  )
}

export default HomeTestimonial