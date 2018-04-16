import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

function DemoComponent({ propA, propB, propC }) {
  return (
    <p className="App-intro">
      {propA} <code>{propB}</code> {propC}
    </p>
  )
}

DemoComponent.propTypes = {
  propA: PropTypes.string,
  propB: PropTypes.string,
  propC: PropTypes.string,
}

export default DemoComponent
