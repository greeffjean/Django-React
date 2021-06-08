import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from './Pages/Users'
import Home from './Pages/Home'
import About from './Pages/About'

const App = () => {
    return (
        <Router basename='/my-react-page/'>
            <Switch>
                <Route path="my-react-page/about">
                    <About/>
                </Route>
                <Route path="my-react-page/users">
                    <Users/>
                </Route>
                <Route path="my-react-page/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App