import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './assets/sass/style.scss'

import Admin from './admin/Admin'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
