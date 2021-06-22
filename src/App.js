import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import StateProvider from './state/Provider'

import Main from './pages/main'
import './reset.css'

function App() {
    return (
        <StateProvider>
            <Router>
                <Switch>
                    <Route path="*">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </StateProvider>
    )
}

export default App
