import React, {useState} from 'react'

import logo from './logo.svg'
import './App.css'

import Counter from './components/Counter'

function App() {

  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    console.log('increasing')
    setCounter(counter+1)
  }
  const decreaseCounter = () => setCounter(counter-1)

  return (
    <div class="toplevel">
      <Counter text="temperature" />
      <Counter text="pressure"  />
    </div>
  )
}

export default App
