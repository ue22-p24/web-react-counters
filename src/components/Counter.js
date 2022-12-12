import React, {useState} from 'react'

import './Counter.css'
import Button from './Button'

const Counter = (props) => {

    const {text} = props

    const [counter, setCounter] = useState(0)

    const decreaseCounter = () => setCounter(counter-1)
    const increaseCounter = () => setCounter(counter+1)

    return (
        <div class="counter">
          <span>{text}</span>
          <div class="buttons">
            <Button text="-" type="decrease" onClick={decreaseCounter} />
            <span class="value">{counter}</span>
            <Button text="+" type="increase" onClick={increaseCounter} />
          </div>
        </div>
      )
}

export default Counter