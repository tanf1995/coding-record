import React, {useState} from 'react';


const InputTest = () => {
    const [val, setVal] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value, e.target.type);
        setVal(e.target.value);
    }

    return (
        <input value={val} onChange={handleChange} />
    )
}

export default InputTest;