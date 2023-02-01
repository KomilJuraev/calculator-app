import React from "react";

function Result(props) {
    const style = { color: props.isValid ? 'black' : 'red' };

    return (
        <div id="result-sec">
            <h3 id="result-el">Result: <span style={style}>{props.result}</span></h3>
        </div>
    );
}

export default Result;