import React, {useState} from 'react';


export default function StateHook(){
    const [count, setCount] = useState(0);
    const [_switch, setSwitch] = useState(true);

    return (
        <div>
            <p>you clicked {count} times.</p>
            <button onClick={() => setCount(count+1)}>
                click me 
            </button>

            <br /><br /><hr />

            <p>switch {_switch? "open": "close"}</p>
            <button onClick={() => setSwitch(!_switch)}>
                toggle
            </button>
        </div>
    )
}