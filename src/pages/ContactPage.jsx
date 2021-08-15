import React, { useEffect } from 'react'
import SmallHeader from '../components/SmallHeader/SmallHeader'
import Contact from '../components/Contact/Contact'
import BecomeFaculty from '../components/BecomeFaculty/BecomeFaculty'
import Footer from '../components/Footer/Footer'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <SmallHeader />
      <Contact />
      <BecomeFaculty />
      <Footer />
    </div>
  )
}

export default ContactPage
