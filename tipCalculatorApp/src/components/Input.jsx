import React from 'react';
import './Input.css';

const Input = ({name}) => {
    return (
        <div>
            <div className="inputBill">
            <div className="inputBillTexts">
              <label htmlFor="bill">{name}</label>
              <p id="billText">Can't be zero</p>
            </div>
            <input
              type="number"
              id="{name}"
              placeholder={0}
              onInput={(e) => checkBlank1(e.target.value)}
            />
          </div>
        </div>
    );
}

export default Input;
