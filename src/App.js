import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './assets/sass/style.scss'

import Admin from './admin/Admin'
import Home from './pages/Home'
import Header from './components/layout/Header'

function App() {
  return (
		<div className='app'>
			<Router>
				<Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/admin' component={Admin} />
        </Switch>
			</Router>
		</div>
  )
}

export default App
