import {useState} from "react";

const Counter = () =>{
    const [counter,setCounter] = useState(10);
    const counterText = 'Counter';
    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    }
    return (
        <div>
            <h2>{counterText} {counter}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}
export default Counter