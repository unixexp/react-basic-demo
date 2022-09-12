import React, { useState } from "react";
import "./counter.scss";

const Counter = ({ min, max, value, setValue }) => {

    const MIN_VALUE = min;
    const MAX_VALUE = max;

    const onChange = (e) => {
        let newValue = e.target.value;
        if (newValue < MIN_VALUE) {
            newValue = MIN_VALUE
        } else if (newValue > MAX_VALUE) {
            newValue = MAX_VALUE;
        }
        setValue(newValue);
    };

    const incValue = () => {
        let newValue = parseInt(value) + 1;
        if (newValue > MAX_VALUE)
            newValue = MAX_VALUE
        setValue(newValue);
    }

    const decValue = () => {
        let newValue = parseInt(value) - 1;
        if (newValue < MIN_VALUE)
            newValue = MIN_VALUE
        setValue(newValue);
    }

    const validateInput = (e) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    }

    return (
        <div className="counter">
            <button className="counter__controller" onClick={decValue}>-</button>
            <input className="counter__value"
                   onKeyPress={validateInput}
                   value={value}
                   onChange={onChange}/>
            <button className="counter__controller" onClick={incValue}>+</button>
        </div>
    );

};

export default Counter;