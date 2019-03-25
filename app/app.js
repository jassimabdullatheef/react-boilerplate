import React, { Component } from 'react'
import Routes from './routes'
import { 
    BrowserRouter
} from 'react-router-dom'

// import Config from 'Config'

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </div>
        )
    }
}

export default App
