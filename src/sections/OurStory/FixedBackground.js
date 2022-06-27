import React from 'react'
import styles from './FixedBackground.module.css'

const FixedBackground = () => {
  return (
    <section className={styles.section}>
     <div className={styles.img}></div>
     <h2 className={styles.title}>“Accept what life offers you and try to drink from every cup. All wines should be tasted; some should only be sipped, but with others, drink the whole bottle.”</h2>
     {/* <Image src={img} alt='img' layout='fixed' objectFit='cover' className={styles.img} /> */}
    </section>
  )
}

export default FixedBackground