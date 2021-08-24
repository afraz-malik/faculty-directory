import React from 'react'
import AdminDashboard from '../components/AdminDashboard/AdminDashboard'
import FacultyDashboard from '../components/FacultyDashboard/FacultyDashboard'
import Footer from '../components/Footer/Footer'
import SmallHeader from '../components/SmallHeader/SmallHeader'

const Dashboard = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const isAdmin = () => {
    const admin = window.confirm('You Admin??')
    console.log(admin)
    return admin
  }
  return (
    <div>
      <SmallHeader section={false} bg="bg3" />
      {isAdmin() ? <AdminDashboard /> : <FacultyDashboard />}

      <Footer />
    </div>
  )
}

export default Dashboard
