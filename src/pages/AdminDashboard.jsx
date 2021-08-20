import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import Footer from '../components/Footer/Footer'
import SmallHeader from '../components/SmallHeader/SmallHeader'

const AdminDashboard = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <SmallHeader section={false} bg="bg3" />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default AdminDashboard
