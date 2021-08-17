import React from 'react'
import BecomeFaculty from '../components/BecomeFaculty/BecomeFaculty'
import FactultyCard from '../components/FacultyCard/FactultyCard'
import Footer from '../components/Footer/Footer'
import Search from '../components/Search/Search'
import SmallHeader from '../components/SmallHeader/SmallHeader'
const FacultyPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const faculty = [
    {
      name: 'AFRAZ MALIK',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '2.jpg',
    },
    {
      name: 'AFRAZ MALIK',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '2.jpg',
    },
    {
      name: 'AFRAZ MALIK',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '2.jpg',
    },
    {
      name: 'AFRAZ MALIK',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '2.jpg',
    },
    {
      name: 'AFRAZ MALIK',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '2.jpg',
    },
    {
      name: 'AFRAZ MALIK',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '2.jpg',
    },
    {
      name: 'AFRAZ MALIK',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '2.jpg',
    },
    {
      name: 'AFRAZ MALIK',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '2.jpg',
    },
    {
      name: 'AFRAZ MALIK',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '2.jpg',
    },
    {
      name: 'AFRAZ MALIK',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '2.jpg',
    },
    {
      name: 'AFRAZ MALIK',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '2.jpg',
    },
  ]
  return (
    <div>
      <div
        style={{ height: '350px', overflow: 'hidden', marginBottom: '100px' }}
      >
        <SmallHeader bg="1" section={false} />
      </div>
      <Search />
      <FactultyCard faculty={faculty} />
      <BecomeFaculty />
      <Footer />
    </div>
  )
}

export default FacultyPage
