/* External dependencies */
import IndexPage from 'pages'
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './assets/App.css'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={IndexPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
