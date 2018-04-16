import React from 'react'
import logo from './logo.svg'
import './App.css'
import './DemoComponent'
import DemoComponent from './DemoComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo" />
        <h1 className="App-title">eslint-prettier test</h1>
      </header>
      <DemoComponent
        propA="placeholder"
        propB="placeholder" />

      <DemoComponent propA="placeholder"/>

      <DemoComponent
        propA="placeholder"
        propB="placeholder"
        propC="placeholder" />
    </div>
  )
}

export default App
