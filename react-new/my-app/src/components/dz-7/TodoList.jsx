import Input from "./Input"
import Button from "./Button";
import {useState} from "react";
// import Item from "./Item";
const TodoList = (props) => {
    const [title, setTitle] = useState("");
    const [todos, setTodo] = useState([]);

    const handleCreateTodo = () => {
        const newTodo = {
            id: Date.now(),
            title: title,
            checked: false
        }
        setTodo( [...todos, newTodo])
        console.log(newTodo, 'newTodo');
    };
    // const handleDeleteTodo = (id) => {
    //     const newArr = todos.filter((i) => i.id !== id);
    //     setTodo(newArr);
    // };
    // const handleCheckTodo = () => {
    //     console.log('1');
    // }

    return(
        <div className="item">
            <Input value={title} onChange={setTitle}></Input>
            <Button text="create todo" onClick={handleCreateTodo}></Button>
            {/*<div>*/}
            {/*    {todos.length > 0 && todos.map((i) => <Item key={i.id} item={i} onDelete={handleDeleteTodo} onCkeck{handleCheckTodo}/>)}*/}
            {/*</div>*/}
        </div>

    )
}
export default TodoList;
