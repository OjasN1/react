import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(10)

  //let counter = 10

  const IncreaseValue = () => {
    console.log("Value Increased", counter);
    //counter = counter + 1
    if(counter<20){
      setcounter(counter+1)
    }
  }

  const DecreaseValue = () => {
    console.log("Value Decreased", counter);
    //counter = counter - 1
    if (counter > 0){
      setcounter(counter-1)
    }
    
  }

  return (
    <>
      <h1>My Second React Project</h1>
      <h2>Counter React value = {counter}</h2>

      <button onClick={IncreaseValue}>Increase Value </button>
      <br />
      <button onClick={DecreaseValue}>Decrease Value = {counter} </button>
    </>
  )
}

export default App
