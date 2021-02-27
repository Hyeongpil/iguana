/* External dependencies */
import IndexPage from 'pages'
import categoryPage from './pages/category'
import alarmDrawerPage from './pages/alarmDrawer'
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import DefaultLayout from 'components/layout/defaultLayout'
import GlobalStyle from 'assets/globalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <DefaultLayout>
        <Router basename="/iguana">
          <Switch>
            <Route path="/category" component={categoryPage} />
            <Route path="/alarmdrawer" component={alarmDrawerPage} />
            <Route exact path="/" component={IndexPage} />
          </Switch>
        </Router>
      </DefaultLayout>
    </>
  )
}

export default App
