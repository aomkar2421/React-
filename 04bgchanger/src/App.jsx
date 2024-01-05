import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-screen h-screen text-white text-center' style={{backgroundColor:color}}>
        Omkar Jagtap
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl text-black'>
          <button style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Red</button>
          <button className='bg-blue-700' onClick={() => setColor("blue")}>Blue</button>
          <button className='bg-green-700' onClick={() => setColor("green")}>Green</button>
          </div>
        </div>
    </div>
  )
}

export default App
