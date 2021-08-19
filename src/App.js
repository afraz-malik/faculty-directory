import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Pages
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import FacultyPage from './pages/FacultyPage'
import ScrollTop from './components/ScrollTop/ScrollTop'
const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollTop />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/faculty" component={FacultyPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
