import React from 'react'
import {
  BrowserRouter,
  HashRouter,
  Route, Switch
} from 'react-router-dom'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import DetailPage from './pages/detail'

import Audio from './components/audio'

import './app.scss!'

export default () => {
  const Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter
  return(
    <Router>
      <React.Fragment>
        <section>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/detail" component={DetailPage}/>
          </Switch>
        </section>
        <Audio/>
        <es-style/>
      </React.Fragment>
    </Router>
  )
}
