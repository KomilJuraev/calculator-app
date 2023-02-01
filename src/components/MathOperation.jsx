import React from "react";
import ErrorMessage from "./ErrorMessage";

function MathOperation(props) {
    let errorMsg = false;

    function add() {
        errorMsg = ErrorMessage(props.firstInput, props.secondInput);
        if (errorMsg === true) {
            props.setResult(parseInt(props.firstInput) + parseInt(props.secondInput));
            props.setValidValues(true);
        } else {
            props.setValidValues(false);
            props.setResult(errorMsg);
        }
        props.setMathSign("+");
    }

    function subtract() {
        errorMsg = ErrorMessage(props.firstInput, props.secondInput);
        if (errorMsg === true) {
            props.setResult(parseInt(props.firstInput) - parseInt(props.secondInput));
            props.setValidValues(true);
        } else {
            props.setValidValues(false);
            props.setResult(errorMsg);
        }
        props.setMathSign("-");
    }

    function divide() {
        errorMsg = ErrorMessage(props.firstInput, props.secondInput);
        if (errorMsg === true) {
            props.setResult(parseInt(props.firstInput) / parseInt(props.secondInput));
            props.setValidValues(true);
        } else {
            props.setValidValues(false);
            props.setResult(errorMsg);
        }
        props.setMathSign("/");
    }

    function multiply() {
        errorMsg = ErrorMessage(props.firstInput, props.secondInput);
        if (errorMsg === true) {
            props.setResult(parseInt(props.firstInput) * parseInt(props.secondInput));
            props.setValidValues(true);
        } else {
            props.setValidValues(false);
            props.setResult(errorMsg);
        }
        props.setMathSign("*");
    }

    return (
        <div id="expressions-btn">
            <button id="add-nums" onClick={add}>Add</button>
            <button id="subtract-nums" onClick={subtract}>Subtract</button>
            <button id="divide-nums" onClick={divide}>Divide</button>
            <button id="multiply-nums" onClick={multiply}>Multiply</button>
        </div>
    );
}

export default MathOperation;