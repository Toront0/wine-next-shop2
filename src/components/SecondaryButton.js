import React from 'react'
import styles from './SecondaryButton.module.css'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

const SecondaryButton = ({ children, href, hasArrow }) => {
  return (
  <Link href={href} passHref>
   <button className={styles.button}>
    {children}
    {hasArrow && <BsArrowRight />}
   </button>
  </Link>
  )
}

export default SecondaryButton