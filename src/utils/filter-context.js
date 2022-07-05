import React, {useReducer, useContext, useEffect} from "react";

const initialState = {
 filtered_products: [],
 all_products: [],
 sort: 'price-lowest',
 filters: {
  text: '',
  country: 'all',
  category: 'all',
  year: 'all',
  price: 0,
  min_price: 0,
  max_price: 0,
 }
}

const reducer = (state, action) => {
 if (action.type === 'GET_PRODUCTS') {
  let maxPrice = action.payload.map(i => i.price)
  
  maxPrice = Math.max(...maxPrice)

  return {
   ...state,
   filtered_products: [...action.payload],
   all_products: [...action.payload],
   filters: {
    ...state.filters,
    price: maxPrice,
    max_price: maxPrice
   }
  }
 }

 if (action.type === 'UPDATE_SORT') {
  return {
   ...state,
   sort: action.payload
  }
 }

 if (action.type === 'SORT_PRODUCTS') {
  const { sort, filtered_products } = state
  let tempProducts = [...filtered_products]

  if (sort === 'price-lowest') {
   tempProducts = tempProducts.sort((a,b) => a.price - b.price)
   console.log('price-lowest')
  }
  if (sort === 'price-highest') {
   tempProducts = tempProducts.sort((a,b) => b.price - a.price)
  }
  if (sort === 'name-a') {
   tempProducts = tempProducts.sort((a, b) => {
    return a.title.localeCompare(b.title)
   })
  }
  if (sort === 'name-z') {
   tempProducts = tempProducts.sort((a, b) => {
    return b.title.localeCompare(a.title)
   })
  }
  return {
   ...state,
   filtered_products: tempProducts
  }
 }

 if (action.type === 'UPDATE_FILTERS') {
  const { name, value } = action.payload
  return {
    ...state,
    filters: {
      ...state.filters,
      [name]: value
    }
  }
 }

 if (action.type === 'FILTER_PRODUCTS') {
  const { all_products } = state
  const { text, category, country, year, price } = state.filters

  let tempProducts = [...all_products]

  if (text) {
    tempProducts = tempProducts.filter(p => {
      return p.title.toLowerCase().startsWith(text.toLowerCase())
    })
  }

  if (category !== 'all') {
    tempProducts = tempProducts.filter(p => p.category === category)
  }

  if (country !== 'all') {
    tempProducts = tempProducts.filter(p => p.country === country)
  }

  if (year !== 'all') {
    tempProducts = tempProducts.filter(y => y.year === year)
  }

  tempProducts = tempProducts.filter(p => p.price <= price)

  return {
    ...state,
    filtered_products: tempProducts
  }
 }

 if (action.type === 'CLEAR_FILTERS') {
  const {all_products, filters: { max_price }} = state

  return {
    ...state,
    filtered_products: all_products,
    filters: {
      ...state.filters,
      category: 'all',
      year: 'all',
      country: 'all',
      price: max_price
    }
  }
 }

} 

const FilterContext = React.createContext()

const FilterProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initialState)


//  useEffect(() => {

//  }, [state.sort])

 const getProducts = (products) => {
  dispatch({ type: 'GET_PRODUCTS', payload: products })
 }



 const updateSort = (e) => {
  const value = e.target.value
  dispatch({ type: 'UPDATE_SORT', payload: value })
  dispatch({ type: 'SORT_PRODUCTS' })
 }



 const updateFilters = (e) => {
  let name = e.target.name
  let value = e.target.textContent

  if (name === 'text') {
    value = e.target.value
  }
  if (name === 'year' && value !== 'all') {
    value = Number(value)
  }

  if (name === 'price') {
    value = Number(e.target.value)
  }

  dispatch({ type: 'UPDATE_FILTERS', payload: {name, value} })
  dispatch({ type: 'FILTER_PRODUCTS' })
 }

 const clearFilters = () => {

  dispatch({ type: 'CLEAR_FILTERS' })

 }

 return <FilterContext.Provider value={{ ...state, getProducts, updateSort, updateFilters, clearFilters }}>{children}</FilterContext.Provider>
} 

export default FilterProvider

export const useFilterContext = () => {
 return useContext(FilterContext)
}