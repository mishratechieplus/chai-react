import { useState, setCounter } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // console.log("clicked", counter);
    //counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button
        onClick={addValue}
      >add value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >remove value {counter}</button>

      <p>FOOTER: {counter}</p>
    </>
  )
}

export default App
