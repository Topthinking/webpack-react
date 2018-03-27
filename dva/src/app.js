import React from 'react'
import {
  BrowserRouter,
  HashRouter,
  Route, Switch
} from 'react-router-dom'
import HomePage from './pages/home'
import AboutPage from './pages/about'

const Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter


export default () => (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </Router>
)
