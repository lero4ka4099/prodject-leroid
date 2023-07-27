import {useState, useEffect} from "react";

const Box = () => {
    const [count, setCount] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        console.log('Hello');
    }, [isAdmin]);

    return (
        <div className='box'>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}></button>
            <button onClick={() => setIsAdmin(!isAdmin)}>{isAdmin ? 'Admin' : 'User'}</button>
        </div>
    );
}

export default Box;