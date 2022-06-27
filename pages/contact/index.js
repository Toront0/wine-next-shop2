import React from 'react'
import NavBar from '../../src/components/NavBar'
import PageHeader from '../../src/components/PageHeader'
import Hero from '../../src/sections/Contact/Hero'
import img from '/public/images/contact-head.jpg'

const Contact = () => {
  return (
   <>
    <NavBar color/>
    <main>
     <PageHeader img={img} title='contact' />
     <Hero />
    </main>
   </>
  )
}

export default Contact