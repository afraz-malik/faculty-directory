import './App.css'
import Header from './components/Header/Header'
import Departments from './components/Departments/Departments'
import Search from './components/Search/Search'
const App = () => {
  return (
    <div className="App">
      <Header />
      <Departments />
      <Search />
    </div>
  )
}

export default App
