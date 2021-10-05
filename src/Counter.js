import React from 'react'

function Counter() {

    const [value , setValue] = React.useState(0)
    return (
        <div>
            <p id="value">{value}</p>
            <button id="increment" onClick={() => setValue(value + 1)}>+</button>
            <button id="decrement" onClick={() => setValue(value - 1)}>-</button>
        </div>
    );
}

export default Counter
