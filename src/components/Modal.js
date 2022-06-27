import React, { useState } from 'react'
import styles from './Modal.module.css'
import SignIn from './SignIn'
import { MdClose } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { supabaseAdmin } from '../utils/supabaseAdmin'

const Modal = ({ setModalOpen }) => {
  console.log(supabaseAdmin.auth.user())
  async function signIn(event) {
    event.preventDefault()
    const email = event.target.email.value
    // const username = event.target.username.value
    await supabaseAdmin.auth.signIn({ email })
    // const { data, error } = await supabaseAdmin
    // .from('users')
    // .insert([
    //   { username: username, email: email },
    // ])
   setModalOpen(false)
  }
  return (
        <SignIn selector="#modal">
          <div className={styles.backdrop} onClick={() => setModalOpen(false)}></div>
            <div className={styles.modal}>
              <div className={styles.wrapper}>
               <div className={styles.titles}>
                <h3 className={styles.title}>Sign In</h3>
               </div>
              <form onSubmit={signIn}>
              {/* <div className={styles.input}>
                <label htmlFor="username">Your name</label>
                <input type="name" name='username' id='username' />
              </div> */}
              <div className={styles.input}>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' />
              </div>
            <button type='button' className={styles.google}><FcGoogle /> Sign in with google</button>

                <button type='submit' className={styles.submit}>sign-in</button>
                
              </form>
              </div>
             <button className={styles.close} onClick={() => setModalOpen(false)}>
              <MdClose />
             </button>
            </div>
        </SignIn>
  )
}

export default Modal