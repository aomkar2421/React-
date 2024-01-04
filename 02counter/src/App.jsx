import { useState } from 'react'
import './App.css'

function App() {
  
  const incValue = () =>{
    counter = counter + 1; // only possible if useState is "let" not pssible if const
    setCounter(counter);
  }

  const decValue = () =>{
    setCounter(counter -1);
    if(counter <= 0){
      setCounter(0);
    }
  }
  // const [counter, setCounter] = useState(15) // cannot increment variable as constant
  let [counter, setCounter] = useState(15)

  return (
    <>
      <h1>Set Count</h1>
      <h3>Counter is {counter}</h3>
      <button onClick={incValue} >Increase Value</button>
      <button onClick={decValue} >Decrease Value</button>
    </>
  )
}

export default App
