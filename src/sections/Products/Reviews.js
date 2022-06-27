import React, { useState, useEffect } from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import { supabaseAdmin } from '../../utils/supabaseAdmin'
import styles from './Reviews.module.css'

const Reviews = ({ comment }) => {
  console.log(comment)

  return (
    <section className={styles.section}>
     <div className={`${styles.wrapper} container`}>
      <h2 className="title">Reviews</h2>
      <div className={styles.reviews}>
       {comment.map(c => {
         return <Review key={c.id} name={c.name} date={c.created_at} content={c.content} />
       })}
       {comment.length === 0 && <div className={styles['no-comments']}><h3>There's no any comments yet</h3></div>}
      </div>
      <form className={styles.form}>
      <textarea placeholder='Your Message' />
      <div className={styles.button}>
       <PrimaryButton href='contact'>send the message</PrimaryButton>
      </div>
      </form>
     </div>
    </section> 
  )
}

export default Reviews

export const Review = ({ name, date, content }) => {
 return <div className={styles.review}>
  <div className={styles['review-head']}>
   <h4 className={styles.name}>{name}</h4>
   <span className={styles.date}>{date}</span>
  </div>
  <p className={styles.message}>{content}</p>
 </div>
}