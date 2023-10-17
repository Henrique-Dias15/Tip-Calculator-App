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

          <div className='inputTip'>
            <p>Select Tip %</p>
            <div className='buttons'>
            <input type="button" id='tip5' value={5+'%'}/>
            <input type="button" id='tip10' value={10+'%'}/>
            <input type="button" id='tip15' value={15+'%'}/>
            <input type="button" id='tip25' value={25+'%'}/>
            <input type="button" id='tip50' value={50+'%'}/>
            <input type="number" id='tipCustom' placeholder={'Custom'}/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
