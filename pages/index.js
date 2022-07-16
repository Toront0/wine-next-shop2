import ImgSection from '../src/components/ImgSection'
import HomeHero from '../src/sections/HomeHero'
import HomeSelection from '../src/sections/HomeSelection'
import img from '/public/images/our-story.jpg'
import img2 from '/public/images/selection.jpg'
import NavBar from '../src/components/NavBar'
import HomeTestimonial from '../src/sections/HomeTestimonial'

import Head from 'next/head'

const description = (
  <>
    <p className='description'>
      “We have yet to make our best bottle of wine,” or the idea that our best
      wines are still ahead of us, is a founding philosophy that still guides us
      to this day. When you drink in our stunning riverside location, relax in
      our rooms and enjoy a uniquely atmospheric dining experience, you’ll
      understand why.
    </p>
    <p className='description'>
      We are passionate about upholding this tradition of hospitality – you can
      rest assured that we’ll do our utmost to ensure you have a wonderful time
      with us.
    </p>
    <p className='description'>
      “It takes just as long to produce a bottle of Cabernet today as it did in
      1972. And that’s just fine, because what matters most is timelessness.”
    </p>
  </>
)

const description2 = (
  <>
    <p className='description'>
      “For our wine we choose the best grape varieties Our core foundation wines
      are crafted from pristine fruit, sustainably grown on family estates most
      prized wine appellations.
    </p>
    <p className='description'>
      In 1972, Italy inspired a revelation in Michel Holland. Captivated by the
      country and its people, he saw tremendous wine-growing potential. His
      vision began to take shape, and Bordeaux winemaker Jean-Klosterman got on
      board. The domain is located in Palermo, 120 km south of Napoli, and rises
      to 2,000 metres above sea level.{' '}
    </p>
  </>
)

export default function Home() {
  return (
    <>
      <Head>
        <meta name='description' content='Best collection of wines out there' />
      </Head>
      <NavBar />
      <div>
        <HomeHero />
        <ImgSection
          img={img}
          href='our-story'
          btn='full story'
          title='our story'
          description={description}
        />
        <HomeSelection />
        <ImgSection
          img={img2}
          href='our-story'
          btn='full story'
          title='ingredients that make wine so special'
          description={description2}
        />
        <HomeTestimonial />
      </div>
    </>
  )
}
