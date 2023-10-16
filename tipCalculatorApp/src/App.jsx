import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>

      <h1>SPLI <br/> TTER</h1>

      <div className='Main'>

        <div className='Inputs'>

          <div className='inputBill'>
          <label htmlFor='bill'>Bill</label>
          <input type="number" id='bill' placeholder='$'/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
