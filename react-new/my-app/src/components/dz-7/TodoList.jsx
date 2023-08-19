import Input from "./Input"
import Button from "./Button";
import {useState} from "react";
import Item from "./Item";
import EditForm from "./EditForm";
const TodoList = (props) => {
    const [title, setTitle] = useState("");
    const [todos, setTodo] = useState([]);
    const [editedTodo, setEditedTodo] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const handleCreateTodo = () => {
        const newTodo = {
            id: Date.now(),
            title: title,
            checked: false
        }
        setTodo( [...todos, newTodo])
    };
    const handleDeleteTodo = (id) => {
        const newArr = todos.filter((i) => i.id !== id);
        setTodo(newArr);
    };
    const handleCheckTodo = (id) => {
        const newArr = todos.map((todo) => {
            if(todo.id === id){
                return {
                    ...todo,
                    checked: !todo.checked

                }
            }
            return todo;
        });
        setTodo(newArr);
    }
    const handleUpdateTodo = (updateTodo) => {
        const newArr = todos.map((todo) => {
            if(todo.id === updateTodo.id){
                return {
                    ...todo,
                    title: updateTodo.title

                }
            }
            return todo;
        });
        setTodo(newArr);
        setIsEditing(false);
    }
    const enterModeEdit = (todo) => {
        setEditedTodo(todo);
        setIsEditing(true);
    }

    return(

        <>
            { isEditing && <div>
                <EditForm onUpdate={handleUpdateTodo} editedTodo={editedTodo}/>
            </div> }

            <div className="Item">
            <Input value={title} onChange={setTitle}></Input>
            <Button text="create todo" onClick={handleCreateTodo}></Button>
            <div>
                {todos.length > 0 &&
                    todos.map((i) => (
                        <Item
                            key={i.id}
                            item={i}
                            onDelete={handleDeleteTodo}
                            onCheck={handleCheckTodo}
                            onEdit={enterModeEdit}
                        />
                    ))}
            </div>
        </div></>


    )
}
export default TodoList;
