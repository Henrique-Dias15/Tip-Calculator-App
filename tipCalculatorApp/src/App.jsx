import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [button5, setButton5] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const checkButtons = (e) => {
    switch (e) {
      case "tip5":
        setButton1((button1) => !button1);
        setButton2(false);
        setButton3(false);
        setButton4(false);
        setButton5(false);
        break;
      case "tip10":
        setButton2((button2) => !button2);
        setButton1(false);
        setButton3(false);
        setButton4(false);
        setButton5(false);
        break;
      case "tip15":
        setButton3((button3) => !button3);
        setButton2(false);
        setButton1(false);
        setButton4(false);
        setButton5(false);
        break;
      case "tip25":
        setButton4((button4) => !button4);
        setButton2(false);
        setButton3(false);
        setButton1(false);
        setButton5(false);
        break;
      case "tip50":
        setButton5((button5) => !button5);
        setButton2(false);
        setButton3(false);
        setButton4(false);
        setButton1(false);
        break;
      default:
        setButton1(false);
        setButton2(false);
        setButton3(false);
        setButton4(false);
        setButton5(false);
        break;
    }
  };

  useEffect(() => {
    var styleSelect =
      "background-color: hsl(173, 61%, 77%); color: hsl(183, 100%, 15%);";
    var styleNormal =
      " background-color: hsl(183, 100%, 15%); color: hsl(0, 0%, 100%);";
    if (button1) {
      tip5.style = styleSelect;
      tipCustom.value = '';
    } else {
      tip5.style = styleNormal;
    }
    if (button2) {
      tip10.style = styleSelect;
      tipCustom.value = '';
    } else {
      tip10.style = styleNormal;
    }
    if (button3) {
      tip15.style = styleSelect;
      tipCustom.value = '';
    } else {
      tip15.style = styleNormal;
    }
    if (button4) {
      tip25.style = styleSelect;
      tipCustom.value = '';
    } else {
      tip25.style = styleNormal;
    }
    if (button5) {
      tip50.style = styleSelect;
      tipCustom.value = '';
    } else {
      tip50.style = styleNormal;
    }
  }, [button1, button2, button3, button4, button5]);

  const checkBlank1 = (e) => {
    setInput1(e);
  };
  const checkBlank2 = (e) => {
    setInput2(e);
  };

  useEffect(() => {
    var styleBlock = "display: block";
    var styleOutline = "outline: 1px solid red;";
    var styleDNone = "display: none;";
    var styleONone = "outline: none;";
    if (input1 == "") {
      billText.style = styleBlock;
      bill.style = styleOutline;
    } else {
      billText.style = styleDNone;
      bill.style = styleONone;
    }
    if (input2 == "") {
      peopleText.style = styleBlock;
      people.style = styleOutline;
    } else {
      peopleText.style = styleDNone;
      people.style = styleONone;
    }
  }, [input1, input2]);

  return (
    <div className="App">
      <h1>
        SPLI <br /> TTER
      </h1>
      <div className="Main">
        <div className="Inputs">
          <div className="inputBill">
            <div className="inputBillTexts">
              <label htmlFor="bill">Bill</label>
              <p id="billText">Can't be zero</p>
            </div>
            <input
              type="number"
              id="bill"
              placeholder={0}
              onInput={(e) => checkBlank1(e.target.value)}
            />
          </div>
          <div className="inputTip">
            <p>Select Tip %</p>
            <div className="buttons">
              <input
                type="button"
                id="tip5"
                value={5 + "%"}
                onClick={(e) => checkButtons(e.target.id)}
              />
              <input
                type="button"
                id="tip10"
                value={10 + "%"}
                onClick={(e) => checkButtons(e.target.id)}
              />
              <input
                type="button"
                id="tip15"
                value={15 + "%"}
                onClick={(e) => checkButtons(e.target.id)}
              />
              <input
                type="button"
                id="tip25"
                value={25 + "%"}
                onClick={(e) => checkButtons(e.target.id)}
              />
              <input
                type="button"
                id="tip50"
                value={50 + "%"}
                onClick={(e) => checkButtons(e.target.id)}
              />
              <input type="number" id="tipCustom" placeholder={"Custom"} onInput={(e) => checkButtons(e.target.value)}/>
            </div>
          </div>
          <div className="inputPeople">
            <div className="inputPeopleTexts">
              <label htmlFor="people">Number of People</label>
              <p id="peopleText">Can't be zero</p>
            </div>
            <input
              type="number"
              id="people"
              placeholder={0}
              onInput={(e) => checkBlank2(e.target.value)}
            />
          </div>
        </div>
        <div className="Resultados">
          <div className="tipAmount">
            <div id="tipAmountText">
              <h2>Tip Amount</h2>
              <p>/ person</p>
            </div>
            <div id="tipAmountValue">
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
