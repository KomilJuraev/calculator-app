import React from "react";

function Input(props) {
    function handleFirstChange(event) {
        props.setFirstInput(event.target.value);
    }

    function handleSecondChange(event) {
        props.setSecondInput(event.target.value);
    }

    return (
        <div id="input-fields">
            <input type="text" id="num1-el" placeholder="first number" onChange={handleFirstChange} value={props.firstInput} onFocus={() => { props.setFirstInput("") }} />
            <div>
                <h1 id="operation-el">{props.mathSign}</h1>
            </div>
            <input type="text" id="num2-el" placeholder="second number" onChange={handleSecondChange} value={props.secondInput} onFocus={() => { props.setSecondInput("") }} />
        </div>
    );
}

export default Input;