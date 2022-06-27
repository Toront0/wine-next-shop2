import React, { useState } from 'react'
import styles from './ProductFilter.module.css'
import { BsFilterLeft } from 'react-icons/bs'
import SearchInput from '../../components/SearchInput'
import { useFilterContext } from '../../utils/filter-context'
import { getUniqueValues } from '../../utils/helpers'
import { MdClose } from 'react-icons/md'

const ProductFilter = ({ setSearchValue }) => {
 const { sort, updateSort, all_products, filtered_products,  filters: {country, category, year, min_price, price, max_price}, updateFilters, clearFilters } = useFilterContext()
 const [active, setActive] = useState(false) 

 const categories = getUniqueValues(all_products, 'type')
 const years = getUniqueValues(all_products, 'year')
 const countries = getUniqueValues(all_products, 'country')
  return (
    <div className={styles.main}>
     <div className={`${styles.wrapper} lg-container`}>
      <h3 className={styles.title}>Products <span className={styles.quantity}>({filtered_products.length})</span> </h3>
      <div className={styles.filter}>
       <div className={styles.btns}>
        <button className={styles['filter-icon']} onClick={() => setActive(prev => !prev)}><BsFilterLeft /></button>
        {active && <div className={styles['filter-wrapper']}>
        <div className={styles.categories}>
          <div className={styles['category-head']}>
            <h4 className={styles['filter-title']}>Type</h4>
            <button type='button' onClick={() => setActive(false)}>
              <MdClose />
            </button>
          </div>
          <div className={styles['filter-btns']}>
            {categories.map((c, i) => {
              return <button key={i} name='category' type='button' className={category === c.toLowerCase() ? styles['active-btn'] : null} onClick={updateFilters}>{c}</button>
            })}
          </div>
        </div>
        <div className={styles.countries}>
            <h4 className={styles['filter-title']}>Country</h4>
            <div className={styles['filter-btns']}>
            {countries.map((t, i) => {
              return <button key={i} name='country' type='button' className={country === t.toLowerCase() ? styles['active-btn'] : null} onClick={updateFilters}>{t}</button>
            })}
          </div>
        </div>
        <div className={styles.years}>
            <h4 className={styles['filter-title']}>Years</h4>
            <ul className={`${styles['filter-btns']} ${styles['filter-years']}`}>
            {years.map((y, i) => {
              return <li key={i}>
                <button name='year' type='button' className={year === y ? styles['active-btn'] : null} onClick={updateFilters}>{y}</button>
              </li>
            })}
          </ul>
        </div>
        <div className={styles.price}>
          <h4 className={styles['filter-title']}>Price</h4>
          <p>€{price.toFixed(2)}</p>
          <input type="range" name="price" min={min_price} max={max_price} value={price} onChange={updateFilters} />
        </div>
        <div className={styles['clear-btn']}>
          <button type='button' onClick={() => clearFilters()}>Clear filters</button>
        </div>
        </div>}
       </div>
       <div className={styles['additional-filter']}>
        <label htmlFor='sort' className={styles.label}>Sort by:</label>
        <select name="sort" id="sort" className={styles.select} value={sort} onChange={updateSort} >
          <option value="price-lowest">Price (lowest)</option>
          <option value="price-highest">Price (highest)</option>
          <option value="name-a">Name (A-Z)</option>
          <option value="name-z">Name (Z-A)</option>
        </select>
        <SearchInput/>
       </div>
      </div>
     </div>
    </div>
  )
}

export default ProductFilter