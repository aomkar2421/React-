import './App.css'
import Cards from './Components/Cards'

function App() {

  return (
    <>
    <div className='bg-center text-center'>
      <h1 className='bg-orange-400 border-spacing-8 mb-10' >Props & Tailwind</h1>
      <Cards name="LENOVO" btnText="click"/>
      <Cards name="DELL" btnText="press"/>
    </div>
    </>
  )
}

export default App
