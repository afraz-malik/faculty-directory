import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import BecomeFaculty from '../components/BecomeFaculty/BecomeFaculty'
import Search from '../components/Search/Search'
import Footer from '../components/Footer/Footer'
import SmallHeader from '../components/SmallHeader/SmallHeader'
import FacultyProfilePage from './FacultyProfilePage'

const FacultyPage = ({ match }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Route exact path={`${match.path}`}>
        <div>
          <div style={{ height: '350px', overflow: '', marginBottom: '100px' }}>
            <SmallHeader bg="1" section={false} />
          </div>
          <Search />
          <BecomeFaculty />
          <Footer />
        </div>
      </Route>
      <Route path={`${match.path}/:id`} component={FacultyProfilePage} />
    </>
  )
}

export default withRouter(FacultyPage)
