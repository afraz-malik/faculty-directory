import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
// Pages
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import FacultyPage from './pages/FacultyPage'
import ScrollTop from './components/ScrollTop/ScrollTop'
import Dashboard from './pages/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { isUserAuthenticated } from './redux/user/user.action'
const App = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.userReducer.currentUser)
  React.useEffect(() => {
    dispatch(isUserAuthenticated())
    // eslint-disable-next-line
  }, [])
  return (
    <div className="App">
      <button onClick={() => dispatch(isUserAuthenticated())}>Hello</button>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollTop />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route
            exact
            path="/login"
            render={() =>
              currentUser ? <Redirect to={`/dashboard`} /> : <LoginPage />
            }
          />
          <Route
            exact
            path="/register"
            render={() =>
              currentUser ? <Redirect to={`/dashboard`} /> : <RegisterPage />
            }
          />
          <Route path="/faculty" component={FacultyPage} />
          <Route
            path="/dashboard"
            render={() =>
              !currentUser ? (
                <Redirect to={`/login`} />
              ) : (
                <Dashboard user={currentUser} />
              )
            }
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
