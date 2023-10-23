import "./Display.css";
import Button from "./Button";
import Input from "./Input";
import Resultados from "./Resultados";
import { useEffect, useState } from "react";
import { useCallback } from "react";

const Display = () => {

const [billInput, setBillInput] = useState("");
const [tipInput, setTipInput] = useState("");
const [peopleInput, setPeopleInput] = useState("");
const [tipDollars, setTipDollars] = useState(0);
const [billTotal, setBillTotal] = useState(0);
const [isValidBill, setIsValidBill] = useState(false);
const [isValidTip, setIsValidTip] = useState(false);
const [isValidPeople, setIsValidPeople] = useState(false);

const calculateTip = useCallback((e) =>{
e?.preventDefault()
if(!isValidBill || !isValidPeople || !isValidTip) return; 

const parseBill = parseFloat(billInput.replace("$",""));
const parseTip = parseFloat(tipInput.replace("%",""));
const parsePeople= parseInt(peopleInput);
if (e){
  setTipInput(tipInput.replace("%",""))
  setBillInput(billInput.replace("$",""))
}

setTipDollars((parseBill * (parseTip/100))/parsePeople );
setBillTotal((parseBill + parseBill*(parseTip/100))/parsePeople);

} , [peopleInput,tipInput,billInput,isValidBill,isValidTip,isValidPeople])

function isValidInput(numStr, unitType){

  if(numStr === '')
{
  return false;
}
  // Se unittype é "dollars", remove o "$" do inicio
  if (unitType === "dollars" && numStr.match(/^\$.+/)) {
    numStr = numStr.replace("$" , "");
  }

 // Se unittype é "percent", remove o "%" do final
  if (unitType === "percent" && numStr.match(/.+%$/)) {
    numStr = numStr.replace("%" , "");
  }

  // Verifica o tipo "integer"
  if (unitType === "integer") {if( !numStr.match(/^0\d/g)  && /^[1-9]\d*$/.test(numStr) &&
  parseInt(numStr) >= 1) {
    return true;
  } else{
    return false;
  }
}
  if (
    !numStr.match(/^0\d/g) && numStr !== "" && !isNaN(numStr) && parseInt(numStr) >= 0
  ){
    return true;
  }

  return false;
}

function handleBillChange(e) {
  const input = e.target.value.replaceAll("$","");
  setIsValidBill(isValidInput(input, "dollars"));
  setBillInput(`$${input}`);

}

function handleTipChange(e) {
  const input = e.target.value.replaceAll("%", "");
  setIsValidTip(isValidInput(input, "percent"));
  setTipInput(input);

}
function handlePeopleChange(e) {
  const input = e.target.value;
  setIsValidPeople(isValidInput(input, "integer"));
  setPeopleInput(input);

}

useEffect(() => {
  calculateTip()
  console.log(everythingIsValid)
}, [billInput, tipInput, peopleInput])

const everythingIsValid = isValidBill && isValidPeople && isValidTip

function reset (){
  setBillInput("");
  setTipInput("");
  setPeopleInput("");
  setIsValidBill(false);
  setIsValidPeople(false);
  setIsValidTip(false);
}

  return (

    <div className="Display">
      <form className="Display" onSubmit={calculateTip}>
      <h1>
        SPLI
        <br />
        TTER
      </h1>
      <div className="Main">
        <div className="Inputs">
          <div className="inputBill">
             <div className="inputBillTexts">
             <label htmlFor="bill">Bill</label>
             
      </div>
      <input type="text" className={isValidBill ? "" : "error"} placeholder={0} id1="billText" id2="bill" name="Bill" value={billInput} onChange={handleBillChange}/>
    </div>
        
          <div className="inputTip">
            <p>Select Tip %</p>
            <div className="buttons">
              <Button type = "button" id="tip5" value={5 + "%"}  onClick={handleTipChange}/>
              <Button type = "button" id="tip10" value={10 + "%"} onClick={handleTipChange}/>
              <Button type = "button" id="tip15" value={15 + "%"} onClick={handleTipChange}/>
              <Button type = "button" id="tip25" value={25 + "%"} onClick={handleTipChange}/>
              <Button type = "button" id="tip50" value={50 + "%"} onClick={handleTipChange}/>
              <input type="number" id="tipCustom" placeholder="Custom" value={tipInput} onChange={handleTipChange}  />
            </div>
          </div>
          <div className="inputBill">
             <div className="inputBillTexts">
             <label htmlFor="bill">Number of People</label>
      </div>
      <input type="number" className={isValidPeople ? "" : 'error'} id1="peopleText" id2="people" name="Number of People" value={peopleInput} onChange={handlePeopleChange}/>
    </div>
        </div>

        <div className="Resultados">
        <div className="main">
      <div id="text">
        <h2>Tip Amount</h2>
        <p className="per-person">/ person</p>
      </div>
      <div id="value">
      <p>{everythingIsValid ? tipDollars.toLocaleString("en-US",{ style:"currency", currency: "USD"}) : "$0.00" } </p>
      </div>
    </div>

    <div className="main">
      <div id="text">
        <h2>Total</h2>
        <p className="per-person">/ person</p>
      </div>
      <div id="value">
        <p>{everythingIsValid ? billTotal.toLocaleString("en-US",{ style:"currency", currency: "USD"}) : "$0.00" } </p>
      </div>
    </div>
          <div className="reset">
            <button id="resetButoon" onClick={reset}>RESET</button>
          </div>
        </div>
      </div>
      </form>
    </div>
    
  );
};

export default Display;
