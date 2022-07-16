import React from 'react'
import PageHeader from '../../src/components/PageHeader'
import headImg from '/public/images/our-story-head.jpg'
import NavBar from '../../src/components/NavBar'
import styles from '../../styles/pages/OurStory.module.css'
import TextSection from '../../src/sections/OurStory/TextSection'
import ImgSection from '../../src/components/ImgSection'
import FixedBackground from '../../src/sections/OurStory/FixedBackground'
import Head from 'next/head'

import img from '/public/images/our-story1.jpg'
import img2 from '/public/images/our-story2.jpg'
import img3 from '/public/images/our-story3.jpg'
import img4 from '/public/images/our-story4.jpg'

const description1 = (
  <>
    <p className='description'>
      Located in the heart of the Olmo region, in Cima Corgo in the Buenos dios,
      the first records of Gorge Barhuan date back to 1868. The history of
      Buenos Arte Maria winemaking begins in 1996 in the hands of Angelino van
      Ziyach, when he buys the property from the family of his wife.
    </p>
    <p className='description'>
      Since then, and as a result of a lot of dedication and passion, Buenos
      Arte Maria has been at the genesis of unique wines, whose quality is
      recognized nationally and internationally.{' '}
    </p>
  </>
)
const description2 = (
  <>
    <p className='description'>
      The Story By following a traditional négociant model, an old practice, I
      have chosen to work with a number of small growers over having my own
      vineyards. It’s allowed me to spend years understanding the
      characteristics, strengths and weaknesses of various sites in pursuit of
      my own style.
    </p>
    <p className='description'>
      Around three-quarters of the grapes that end up in our bottles are from
      the carefully selected, elevated vineyards tended by these growers. All of
      these sites are farmed sustainably using organic principles where
      possible; yields are controlled and grapes are hand-picked.
    </p>
    <p className='description'>
      Whether you are drinking a single-site wine from our ‘Icon’ collection or
      from our special sites ‘Limited’ edition or from our everyday ‘H’ series.
    </p>
  </>
)
const description3 = (
  <>
    <p className='description'>
      Produced by the traditional Bordo Wine method. The hand-picked grapes
      undergo stalk-removal and crushing before fermentation, under controlled
      temperature, with skin maceration, so as to extract the best components.
      The addition of wine alcohol at the ideal moment sets the balance between
      the wine´s body and bouquet.
    </p>
    <p className='description'>
      After the harvest, the wines remain in the Bjorwe until the following
      Autumn. Then, they are taken to Villanova for ageing in oak wood casks.
      Along the years, the exceptional wines selected for this Thing 40 Years
      Old are carefully tasted and analysed, racked from lees and all
      corrections deemed necessary.
    </p>
  </>
)
const description4 = (
  <>
    <p className='description'>
      Some places preserve time, memories, and the flavors of a region. Buenos
      Arte Maria is one of those. A stunning building, home of the most
      internationally recognized of Bordo wines – Buenos Arte Maria.
    </p>
    <p className='description'>
      At Buenos Arte Maria, you will have plenty of artifacts to explore as a
      fascinating display of paintings and photographs collected over the
      centuries. Finally, you will have the chance to know one of the most
      impressive and stunning bottle collection in Europe. Here you will
      discover examples from the mid-17th century and the entire brand’s 200
      years of history.
    </p>
  </>
)

const StoryPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Our rich and long history' />
      </Head>
      <NavBar color />
      <main>
        <PageHeader img={headImg} title='our story' />
        <TextSection />
        <ImgSection
          img={img}
          title='Through the time'
          description={description1}
        />
        <ImgSection
          img={img2}
          title='NAPA GREEN'
          description={description2}
          textOrder={styles['text-order']}
          className={styles.bg}
        />
        <FixedBackground />
        <ImgSection img={img3} title='Winemaking' description={description3} />
        <ImgSection
          img={img4}
          title='Our History '
          description={description4}
          textOrder={styles['text-order']}
          className={styles.bg}
        />
      </main>
    </>
  )
}

export default StoryPage
