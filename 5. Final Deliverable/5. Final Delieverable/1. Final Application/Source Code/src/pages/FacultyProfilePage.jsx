import React from 'react'
import SmallHeader from '../components/SmallHeader/SmallHeader'
import BecomeFaculty from '../components/BecomeFaculty/BecomeFaculty'
import Footer from '../components/Footer/Footer'
import FacultyProfile from '../components/FacultyProfile/FacultyProfile'
const FacultyProfilePage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <SmallHeader section={false} bg="1" />
      <FacultyProfile />
      <BecomeFaculty />
      <Footer />
    </div>
  )
}

export default FacultyProfilePage
