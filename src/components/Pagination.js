import React from 'react'
import styles from './Pagination.module.css'

const Pagination = ({ totalProducts, productsPerPage, paginate, currentPage }) => {
 const pageNumbers = []

 for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
  pageNumbers.push(i)
 }

  return (
    <div className={styles.pagination}>
     <div  className={styles.list}>
      {pageNumbers.map(number => {
       return<button key={number} className={`${styles.item} ${currentPage === number && styles.active}`}  onClick={() => paginate(number)}>{number}</button>
       
      })}
     </div>
    </div>
  )
}

export default Pagination