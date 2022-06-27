import '../styles/globals.css'
import Footer from '../src/components/Footer'
import WishListProvider from '../src/utils/wishlist-context'
import CartContextProvider from '../src/utils/cart-context'
import FilterProvider from '../src/utils/filter-context'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>Buenos Arte Maria</title>
  </Head>
  <CartContextProvider>
    <WishListProvider>
      <FilterProvider>
        <Component {...pageProps} />
      </FilterProvider>
    </WishListProvider>
  </CartContextProvider>
  <Footer />
  </>

}

export default MyApp
