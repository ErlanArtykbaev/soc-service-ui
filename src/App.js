import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './assets/sass/style.scss'

import Admin from './admin/Admin'
import Home from './pages/Home'
import Header from './components/layout/Header'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/layout/Footer'
import {ServiceProvider} from './store/ServicesContext'
import './i18next'
import Layout from "./components/layout/Layout";

function App() {
    return (
        <>
            <Layout>
                <div className="app">
                    <Router>
                        <Switch>
                            <ServiceProvider>
                                <Route path="/" exact component={Home}/>
                                <Route path="/admin" exact component={Admin}/>
                                <Route path="/about" exact component={About}/>
                                <Route path="/team" exact component={About}/>
                                <Route path="/projects" exact component={Projects}/>
                                <Route path="/blog" exact component={About}/>
                                <Route path="/career" exact component={About}/>
                                <Route path="/contactUs" exact component={About}/>
                            </ServiceProvider>
                        </Switch>
                    </Router>
                </div>
            </Layout>
        </>

    )
}

export default App
