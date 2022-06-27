import React from 'react'
import Image from 'next/image'
import styles from './PageHeader.module.css'

const PageHeader = ({ img, title }) => {
  return (
    <div className={styles.wrapper}>

      <Image src={img} alt={title} layout='fill' objectFit='cover' />
     
     <h3 className={styles.title}>{title}</h3>
    </div>
  )
}

export default PageHeader