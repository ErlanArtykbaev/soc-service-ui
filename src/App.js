import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.css'

import './assets/sass/style.scss'

import Admin from './admin/Admin'
import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'
import {ServiceProvider} from './store/ServicesContext'
import './i18next'
import Layout from "./components/layout/Layout";
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <>
            <Layout>
                        <Switch>
                            <ServiceProvider>
                                <Route path="/" exact component={Home}/>
                                <Route path="/admin" exact component={Admin}/>
                                <Route path="/about" exact component={About}/>
                                <Route path="/team" exact component={About}/>
                                <Route path="/projects"  component={Projects} exact/>
                                <Route path="/blog" exact component={About}/>
                                <Route path="/career" exact component={About}/>
                                <Route path="/contactUs" exact component={About}/>
                            </ServiceProvider>
                        </Switch>
            </Layout>
        </>

    )
}

export default App
