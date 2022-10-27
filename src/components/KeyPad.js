import React from "react";

export default function KeyPad({ ...props }) {
    const isOperationKey = () => {
        switch (props.children) {
            case "/":
            case "*":
            case "+":
            case "=":
            case "-":
                return true;
            default:
                return false;
        }
    };
    return (
        <div
            className={`wrapper
        ${isNaN(props.children) ? "operatorKey" : null}
        ${props.children === "0" ? "twoSquareSpace" : null}
        ${isOperationKey() ? "operandKey" : null}
         
      `}
            onClick={() => props.handleClick(props.children)}
        >
            {props.children}
        </div>
    );
}
