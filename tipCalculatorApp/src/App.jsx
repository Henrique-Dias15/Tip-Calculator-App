import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        SPLI <br /> TTER
      </h1>

      <div className="Main">
        <div className="Inputs">
          <div className="inputBill">
            <label htmlFor="bill">Bill</label>
            <input type="number" id="bill" />
          </div>

          <div className="inputTip">
            <p>Select Tip %</p>
            <div className="buttons">
              <input type="button" id="tip5" value={5 + "%"} />
              <input type="button" id="tip10" value={10 + "%"} />
              <input type="button" id="tip15" value={15 + "%"} />
              <input type="button" id="tip25" value={25 + "%"} />
              <input type="button" id="tip50" value={50 + "%"} />
              <input type="number" id="tipCustom" placeholder={"Custom"} />
            </div>
          </div>

          <div className="inputPeople">
            <label htmlFor="people">Number of People</label>
            <input type="number" id="people" />
          </div>
        </div>

        <div className="Resultados">
          <div className="tipAmount">
            <div id="tipAmountText">
              <h2>Tip Amount</h2>
              <p>/ person</p>
            </div>
            <div  id="tipAmountValue">
              <p>$0.00</p>
            </div>
          </div>
          <div className="total">
            <div id="totalText">
              <h2>Total</h2>
              <p>/ person</p>
            </div>
            <div id="totalValue">
              <p>$0.00</p>
            </div>
          </div>
          <div className="reset">
            <button id="resetButoon">RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
