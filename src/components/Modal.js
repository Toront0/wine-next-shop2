import React from 'react'
import styles from './Modal.module.css'
import ModalPortal from './ModalPortal'
import { MdClose } from 'react-icons/md'
import { motion } from 'framer-motion'
import { AiFillWarning } from 'react-icons/ai'

const dropUp = {
  initial: {
    y: '100vh',
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .2,
      ease: 'easeOut'
    }
  },
  exit: {
    y: '-100vh',
    opacity: 0
  }
}


const Modal = ({ setModalOpen }) => {

  return (
        <ModalPortal selector="#modal" key='sign-in'>
            <motion.div className={styles.backdrop} onClick={() => setModalOpen(false)}
            key='backdrop'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .2, ease: 'linear' }}
            >
              <motion.div className={styles.modal}
              key='modalOpen'
              onClick={(e) => e.stopPropagation()}
              variants={dropUp}
              initial='initial'
              animate='animate'
              exit='exit'
              >
              <div className={styles.info}>
                <AiFillWarning />
                <p className={styles.text}>All products on this website are not real and to protect the user there is no real payment</p>
              </div>
             <button className={styles.close} onClick={() => setModalOpen(false)}>
              <MdClose />
             </button>
            </motion.div>
            </motion.div>
        </ModalPortal>
  )
}

export default Modal