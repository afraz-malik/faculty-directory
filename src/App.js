import './App.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// Pages
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import FacultyPage from './pages/FacultyPage'
const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/faculty" component={FacultyPage} />
        </Switch>
        {/* <Route path="/">
          <SmallHeader bg="1" section={false} />
        </Route> */}
      </Router>
    </div>
  )
}

export default App
