import React, { useState } from 'react'
import styles from './SearchInput.module.css'
import { RiSearchLine } from 'react-icons/ri'
import { useFilterContext } from '../utils/filter-context'

const SearchInput = () => {
  const { filters: {text}, updateFilters } = useFilterContext()
  const [active, setActive] = useState(false)
  return (
    <div className={styles.search}>
     <div className={`${styles['search-box']} ${active && styles.active}`}>
      <input type="text" name='text' placeholder='Search' className={`${styles.input} ${active && styles.active}`} onChange={updateFilters} value={text}/>
      <button className={styles['search-icon']}  onClick={() => setActive(prev => !prev)}>
        <RiSearchLine/>
      </button>
     </div>
     </div>
  )
}

export default SearchInput