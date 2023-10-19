import React from 'react';
import './Button.css';
import { render, useState } from 'react';

const Button = ({value, id}) => {
    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);
    const [button4, setButton4] = useState(false);
    const [button5, setButton5] = useState(false);

    return(
        <input 
        type="button"
        id={id}
        value={value} 
        onClick={(e) => checkButtons({id})}
        />
    );
}

export default Button;
