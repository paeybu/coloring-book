import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Rabbit from './components/Rabbit'
import WoodDuck from './components/WoodDuck'

import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  const [color, setColor] = useState('#fff')

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route
          path="/rabbit"
          render={props => (
            <Rabbit {...props} color={color} setColor={setColor} />
          )}
        />
        <Route
          path="/woodduck"
          render={props => (
            <WoodDuck {...props} color={color} setColor={setColor} />
          )}
        />
      </div>
    </Router>
  )
}

export default App
