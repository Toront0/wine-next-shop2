import React from 'react'
import Link from 'next/link'
import styles from './PrimaryButton.module.css'
import { BsArrowRight } from 'react-icons/bs'

const PrimaryButton = ({ children, href, type, onClick }) => {
  return (
   <Link href={href} passHref>
    <button className={styles.button} type={type || 'button'} onClick={onClick} >
     {children}
     <BsArrowRight />
    </button>
   </Link>
  )
}

export default PrimaryButton