import React from 'react'
import AdminDashboard from '../components/AdminDashboard/AdminDashboard'
import FacultyDashboard from '../components/FacultyDashboard/FacultyDashboard'
import Footer from '../components/Footer/Footer'
import SmallHeader from '../components/SmallHeader/SmallHeader'

const Dashboard = ({ user }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <SmallHeader section={false} bg="bg3" />
      {user ? user.isAdmin ? <AdminDashboard /> : <FacultyDashboard /> : null}

      <Footer />
    </div>
  )
}

export default Dashboard
