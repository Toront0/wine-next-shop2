import React from 'react'
import styles from './TextSection.module.css'

const TextSection = () => {
  return (
    <section className={styles.section}>
     <div className={`${styles.wrapper} container`}>
      <h3 className='title'>sustainability</h3>
      <p className="description">Newton’s sustainable practices consider the entire ecosystem, vines, animals, other plant species, soil life and type in order to minimize pests and diseases and foster a healthy symbiotic relationship between our vines and the environment. Avoiding commonly practiced short-term solutions, we adopt a long-term sustainable and balanced approach, farming all our land organically.</p>
     </div>
    </section>
  )
}

export default TextSection