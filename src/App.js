import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Pages
import Home from './pages/Home'
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        {/* <Home /> */}
      </Router>
    </div>
  )
}

export default App
