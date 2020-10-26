import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './assets/sass/style.scss'

import Admin from './admin/Admin'
import Home from './pages/Home'
import Header from './components/layout/Header'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/layout/Footer'
import {ServiceProvider} from './store/ServicesContext'

import './i18next'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <ServiceProvider>
            <Route path="/" exact component={Home} />
          </ServiceProvider>
          <Route path="/admin" exact component={Admin} />
          <Route path="/about" exact component={About} />
          <Route path="/team" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/blog" exact component={About} />
          <Route path="/career" exact component={About} />
          <Route path="/contactUs" exact component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
