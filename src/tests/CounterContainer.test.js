import React from 'react'
import ReactDOM from 'react-dom'
import { CounterContainer } from '../containers/CounterContainer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CounterContainer  counter={0} dispatch={() => {

  }}/>, div)
})