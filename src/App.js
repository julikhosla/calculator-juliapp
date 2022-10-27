import React, { useState } from "react";
import KeyPad from "./components/KeyPad";

export default function App() {
    const [currentValue, setCurrentValue] = useState("");
    const CALCULATOR_KEYS = [
        ["AC", "+/-", "%", "/"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="],
    ];
    const calculateOperation = (key) => {
        switch (key) {
            case "AC":
                setCurrentValue("");
                break;
            case "=":
                handleEqualOperation();
                break;
            default:
                setCurrentValue(currentValue + key);
        }
    };
    const handleEqualOperation = () => {
        // eslint-disable-next-line no-eval
        setCurrentValue(eval(currentValue));
    };
    return (
        <div>
            <div className="currentValue">{currentValue}</div>
            {CALCULATOR_KEYS.map((row, index) => (
                <div className="calculatorKeys" key={index}>
                    {row.map((digit) => (
                        <KeyPad key={digit} handleClick={calculateOperation}>
                            {digit}
                        </KeyPad>
                    ))}
                </div>
            ))}
        </div>
    );
}
