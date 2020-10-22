import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './assets/sass/style.scss'

import Admin from './admin/Admin'
import Home from './pages/Home'
import Header from './components/layout/Header'
import About from './pages/About'

function App() {
    return (
        <div className='app'>
            <Router>
                <Header/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/admin' component={Admin}/>
                    <Route path='/about' component={About}/>
                    <Route path='/team' component={About}/>
                    <Route path='/projects' component={About}/>
                    <Route path='/blog' component={About}/>
                    <Route path='/career' component={About}/>
                    <Route path='/contactus' component={About}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App
