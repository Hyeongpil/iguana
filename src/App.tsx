/* External dependencies */
import IndexPage from 'pages'
import categoryPage from './pages/category'
import alarmDrawerPage from './pages/alarmDrawer'
import loginPage from './pages/login'
import myPage from './pages/my'
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import DefaultLayout from 'components/layout/defaultLayout'
import GlobalStyle from 'assets/globalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename="/iguana">
        <DefaultLayout>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/category" component={categoryPage} />
            <Route path="/alarmdrawer" component={alarmDrawerPage} />
            <Route path="/login" component={loginPage} />
            <Route path="/my" component={myPage} />
          </Switch>
        </DefaultLayout>
      </Router>
    </>
  )
}

export default App
