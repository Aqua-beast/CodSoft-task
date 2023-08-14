import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Blogs from '../components/Blogs/Blogs'
import Combined from '../components/combined/Combined'
import Footer from '../components/footer/Footer'
import Newsletter from '../components/Newsletter/Newsletter'
import WhyChooseUs from '../components/whychooseus/WhyChooseUs'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Combined />
      <Blogs />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default LandingPage
