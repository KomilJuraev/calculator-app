import React from "react";
import { useState } from "react";
import Input from "./Input";
import MathOperation from "./MathOperation";
import Result from "./Result";

function App() {
    const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("");
    const [mathSign, setMathSign] = useState("?");
    const [validValues, setValidValues] = useState(true);
    const [result, setResult] = useState();

    return (
        <div>
            <div id="header">
                <h1 id="header-txt">Simple Calculator</h1>
            </div>
            <Input
                firstInput={firstInput}
                secondInput={secondInput}
                mathSign={mathSign}
                setFirstInput={setFirstInput}
                setSecondInput={setSecondInput}
            />
            <MathOperation
                firstInput={firstInput}
                secondInput={secondInput}
                setMathSign={setMathSign}
                setFirstInput={setFirstInput}
                setSecondInput={setSecondInput}
                setValidValues={setValidValues}
                setResult={setResult}
            />
            <Result
                isValid={validValues}
                result={result}
            />
        </div >
    )
}

export default App;