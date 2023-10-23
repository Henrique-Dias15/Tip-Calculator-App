import "./Input.css";
import { useEffect, useState } from "react";

const Input = ({ name, id1, id2 }) => {
  const [billInput, setBillInput] = useState("");
  const [peopleInput, setPeopleInput] = useState("");

  const checkBlank = (e) => {
    switch (name) {
      case "Bill":
        setBillInput(e);
        break;
      case "Number of People":
        setPeopleInput(e);
        break;
    }
 
  };


  
  
  useEffect(() => {
    var styleBlock = "display: block";
    var styleOutline = "outline: 1px solid red;";
    var styleDNone = "display: none;";
    var styleONone = "outline: none;";

    switch (id1) {
      case "billText":
        if (billInput == "") {
          billText.style = styleBlock;
          bill.style = styleOutline;
        } else {
          billText.style = styleDNone;
          bill.style = styleONone;
        }
        break;
      case "peopleText":
        if (peopleInput == "") {
          peopleText.style = styleBlock;
          people.style = styleOutline;
        } else {
          peopleText.style = styleDNone;
          people.style = styleONone;
        }
        break;
    }
  });

  return (
    <div className="inputBill">
      <div className="inputBillTexts">
        <label htmlFor="bill">{name}</label>
        <p id={id1}>Can't be zero</p>
      </div>
      <input
        type="number"
        id={id2}
        placeholder={0}
        onInput={(e) => checkBlank(e.target.value)}
      />
    </div>
  );
};

export default Input;
