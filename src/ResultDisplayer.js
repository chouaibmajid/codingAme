import React, { useState } from 'react';

// Modify this component so that it behaves​​​​​​‌​​‌​​​‌‌​‌‌​‌​‌​​​​‌‌​‌​ properly

function ResultDisplayer({ getNewResult }){
    const [result,setResult] = useState()
    function handleClick(){
        setResult(getNewResult());
    }
    
    return (<div>
        <button id="button" onClick={handleClick}>Click</button>
        {result != null && <span id="result">{result}</span>}
    </div>);
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
    return <ResultDisplayer getNewResult={() => 'test'} />;
}

// Do not change
export default ResultDisplayer;