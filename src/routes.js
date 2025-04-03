import React from 'react';
import {BrowserRouter, Route, Routes as Router } from 'react-router-dom'
import Home from './pages/Home'
import Repos from './pages/Repos'

const Routes = () => {
    return (
        <BrowserRouter>
            <Router>  
                <Route path="/" Component={Home}/>
                <Route path="/repositorio/:repositorio" Component={Repos}/>
            </Router>
        </BrowserRouter>
    )
}

export default Routes;