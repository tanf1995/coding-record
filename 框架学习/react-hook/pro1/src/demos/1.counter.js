import React, {useState, useEffect} from 'react';


export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log('useEffect!')
    })

    return (
        <div>
            <p>current count: {count}</p>

            <label>click button to add it. </label>
            <button
                onClick={handleAdd}
            >add</button>
        </div>
    )
}