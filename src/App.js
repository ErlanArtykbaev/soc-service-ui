import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/sass/style.scss'

import Admin from './admin/Admin'
import Home from './pages/Home'
import Header from './components/layout/Header'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from "./components/layout/Footer";
import {ServiceProvider} from "./store/ServicesContext";


function App() {
    return (
        <div className='app'>
            <Router>
                <Header/>
                <Switch>
                    <ServiceProvider>
                        <Route path='/' exact component={Home}/>
                    </ServiceProvider>
                    <Route path='/admin' component={Admin}/>
                    <Route path='/about' component={About}/>
                    <Route path='/team' component={About}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/blog' component={About}/>
                    <Route path='/career' component={About}/>
                    <Route path='/contactus' component={About}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
