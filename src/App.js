import './App.css'
import Header from './components/Header/Header'
import Departments from './components/Departments/Departments'
import Search from './components/Search/Search'
import FactultyCard from './components/FacultyCard/FactultyCard'
import BecomeFaculty from './components/BecomeFaculty/BecomeFaculty'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className="App">
      <Header />
      <Departments />
      <Search />
      <FactultyCard />
      <BecomeFaculty />
      <Footer />
    </div>
  )
}

export default App
