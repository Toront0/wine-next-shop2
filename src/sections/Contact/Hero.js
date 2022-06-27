import React, { useState } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()

    if (!name) {
      setError(true)
      return
    }


    alert(`Your name: ${name}     Your lastname: ${lastname}     Your email: ${email}     Your message: ${message}`)
    setName('')
    setLastname('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className={styles.section}>
     <div className={`${styles.wrapper} sm-container`}>
      <div>
       <h3 className={styles['form-title']}>You can contact with us directly </h3>
       <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.input}>
         <label htmlFor="">Your firstname</label>
         <input type="name" name='name' value={name} onChange={e => setName(e.target.value)} className={error && styles.error} />
        </div>
        <div className={styles.input}>
         <label htmlFor="">Your lastname</label>
         <input type="name" name='lastname' value={lastname} onChange={e => setLastname(e.target.value)} />
        </div>
        <div className={styles.input}>
         <label htmlFor="">Your email</label>
         <input type="email" name='email' value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className={styles.input}>
         <textarea placeholder='Your Message' name='message' value={message} onChange={e => setMessage(e.target.value)} />
        </div>
        <div className={styles.button}>
         <button type='submit'>send the message</button>
        </div>
      </form>
      </div>
      <div className={styles.info}>
       <h3 className={styles['info-title']}>To contact a representative, discover our products or even just to talk wine, we’re here for you.</h3> 
       <InfoItem title='Moscow' address1='Malaya Bronnaya St, 8, Moscow, Russia 163141' address2='Myasnitskaya Ulitsa, 58, Moscow, Russia 16758' number1='+7 (123) - 456 22 22' number2='+7 (928) - 444 00 00' />
       <InfoItem title='Monreal' address1='Malaya Bronnaya St, 8, Moscow, Russia 163141' address2='Myasnitskaya Ulitsa, 58, Moscow, Russia 16758' number1='+7 (123) - 456 22 22' number2='+7 (928) - 444 00 00' />
      </div>
     </div>
    </section>
  )
}

export default Hero

const InfoItem = ({ title, address1, address2, number1, number2 }) => {
 return (
  <div className={styles['info-item']}>
   <h4 className={styles['item-title']}>{title}</h4>
   <p>{address1}</p>
   <p>{address2}</p>
   <p>{number1}</p>
   <p>{number2}</p>
  </div>
 )
}