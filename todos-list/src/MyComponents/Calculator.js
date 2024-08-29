import React, { useState } from 'react';
import './Calculator.css';

export const Calculator = () => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    const inputValue = e.target.value;

    switch (inputValue) {
      case 'AC':
        setValue("");
        break;
      case 'DE':
        setValue(value.slice(0, -1));
        break;
      case '=':
        try {
          setValue(eval(value).toString()); // eval used for simplicity, consider a safer alternative
        } catch {
          setValue("Error");
        }
        break;
      default:
        setValue(value + inputValue);
        break;
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div className="calculator-grid">
            <button type="button" value="AC" onClick={handleClick}>AC</button>
            <button type="button" value="DE" onClick={handleClick}>DE</button>
            <button type="button" value="." onClick={handleClick}>.</button>
            <button type="button" value="/" onClick={handleClick}>/</button>
            <button type="button" value="7" onClick={handleClick}>7</button>
            <button type="button" value="8" onClick={handleClick}>8</button>
            <button type="button" value="9" onClick={handleClick}>9</button>
            <button type="button" value="*" onClick={handleClick}>*</button>
            <button type="button" value="4" onClick={handleClick}>4</button>
            <button type="button" value="5" onClick={handleClick}>5</button>
            <button type="button" value="6" onClick={handleClick}>6</button>
            <button type="button" value="+" onClick={handleClick}>+</button>
            <button type="button" value="1" onClick={handleClick}>1</button>
            <button type="button" value="2" onClick={handleClick}>2</button>
            <button type="button" value="3" onClick={handleClick}>3</button>
            <button type="button" value="-" onClick={handleClick}>-</button>
            <button type="button" value="00" onClick={handleClick}>00</button>
            <button type="button" value="0" onClick={handleClick}>0</button>
            <button type="button" value="=" onClick={handleClick}>=</button>
          </div>
        </form>
      </div>
    </div>
  );
};
