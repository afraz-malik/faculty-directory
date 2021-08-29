import React from 'react'
import './App.css'
import {
  // BrowserRouter as Router,
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
import { gettingFacultiesStart } from './redux/data/data.actions'
import { Spinner } from './components/spinner/spinner'
const App = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.userReducer.currentUser)
  const fetching = useSelector((state) => state.dataReducer.fetching)
  React.useEffect(() => {
    dispatch(isUserAuthenticated())
    // eslint-disable-next-line
    dispatch(gettingFacultiesStart())
  }, [])
  return (
    <div className="App">
      {/* <button onClick={() => dispatch(isUserAuthenticated())}>Hello</button> */}
      <ScrollTop />
      <Switch>
        <Route exact path="/" component={!fetching ? HomePage : Spinner} />
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
        <Route path="/faculty" component={fetching ? Spinner : FacultyPage} />
        <Route
          path="/dashboard"
          render={
            () =>
              !currentUser ? (
                <Redirect to={`/login`} />
              ) : fetching ? (
                <Spinner />
              ) : (
                <Dashboard user={currentUser} />
              )
            // null
          }
        />
      </Switch>
    </div>
  )
}

export default App
