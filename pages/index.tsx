import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import Pastor from '../components/Home/Pastor'
import Statistics from '../components/Home/Statistics'
import Testimonials from '../components/Home/Testimonials'
import Events from '../components/Home/Events'
import Contact from '../components/Home/Contact'
import LiveStream from '../components/Home/LiveStream'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Pastor />
      <Services />
      <Statistics />
      <LiveStream />
      <Events />
      <Testimonials />
      <Contact />
    </Layout>
  )
}