import React, { useState, useEffect } from 'react'
import NavBar from '../../src/components/NavBar'
import styles from '../../styles/pages/Products.module.css'
import dynamic from 'next/dynamic'
import ProductFilter from '../../src/sections/Products/ProductFilter'
import { useFilterContext } from '../../src/utils/filter-context'

import { supabaseAdmin } from '../../src/utils/supabaseAdmin'
const Items = dynamic(() => import('../../src/sections/Products/Items'))

const ProductsPage = ({ products }) => {
  const {getProducts} = useFilterContext()
  useEffect(() => {
    getProducts(products)
  }, [])
  return (
    <>
     <NavBar />
     <main className={styles.main}>
       {/* <PageHeader img={img} title='There’s no right way or wrong way - to taste wine' /> */}
      <ProductFilter/>
      <Items/>
     </main>
    </>
  )
}

export async function getStaticProps() {


  const { data } = await supabaseAdmin
    .from('products')
    .select('*')
    .order('id');
    return {
      props: {
        products: data
      }
    }
}

export default ProductsPage