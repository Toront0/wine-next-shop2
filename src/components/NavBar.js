import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai'
import { CgHeart } from 'react-icons/cg'
import Modal from './Modal'
import { motion, AnimatePresence } from 'framer-motion'

const NavBar = ({ color }) => {
 const [open, setOpen] = useState(false)
 const [modalOpen, setModalOpen] = useState(false)
 const [navFixed, setNavFixed] = useState(false) 
  

 const onScroll = () => {
  if (window.scrollY > 400) {
    setNavFixed(true)
  } else {
    setNavFixed(false)
  }
 }

 useEffect(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', onScroll)
  }


 }, [])
  return (
    <header className={`${styles.header} ${open && styles.active} ${navFixed && styles.fixed}`}>
     <div className={styles.wrapper}>
      <button className={styles['menu-btn']} onClick={() => setOpen(prev => !prev)}>
       <motion.span className={`${styles.menu} ${(navFixed || open || color) && styles.active}`}
       initial={{ y: 0 }}
       animate={{ y: open ? -20 : 0 }}
       transition={{ duration: .2, ease: 'easeOut' }}
       >menu</motion.span>
       <motion.span className={`${styles.menu} ${(navFixed || open || color) && styles.active}`}
       initial={{ y: 10 }}
       animate={{ y: open ? -20 : 20 }}
       transition={{ duration: .2, ease: 'easeOut' }}
       >close</motion.span>
      </button>
      <Link href='/'>
       <a className={`${styles.logo} ${(navFixed || open || color) && styles.active}`}>buenos arte maria</a>
      </Link>
      <div className={`${styles.icons} ${(navFixed || open || color) && styles.active}`}>
       <div className={styles.user}>
        <button className='user-icon' onClick={() => setModalOpen(true)}>
         <AiOutlineUser />
        </button>
        {modalOpen && <Modal setModalOpen={setModalOpen}/>}
        </div>
        <Link href='/wishlist' passHref>
          <button className={styles.heart}>
          <CgHeart />
        </button>
        </Link>
        <Link href='/cart' passHref>
          <button>
          <AiOutlineShopping />
        </button>
        </Link>
      </div>
     </div>
      {open &&<nav className={styles.nav} key='nav-modal'>
          <div className={styles.backdrop} onClick={() => setOpen(false)}></div>
          <ul className={styles.links}>
            <li onClick={() => setOpen(false)}>
              <Link href='/'><a className={styles.link}>Home</a></Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href='products'><a className={styles.link}>Shop</a></Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href='contact'><a className={styles.link}>Contact</a></Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href='our-story'><a className={styles.link}>Our Story</a></Link>
            </li>
          </ul>
        </nav>}
    </header>
  )
}

export default NavBar