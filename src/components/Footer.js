import React from 'react'
import styles from './Footer.module.css'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import Link from 'next/link'

const Footer = () => {
  const onSubmit = (e) => {
    e.preventDefault()

    const value = e.target.email.value
    console.log(value)
    alert(`Your email: ${value}`)
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.contacts}>
          <li>
            <MdLocationPin /> Myasnitskaya Ulitsa, 58, Moscow, Russia 16758
          </li>
          <li>
            <MdLocationPin /> Malaya Bronnaya St, 8, Moscow, Russia 163141
          </li>
          <li>
            <FaPhoneAlt /> +7 (123) - 456 22 22
          </li>
          <li>
            <FaPhoneAlt /> +7 (928) - 444 00 00
          </li>
        </ul>
        <div className={styles.links}>
          <Link href='/'>
            <a className={styles.logo}>buenos arte maria</a>
          </Link>
          <div className={styles['nav-links']}>
            <Link href='/'>
              <a>home</a>
            </Link>
            <Link href='/products'>
              <a>shop</a>
            </Link>
            <Link href='/contact'>
              <a>contact</a>
            </Link>
            <Link href='/our-story'>
              <a>our story</a>
            </Link>
          </div>
        </div>
        <div className={styles.cta}>
          <h4>newsletter</h4>
          <form className={styles.form} onSubmit={onSubmit}>
            <input name='email' type='email' placeholder='your@email.com' />
            <button type='submit'>subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
