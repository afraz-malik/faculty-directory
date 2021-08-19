import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import BecomeFaculty from '../components/BecomeFaculty/BecomeFaculty'
import FactultyCard from '../components/FacultyCard/FactultyCard'
import Footer from '../components/Footer/Footer'
import Search from '../components/Search/Search'
import SmallHeader from '../components/SmallHeader/SmallHeader'
import FacultyProfilePage from './FacultyProfilePage'
const FacultyPage = ({ match }) => {
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
    <>
      <Route exact path={`${match.path}`}>
        <div>
          <div style={{ height: '350px', overflow: '', marginBottom: '100px' }}>
            <SmallHeader bg="1" section={false} />
          </div>
          <Search />
          <FactultyCard faculty={faculty} />
          <BecomeFaculty />
          <Footer />
        </div>
      </Route>
      <Route path={`${match.path}/:id`} component={FacultyProfilePage} />
    </>
  )
}

export default withRouter(FacultyPage)
