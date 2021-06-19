import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import Main from './pages/main'
import './reset.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="*">
                    <Main />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
