import React, { useState, useEffect, Children, cloneElement } from 'react'
import styles from './Carousel.module.css'

const PAGE_WIDTH = 490

const Carousel = ({ children, setValue }) => {
 const [pages, setPages] = useState([])
 const [offset, setOffset] = useState(0)
 const [active, setActive] = useState(0)

 useEffect(() => {
  setPages(

   Children.map(children, child => {
    return cloneElement(child, {
     style: {
      height: '100%',
      minWidth: `${PAGE_WIDTH}px`,
      maxWidth: `${PAGE_WIDTH}px`
     }
    })
   })

  )
 }, [])


 const nextSlide = () => {
  setOffset((currentOffset) => {

   const newOffset = currentOffset - PAGE_WIDTH
   const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
   return Math.max(newOffset, maxOffset)

  })
  setActive(active + 1)
  setValue(prev => prev + 1)
 }

 const prevSlide = () => {
  setOffset(currentOffset => {
    const newOffset = currentOffset + PAGE_WIDTH

    return Math.min(newOffset, 0)
  })
  setActive(active - 1)
  setValue(prev => prev - 1)

 }
  return (
    <div className={styles.main}>
     <button className={`${styles.button} ${styles.prev}`} onClick={prevSlide} disabled={offset === 0} >prev</button>
     <div className={styles.window}>
      <div className={styles['all-pages']}
      style={{
        transform: `translateX(${offset}px)`
      }}
      >
       {pages}
      </div>
     </div>
     <button className={`${styles.button} ${styles.next}`} onClick={nextSlide} disabled={active === pages.length - 1}>next</button>
    </div>
  )
}

export default Carousel