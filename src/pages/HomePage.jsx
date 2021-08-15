import React, { useEffect } from 'react'
// import Header from './../components/Header/Header'
import Header from '../components/Header/Header'
import Departments from '../components/Departments/Departments'
import Search from '../components/Search/Search'
import FactultyCard from '../components/FacultyCard/FactultyCard'
import BecomeFaculty from '../components/BecomeFaculty/BecomeFaculty'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Header />
      <Departments />
      <Search />
      <FactultyCard />
      <BecomeFaculty />
      <Footer />
    </div>
  )
}

export default HomePage
