import React from 'react'
import { useSelector } from 'react-redux'
import AdminDashboard from '../components/AdminDashboard/AdminDashboard'
import FacultyDashboard from '../components/FacultyDashboard/FacultyDashboard'
import Footer from '../components/Footer/Footer'
import SmallHeader from '../components/SmallHeader/SmallHeader'

const Dashboard = () => {
  const isAdmin = useSelector((state) => state.FacultyReducer.isAdmin)
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  console.log(isAdmin)
  return (
    <div>
      <SmallHeader section={false} bg="bg3" />
      {isAdmin ? <AdminDashboard /> : <FacultyDashboard />}

      <Footer />
    </div>
  )
}

export default Dashboard
